
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({
        "mensaje_api": "¡Servidor Serverless de Vercel ejecutando Python nativo con exito!",
        "proyecto": "bracascompany",
        "estado": "Operativo en la nube"
    })

