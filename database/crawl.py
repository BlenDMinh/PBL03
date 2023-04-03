from concurrent.futures import ThreadPoolExecutor
import requests as re
import json
import csv
from threading import Thread

from categories import categories

img = []

def dfs(category):
    json_category = dict()
    json_category['categoryId'] = category['parent']['code'].replace('MENU', '')
    json_category['categoryName'] = category['parent']['name']
    if category['parent']['seoName'] != None:
        json_category['__seoName'] = category['parent']['seoName']
        json_category['products'] = crawl(category['parent']['seoName'])
    
    json_category['subcategories'] = []
    for sub in category['lstChild']:
        json_category['subcategories'].append(dfs(sub))
    return json_category

def crawl(category):
    print(f'Crawling {category}')
    page_size = 1000000

    url = f'https://api-crownx.winmart.vn/it/api/web/v2/item/category?slug={category}&storeCode=1535&&pageSize={page_size}'

    r = re.get(url)
    data = json.loads(r.content)
    
    json_data = []

    with open(f'./data/{category}.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['sku', 'productName', 'category', 'listedPrice', 'brand', '__mediaUrl'])
        if(data["data"]["items"] == None):
            return json_data
        for item in data["data"]["items"]:
            data = download_item(item)
            writer.writerow([data[0], data[1], category, data[2], data[3], data[4]])
            json_data.append(data[0])
            
    return json_data

def download_item(item):
    sku = item['itemNo']
    name = item['name'].encode().decode()
    listedPrice = item['price']
    brand = item['brand']
    
    if(item['mediaUrl'] != None):
        img.append((item['mediaUrl'].encode().decode(), sku))
    
    return sku, name, listedPrice, brand,  "" if item['mediaUrl'] == None else item['mediaUrl'].encode().decode()

def download_image(img):
    url = img[0]
    name = img[1]
    try:
        img_data = re.get(url).content
        with open(f'./image/{name}.jpg', 'wb') as imhandler:
            imhandler.write(img_data)
        print(f'Done downloading {url}')
        update_progress()
    except Exception as e:
        print(f'Error downloading {url}')
        print(e)
        input("Press Enter to continue...")

data = []

import os
import sys
import math
import progressbar

l = len(categories['data'])
for i in progressbar.progressbar(range(l), redirect_stdout = True):
    data.append(dfs(categories['data'][i]))

with open('categories.txt', 'w', encoding='utf-8') as f:
    f.write(str(data))

count = 0

def update_progress():
    global count
    count += 1
    os.system('cls')
    sys.stdout.write('(%d / %d) [%-60s] %d%%\n' % (count, len(img), math.floor(count / len(img) * 60) * '=', math.floor(count / len(img) * 100)))
    sys.stdout.flush()

executor = ThreadPoolExecutor(max_workers=100)
results = executor.map(download_image, img)