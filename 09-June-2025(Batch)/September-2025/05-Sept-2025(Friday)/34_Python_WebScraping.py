"""
1) What is Web Scraping?
- Web Scraping means collecting information from websites automatically using a computer program.
- Instead of copying and pasting data by hand, we write Python code that:
a) Visits a website
b) Reads the page content (HTML)
c) Extracts useful data (like headlines, prices, reviews, tables, etc.)
d) Saves it in a structured format (CSV, Excel, database)

2) How Websites Work
- Every website is built using HTML, CSS, and JavaScript.
- The HTML contains the main data (like text, links, images, etc.).
- Python can download that HTML, and then we can search inside it for the parts we want.

3) Tools Used in Python
- Some popular libraries:
a) requests → downloads the webpage (HTML code).
b) BeautifulSoup → helps read and extract data from the HTML easily.
c) pandas → to store the data in tables (CSV, Excel).
d) selenium / playwright → if the website is dynamic (loads content with JavaScript).

4) Basic Flow of Web Scraping
a) Send a request to the website and get the HTML (with requests).
b) Parse the HTML (with BeautifulSoup).
c) Locate the data you want (using tags like <div>, <h1>, <a>, etc.).
d) Extract & Clean the text.
e) Save it (in CSV, Excel, database).

5) Important Points
- Always check the website's robots.txt file and terms of service (some sites don't allow scraping).
- Don't overload a site with too many requests (be respectful).
- Never scrape private or sensitive data.

6) In short:
- Web Scraping = automatic copy-pasting from websites using Python.
"""
