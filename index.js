const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = '12345'; 


app.use(express.json());


app.get('/generate-token', (req, res) => {
  const messages = [
    "Mensagem 1: A vida é uma aventura!",
    "Mensagem 2: O sucesso vem com esforço.",
    "Mensagem 3: Nunca desista dos seus sonhos.",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const token = jwt.sign({ message: randomMessage }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

app.post('/decode-token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: decoded.message });
  } catch (err) {
    res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
