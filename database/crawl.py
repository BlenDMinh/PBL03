import requests
import json
import pandas as pd


urls = [
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=thit-hai-san-tuoi--c03&storeCode=1535", "name": "thit-hai-san-tuoi"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=trung-dau-hu--c33&storeCode=1535", "name": "trung-dau-hu"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=rau-cu--c02&storeCode=1535", "name": "rau-cu"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=trai-cay-tuoi--c32&storeCode=1535", "name": "trai-cay-tuoi"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=thuc-pham-che-bien--c04&storeCode=1535", "name": "thuc-pham-che-bien"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=thuc-pham-dong-lanh--c05&storeCode=1535", "name": "thuc-pham-dong-lanh"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=mi-thuc-pham-an-lien--c34&storeCode=1535", "name": "mi-thuc-pham-an-lien"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=thuc-pham-kho--c06&storeCode=1535", "name": "thuc-pham-kho"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=gia-vi--c35&storeCode=1535", "name": "gia-vi"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=banh-keo--c07&storeCode=1535", "name": "banh-keo"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=sua-san-pham-tu-sua--c08&storeCode=1535", "name": "sua-san-pham-tu-sua"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=do-uong-giai-khat--c09&storeCode=1535", "name": "do-uong-giai-khat"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber=2&pageSize=8&slug=nuoc-uong-co-con--c31&storeCode=1535", "name": "nuoc-uong-co-con"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=hoa-pham-tay-rua--c10&storeCode=1535", "name": "hoa-pham-tay-rua"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=cham-soc-ca-nhan--c11&storeCode=1535", "name": "cham-soc-ca-nhan"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=cham-soc-be--c12&storeCode=1535", "name": "cham-soc-be"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=do-gia-dung--c25&storeCode=1535", "name": "do-gia-dung"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=dien-gia-dung--c26&storeCode=1535", "name": "dien-gia-dung"
    },
    {
        "url": "https://api-crownx.winmart.vn/it/api/web/v2/item/category?orderByDesc=true&pageNumber={}&pageSize=8&slug=van-phong-pham-do-choi--c27&storeCode=1535", "name": "van-phong-pham-do-choi"
    },
]

for _url in urls:
    records = []
    i = 0
    for i in range(5000):
        i += 1
        subUrl = _url['url'].format(i)
        response = requests.get(subUrl)
        print(_url['name'] + ": " + str(i))

        if response.status_code == 200:
            data = json.loads(response.content.decode('utf-8'))

            try:
                for dataFilter in data['data']['items']:
                    record = {
                        'itemNo': dataFilter['itemNo'],
                        'name': dataFilter['name'],
                        'price': dataFilter['price'],
                        'salePrice': dataFilter['salePrice'],
                        'brand': dataFilter['brand'],
                    }
                    records.append(record)
            except:
                print("Done " + _url['name'])
                break
        else:
            print(
                f'Request failed with status code {response.status_code}: {response.content}')

    df = pd.DataFrame(records)
    df.to_csv(_url['name'] + '.csv', index=False, encoding='utf-8-sig')
