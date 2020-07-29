import gzip
import requests

base = 'http://tilestache:8000'

def app(environ, start_response):
    data = requests.get(f'{base}{environ["PATH_INFO"]}')
    decomp = gzip.decompress(data.content)
    start_response("200 OK", [
        ("Content-Type", "application/octet-stream"),
        ("Content-Length", str(len(decomp)))
        ])
    return iter([decomp])
