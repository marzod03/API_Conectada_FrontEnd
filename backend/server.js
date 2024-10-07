const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Importacion de la API JSONPlaceholder
app.get('/api/contacts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    // Aleatorizar usuarios obtenidos de la api
    const shuffledUsers = users.sort(() => 0.5 - Math.random());

    // Cantidad de contactos que deseo que aparezcan
    const randomContacts = shuffledUsers.slice(0, 7);

    res.json(randomContacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
