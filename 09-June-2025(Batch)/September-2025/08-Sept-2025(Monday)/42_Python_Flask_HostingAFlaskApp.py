"""
1) Theory Behind Hosting a Flask App
a) Local Development vs Hosting
- On your laptop: Flask runs with python app.py (development server).
- On the internet: You need a production server → that's where Gunicorn comes in.
b) Gunicorn
- A production server.
- It runs your Flask app more securely and efficiently.
- Example: gunicorn app:app (here first app = filename without .py, second app = Flask instance).
c) requirements.txt
- Hosting sites (like Render/Heroku) don't know what Python libraries your app needs.
- That's why you run:
pip freeze > requirements.txt
👆 This saves all installed packages (Flask, gunicorn, etc.) into a file.
- Render will automatically install these.
d) Procfile
- Tells Render (or Heroku) how to run your app.
- Example:
web: gunicorn app:app
Means → start a web process using gunicorn.
e) Render
- A cloud platform (like Heroku) that can run your Flask app.
- You push your project to GitHub, connect it to Render, and it deploys automatically.
------------------------------------------------------------------
2) Steps to Host Flask App on Render
a) Project Structure (example)
my-flask-app/
│── app.py
│── requirements.txt
│── Procfile

b) Create app.py (Flask App)

c) 3. Install Gunicorn
pip install gunicorn

d) Generate requirements.txt
pip freeze > requirements.txt
- Check that it includes at least:
Flask
gunicorn

e) Create a Procfile
(no extension, just Procfile)
web: gunicorn app:app
- Here:
a) first app = filename app.py
b) second app = Flask instance (app = Flask(__name__))

f) Push Code to GitHub
git init
git add .
git commit -m "Initial Flask app"
git branch -M main
git remote add origin https://github.com/username/my-flask-app.git
git push -u origin main

g) Deploy on Render
1) Go to https://render.com
2) Create a New Web Service.
3) Connect your GitHub repo.
4) Set Environment:
a) Build Command: pip install -r requirements.txt
b) Start Command: gunicorn app:app
5) Click Deploy

h) Test with Postman
- Once deployed, Render gives you a live URL, e.g.
https://my-flask-app.onrender.com/
- Open Postman → enter this URL → hit Send → you'll see the JSON response.
------------------------------------------------------------------
3) Key Points to Remember
- Flask dev server (python app.py) → only for local testing.
- Gunicorn (gunicorn app:app) → for production (hosting).
- requirements.txt → tells Render which libraries to install.
- Procfile → tells Render how to start your app.
- Render → hosts your app using GitHub repo.
"""
