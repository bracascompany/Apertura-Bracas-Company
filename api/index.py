
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def hello(path):
    return jsonify({
        "mensaje_api": "¡Servidor Serverless de Vercel ejecutando Python con Flask con exito!",
        "proyecto": "bracascompany",
        "estado": "Operativo en la nube"
    })

