import requests as req
import pandas as pd 


def lab02():
    resp = req.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-0558CC40-BDCC-42A1-8D99-C7B4A016A99B")
    data=resp.json()
    gg=[]
    if data['success']=='true':
        hama={}
        for element in data['records']['location']:
            if element['parameter'][0]['parameterValue']=='臺北市':
                hama['氣象觀測站']=(element['locationName'])
                hama['攝氏溫度']=element['weatherElement'][3]['elementValue']
                hama['相對濕度']=element['weatherElement'][4]['elementValue']
                hama['風向']=element['weatherElement'][1]['elementValue']
                hama['風速']=element['weatherElement'][2]['elementValue']
                gg.append(hama)
                hama={}
    df = pd.DataFrame(gg)
    csv_data = df.to_csv(index=False)
    return csv_data

print(lab02())