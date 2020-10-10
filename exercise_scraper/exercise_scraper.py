import requests
from bs4 import BeautifulSoup

url ="https://wger.de/api/v2/exercise/?format=json&limit=469&language=2"
token ="Token 8797cfc7662c10091984b9c8ec3c9d8fe9f1ed6f"

r = requests.get(url, headers={'Authorization': token})
print(r.text)