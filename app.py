from flask import Flask
from routes import init_routes  # Importamos las rutas desde routes.py

# Crear la aplicación Flask
app = Flask(__name__)

# Inicializar las rutas
init_routes(app)

# Ejecutar la aplicación
if __name__ == "__main__":
    app.run(debug=True)
