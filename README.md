# Actividad 1. Conectar API con frontend

¡Bienvenido a ContactosApp! Este proyecto permite gestionar contactos utilizando un frontend en React y un backend en Express. El backend obtiene los contactos de la API pública `https://jsonplaceholder.typicode.com/users` y los expone de forma aleatoria cada vez que el usuario recarga la aplicación. El frontend consume estos datos para mostrarlos y permite a los usuarios realizar búsquedas y añadir contactos localmente.

## 🚀 Tecnologías Utilizadas
- **Frontend**: React, Axios, CSS3
- **Backend**: Node.js, Express, Axios, CORS
- **API Externa**: JSONPlaceholder para obtener datos ficticios de usuarios [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 📂 Estructura del Proyecto
```
my-contact-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddContactForm.js
│   │   │   ├── ContactApp.js
│   │   │   ├── ContactItem.js
│   │   │   ├── ContactList.js
│   │   │   └── SearchContact.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── public/
│   ├── package.json
│   └── node_modules/
└── README.md
```

## 🔧 Instalación
### Pre-requisitos:
- **Node.js**: Asegúrate de tener Node.js instalado en tu máquina.
- **NPM**: NPM viene con Node.js, por lo que no es necesario instalarlo por separado.

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/contact-app.git
cd contact-app
```

### Paso 2: Configurar el Backend

1. Navega a la carpeta `backend`:

   ```bash
   cd backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de Express:

   ```bash
   npm start
   ```

   Esto iniciará el servidor en `http://localhost:5000` y expondrá los contactos en la ruta `/api/contacts`.

### Paso 3: Configurar el Frontend

1. Navega a la carpeta `frontend`:

   ```bash
   cd ../frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación de React:

   ```bash
   npm start
   ```

   Esto iniciará la aplicación en `http://localhost:3000` y permitirá consumir los contactos desde el backend.

## 🌐 Uso de la Aplicación

1. **Obtener Contactos Aleatorios**: Cada vez que recargues la aplicación en el navegador, se obtendrá una lista de contactos aleatoria desde el backend.
2. **Buscar Contactos**: Utiliza la barra de búsqueda para filtrar los contactos en tiempo real.
3. **Añadir Contactos**: Completa el formulario de "Añadir Contacto" para agregar un nuevo contacto a la lista actual (no se guarda en el backend).

## 🌐 API Usada

- **Endpoint del Backend**: `GET /api/contacts`
  - Este endpoint devuelve una lista aleatoria de contactos obtenida desde `https://jsonplaceholder.typicode.com/users`.
- **Ejemplo de respuesta**:

   ```json
   [
     {
       "id": 1,
       "name": "Leanne Graham",
       "phone": "1-770-736-8031"
     },
     {
       "id": 2,
       "name": "Ervin Howell",
       "phone": "010-692-6593"
     }
   ]
   ```

## 🤝 Integrantes :D

-Miguel Armando Arroyo Narvaez
-Martin Zamora Ornelas

