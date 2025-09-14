# End - To - End Testing
# Selenium used for Automation
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from time import sleep
from selenium.webdriver.common.by import By

"""
👆
- Importing required tools:
a) webdriver → runs the browser.
b) Service → tells Selenium where chromedriver.exe is.
c) sleep → makes code wait.
d) By → helps find elements (by ID, CSS, etc.).
"""

service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)
# 👆 Start Chrome browser using the chromedriver.exe.

url = "https://crud-operations-app-ykdk.onrender.com"
driver.get(url)
# 👆 Open the given website (CRUD app).

completeInp = driver.find_element(By.ID, "task")
completeInp.send_keys("Learn BootStrap")
# 👆 Find the input box with id="task" and type "Learn BootStrap" inside it.

driver.find_element(By.CSS_SELECTOR, "#todoForm button").click()
sleep(3)
"""
👆
- Find the Add button (inside form with id todoForm) and click it → task gets added.
- Wait for 3 seconds.
"""

# Update Logic
driver.find_element(By.CSS_SELECTOR, "tr .btn-outline-warning").click()
sleep(2)
"""
👆 
- Click the Edit button (yellow button) for the task.
- Wait 2 seconds.
"""
updateInp = driver.find_element(By.CSS_SELECTOR, "#todoTable input")
updateInp.clear()
sleep(2)
updateInp.send_keys("Learn UI & UX")
sleep(3)
"""
👆
- Find the editable input field inside the table.
- Clear the old text.
- Type new text: "Learn UI & UX".
- Wait 3 seconds.
"""
driver.find_element(By.CSS_SELECTOR, "tr .btn-success").click()
sleep(3)
# 👆 Click the Save button (green button). Wait 3 seconds.


# Delete Logic
driver.find_element(By.CSS_SELECTOR, "tr .btn-outline-danger").click()
sleep(2)
# 👆 Click the Delete button (red button). Wait 2 seconds.

alert = driver.switch_to.alert  # Selects the Alert
alert.accept()
sleep(1)
"""
👆
- A confirmation popup appears.
- Switch to alert box and click OK.
- Wait 1 second.
"""

input("Enter to quit...")
# 👆 Keeps the browser open until you press Enter in the terminal.
