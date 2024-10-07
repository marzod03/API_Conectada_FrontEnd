# Gestor de Contactos

Esta es una aplicación de contactos construida con React. La aplicación permite visualizar una lista de contactos obtenidos de la API pública de JSONPlaceholder. Además, selecciona un número aleatorio de contactos de la API en cada carga de la página y permite realizar búsquedas en tiempo real de los contactos.

## Características

- Obtener contactos aleatorios desde la API pública.
- Buscar contactos en tiempo real.
- Añadir nuevos contactos (aunque los contactos no se guardan de manera persistente en la API, se almacenan en la sesión actual).
- Diseño moderno y responsivo.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **CSS3**: Para el diseño visual, utilizando técnicas de flexbox y estilos responsivos.
- **JSONPlaceholder API**: Proveedor de datos de contacto para la lista inicial. [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Requisitos

- Node.js (v12.0 o superior)
- npm (v6 o superior)

contact-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── AddContactForm.js
│   │   ├── ContactApp.js
│   │   ├── ContactItem.js
│   │   ├── ContactList.js
│   │   └── SearchContact.js
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md



  
