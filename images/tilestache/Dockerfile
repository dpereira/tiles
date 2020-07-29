FROM python:2.7

ADD requirements.txt /tmp/requirements.txt

RUN pip install -r /tmp/requirements.txt

ENTRYPOINT gunicorn "TileStache:WSGITileServer('/server/tilestache.config')" -b 0.0.0.0:8000
