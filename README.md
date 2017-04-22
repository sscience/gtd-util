## gtd util

Install virtual env and build packages

    virtualev venv
    pip install -r requirements.txt


parse the data for the report

  `./filter.py`

docker-compose run web /usr/local/bin/python filter.py

Run the dev server

  `python -m SimpleHTTPServer`

Take a look at local host


# DOCKER

docker-compose run web /usr/local/bin/python create_db.py
