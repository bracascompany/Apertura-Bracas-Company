
import json

def app(environ, start_response):
    response_data = {
        "mensaje_api": "¡Servidor Serverless de Vercel ejecutando Python nativo con exito!",
        "proyecto": "bracascompany",
        "estado": "Operativo en la nube"
    }
    
    body = json.dumps(response_data).encode("utf-8")
    
    status = "200 OK"
    headers = [
        ("Content-Type", "application/json"),
        ("Content-Length", str(len(body)))
    ]
    
    start_response(status, headers)
    return [body]

