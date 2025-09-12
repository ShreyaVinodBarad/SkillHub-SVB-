"""
1) How use chromedriver?
- Go to the link: https://googlechromelabs.github.io/chrome-for-testing/#stable
- Scroll down => chromedriver - win64 => Where you will get a link: https://storage.googleapis.com/chrome-for-testing-public/140.0.7339.82/win64/chromedriver-win64.zip => Click on the link and downloads starts...
- Extract the zip file
- Where you will get a file: chromedriver.exe
- Copy the above named file into the folder where you want to work with selenium.
"""

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

"""
👆
=> Imports:
a) webdriver → to control Chrome browser.
b) Service → tells Selenium where your ChromeDriver is.
c) time → used for delays (sleep).
d) By → helps to find elements (by class, id, etc.).
e) Keys → lets you press keyboard keys like ENTER.
"""

service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)
"""
👆
=> Start Chrome:
- Service(...) → gives the path of ChromeDriver.
- webdriver.Chrome(...) → opens Chrome browser for automation.
"""

driver.get("https://www.flipkart.com")
"""
👆
=> Open Website:
- Loads Flipkart homepage in the browser.
"""

# Input has a class named - Pke_EE
completeInp = driver.find_element(By.CLASS_NAME, "Pke_EE")
time.sleep(3)  # In seconds
"""
👆
=> Find Search Box:
- Looks for an input field with class Pke_EE (Flipkart's search bar).
- Waits 3 seconds to make sure page loads.
"""

completeInp.send_keys("Latest Mobiles", Keys.ENTER)
"""
👆
=> Search Action:
- Types "Latest Mobiles" inside the search box.
- Presses the Enter key to start searching.
"""

# Phone name class: KzDlHZ
phoneNames = driver.find_elements(By.CLASS_NAME, "KzDlHZ")
"""
👆
=> Find All Phone Names:
- Collects all elements (tags) with class KzDlHZ (Flipkart's product names).
- Saves them in a list called phoneNames.
"""
# print(phoneNames)
for item in phoneNames:
    print(item.text)
"""
👆
=> Print Results:
- Goes through each phone in phoneNames.
- Prints the text (the phone's name).
"""

# Phone cost class: Nx9bqj _4b5DiR

time.sleep(10)  # In seconds
# 👆 Pause: Keeps browser open for 10 seconds before closing (so you can see results).

"""
So in simple words:
Open Flipkart → Find search box → Type "Latest Mobiles" → Press Enter → Collect phone names → Print them → Wait 10 sec.
"""
