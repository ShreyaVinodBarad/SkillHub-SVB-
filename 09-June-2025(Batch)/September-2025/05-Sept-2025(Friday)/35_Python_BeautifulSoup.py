"""
1) What is Beautiful Soup?
- Beautiful Soup (bs4) is a Python library that helps you extract data from HTML or XML pages.
- Think of it like a filter or magnifying glass that makes messy website code easy to read and pick out the exact information you want.

2) Example in Real Life
- Imagine you have a huge book (a web page), but you only want:
a) The titles of chapters, or
b) The names in a list, or
c) A specific paragraph.
- Instead of reading the whole book manually, Beautiful Soup helps you jump directly to the part you want.

3) How It Works
- First, you download the web page (using libraries like requests).
- Then, you give that page to Beautiful Soup.
- Now, you can search inside the page with simple commands like:
a) Find a heading (<h1>)
b) Find all links (<a>)
c) Get text inside a paragraph (<p>)

4) Summary
- Beautiful Soup = Tool for web scraping (getting data from websites).
- Makes HTML easy to search, just like finding words in a book.
- Commonly used with requests to fetch data from the internet.
"""

from bs4 import BeautifulSoup as bs
from requests import get

# Example by Akash Sir 👇
url = "https://www.skillhubdev.com/"
content = get(url)
print(content)
# 👆 This brings back the HTML code of the webpage and stores it in content.
data = bs(content.text, "html.parser")
# 👆 Now you take the website’s HTML text (using content.text) and pass it into BeautifulSoup (bs)."html.parser" tells BeautifulSoup to read and organize the HTML properly so you can easily search elements. The result is stored in data.
print(data.prettify())
# 👆 This prints the HTML in a clean, indented format. Basically, it makes messy HTML look nice and readable.
# print(content.text)  => Gives the fetched data
res = data.find("blockquote")
print(res.text)
"""
👆 When to use .text?
- Use response.text (requests) → to get the whole HTML as plain text.
- Use tag.text (BeautifulSoup) → to get just the human-readable content inside a tag (no HTML).
"""
resAllData = data.find_all("blockquote")
print(resAllData)
for item in resAllData:
    print(item.text)
