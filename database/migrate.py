#  LOADING categories
import json

def read_categories():
    with open("categories.txt", "r", encoding="utf-8") as f:
        data = f.read()
        return json.loads(data)

import csv
check = dict()

def load_product_list(category, id):
    products = []
    with open(f"./data/{category}.csv", "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        headers = next(reader)
        for row in reader:
            product = dict(zip(headers, row))
            product.pop('__mediaUrl')
            product.pop('category')
            product['listedPrice'] = float(product['listedPrice'])
            product['sku'] = int(product['sku'])
            if product['sku'] in check:
                continue
            check[product['sku']] = True
            products.append(product)
    return products

def make(data):
    id =  int(data['categoryId'])
    data['categoryId'] = id
    if len(data['subcategories']) <= 0:
        if data['__seoName'] != None:
            data['products'] = load_product_list(data['__seoName'], id)
    else:
        data['products'] = []
    data.pop('__seoName')
    for sub in data['subcategories']:
        make(sub)

data = read_categories()

for category in data:
    make(category)

# MIGRATE
import requests as re

for category in data:
    print('Importing ', category['categoryName'])
    r = re.post(url="http://localhost:8080/api/category", json=category, headers= {
        'Content-Type': 'application/json'
    })
    print(r.status_code)
    print(r.content)