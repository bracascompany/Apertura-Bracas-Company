
from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        
        response_data = {
            "mensaje_api": "¡Servidor Serverless de Vercel ejecutando Python nativo con exito!",
            "proyecto": "bracascompany",
            "estado": "Operativo en la nube"
        }
        
        self.wfile.write(json.dumps(response_data).encode("utf-8"))
        return

