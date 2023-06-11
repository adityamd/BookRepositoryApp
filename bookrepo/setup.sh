#!/bin/sh

export AWS_ACCESS_KEY_ID=AKIAWHW2VO7QSP3C2MGB
export AWS_SECRET_ACCESS_KEY=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
sudo ufw allow 8000
pip install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
