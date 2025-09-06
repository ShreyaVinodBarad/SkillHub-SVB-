from bs4 import BeautifulSoup as bs
from requests import get
import csv

url = "https://books.toscrape.com/catalogue/page-2.html"
content = get(url)
data = bs(content.text, "html.parser")
print(data.prettify())
resPriceData = data.find_all(class_="price_color")
print(resPriceData)
# for item in resPriceData:
#     print(item.text)
resBookName = data.select("h3 a")  # 👉 searches using CSS selectors (very flexible).
print(resBookName)
# for item in resBookName:
#     print(item.text)

# If want to apply loop over multiple list than use zip() function 👇
csvData = []
"""
👇
1) What zip() does
- zip() takes two (or more) lists and pairs up their elements.
"""
for itemBook, itemPrice in zip(resBookName, resPriceData):
    print(itemBook.text, itemPrice.text)
    csvData.append([itemBook.text, itemPrice.text])
# print(csvData)

f = open("BooksPriceData.csv", "w", newline="")
csvWriter = csv.writer(f)
csvWriter.writerow(
    ["NameOfBook", "PriceOfBook"]  # [] → because a row is a list of columns.
)
for item in csvData:
    csvWriter.writerow(item)
