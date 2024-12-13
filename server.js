require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware para processar JSON
app.use(express.json());

// String de conexão com o MongoDB
const uri = process.env.MONGO_URI || "mongodb+srv://Trendy:jimin@trendy.gpw21.mongodb.net/?retryWrites=true&w=majority&appName=Trendy";

// Conectar ao MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado ao MongoDB com sucesso!"))
.catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Definindo um schema de usuário
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Rota para registrar usuários
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    // Validação dos campos
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe!' });
    }

    // Criar um novo usuário
    const newUser = new User({
        name,
        email,
        password,
    });

    try {
        // Salvar o usuário no banco de dados
        await newUser.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar usuário!', error });
    }
});

// Servidor escutando na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
