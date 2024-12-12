const express = require('express');
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Rota para registrar usuários
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    // Aqui você pode adicionar a lógica para salvar no MongoDB

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

// Servidor escutando na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
