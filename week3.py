import urllib.request as request
import json
src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
with request.urlopen(src) as response:
    data=json.load(response) #利用JSON模組來處理JSON資料格式

tlist=data["result"]["results"]
#print(tlist)
#print(tlist)
with open("data.txt","w",encoding="utf-8") as file:
    for Attractions in tlist:
        #print(Attractions["stitle"])
        #print(Attractions["longitude"])
        #print(Attractions["latitude"])
        strfile = Attractions["file"]
        strfile2 = strfile.split('http://')
        #print(strfile2[1])
        file.write(Attractions["stitle"]+","+Attractions["longitude"]+","+Attractions["latitude"]+","+"http://"+strfile2[1]+"\n")