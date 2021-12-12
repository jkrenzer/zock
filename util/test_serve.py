from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='build/zock', **kwargs)
httpd = HTTPServer(('localhost', 4443), Handler)
httpd.socket = ssl.wrap_socket(
    httpd.socket,
    certfile='ssl/cert.pem',
    keyfile='ssl/key.pem',
    server_side=True,
    )
httpd.serve_forever()
