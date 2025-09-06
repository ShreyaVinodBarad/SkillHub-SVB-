from bs4 import BeautifulSoup as bs

f = open("36_Python_WebScrapingPracticeHTMLFile.html", "r")
data = f.read()
# print(data)

dataOfHTML = bs(data, "html.parser")
res = dataOfHTML.find_all(class_="card-text")
# 👆 class_ => Find all tags where the HTML class attribute is card-text
print(res)
for item in res:
    print(item.text)
