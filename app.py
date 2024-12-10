from flask import Flask
from routes import init_routes  # Importamos las rutas desde routes.py
import os

# Crear la aplicación Flask
app = Flask(__name__)

# Inicializar las rutas
init_routes(app)

# Ejecutar la aplicación
if __name__ == "__main__":
        # Usa el puerto proporcionado por Render o un valor predeterminado (5000)
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

