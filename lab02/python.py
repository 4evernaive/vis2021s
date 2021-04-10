import requests as req
import pandas as pd 


def lab02():
    resp = req.get("https://data.epa.gov.tw/api/v1/aqx_p_432?format=json&api_key=${yourkey}")
    data=resp.json()
    gg=[]
    # if data['success']=='true':
    #     hama={}
    #     for element in data['records']['location']:
    #         if element['parameter'][0]['parameterValue']=='臺北市':
    #             hama['氣象觀測站']=(element['locationName']+" "+element['stationId'])
    #             hama['攝氏溫度']=element['weatherElement'][3]['elementValue']
    #             hama['觀測時間']=element['time']['obsTime']
    #             gg.append(hama)
    #             hama={}
    
    for element in data['records']:
        if element['County']=='臺北市':
            hama={}
            hama['SiteName']=element['SiteName']
            hama['AQI']=element['AQI']
            hama['Status']=element['Status']
            hama['PM2.5']=element['PM2.5']
            hama['PM10']=element['PM10']
            hama['SO2']=element['SO2']
            hama['CO']=element['CO']
            gg.append(hama)
    df = pd.DataFrame(gg)
    csv_data = df.to_csv(index=False)
    return csv_data

print(lab02())