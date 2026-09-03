
import json

def handler(request):
    response_data = {
        "mensaje_api": "¡Servidor Serverless de Vercel ejecutando Python nativo con exito!",
        "proyecto": "bracascompany",
        "estado": "Operativo en la nube"
    }
    
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps(response_data)
    }

