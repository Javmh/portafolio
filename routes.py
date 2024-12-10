from flask import render_template

def init_routes(app):
    # Ruta para la página de carga
    @app.route('/')
    def loading():
        return render_template('loading/loading.html')  # Página de carga

    # Ruta para la página de inicio (home)
    @app.route('/home')
    def home():
        return render_template('home.html')  # Página de inicio
    
     # Ruta para la página de inicio (sobre_mi)
    @app.route('/sobre_mi')
    def sobre_mi():
        return render_template('sobre_mi.html')

     # Ruta para la página de trabajos o portafolio
    @app.route('/trabajos_demo')
    def trabajos_demo():
        return render_template('trabajos_demo.html')
    
