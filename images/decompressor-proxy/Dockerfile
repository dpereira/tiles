FROM python:3

ADD proxy.py /server/proxy.py
ADD requirements.txt /server/requirements.txt

RUN pip install -r /server/requirements.txt

ENTRYPOINT PYTHONPATH=/server gunicorn proxy:app -b 0.0.0.0:8080
