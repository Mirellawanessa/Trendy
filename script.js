// Função para mostrar a tela de login
function showLogin() {
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('create-account-box').style.display = 'none';
    document.getElementById('forgot-password-box').style.display = 'none';
    document.getElementById('home-box').style.display = 'none';
}

// Função para mostrar a tela de criar conta
function showCreateAccount() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('create-account-box').style.display = 'block';
    document.getElementById('forgot-password-box').style.display = 'none';
    document.getElementById('home-box').style.display = 'none';
}

// Função para mostrar a tela de esqueci a senha
function showForgotPassword() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('create-account-box').style.display = 'none';
    document.getElementById('forgot-password-box').style.display = 'block';
    document.getElementById('home-box').style.display = 'none';
}

// Função de login do usuário
function loginUser(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Aqui você pode adicionar a lógica de verificação de login (com uma API ou sistema de backend)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Simulando um login bem-sucedido
    if (username === "user" && password === "password") {
        // Redirecionar para a página Home
        showHome();
        fetchWeather();
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

// Função para mostrar a página Home
function showHome() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('create-account-box').style.display = 'none';
    document.getElementById('forgot-password-box').style.display = 'none';
    document.getElementById('home-box').style.display = 'block';
}

// Função para buscar a previsão do tempo
function fetchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Substitua com sua chave de API da OpenWeather
    const city = 'São Paulo'; // Ou use a localização do usuário
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            document.getElementById('weather-info').innerHTML = `Current temperature in ${city}: ${temp}°C, ${weatherDescription}`;
            provideFashionTips(temp);
        })
        .catch(error => console.error('Error fetching weather:', error));
}

// Função para fornecer dicas de moda baseadas na temperatura
function provideFashionTips(temperature) {
    let tips = '';
    if (temperature < 15) {
        tips = 'It\'s cold outside! Wear a warm jacket, scarf, and gloves.';
    } else if (temperature >= 15 && temperature < 25) {
        tips = 'Perfect weather for a light jacket or sweater!';
    } else {
        tips = 'It\'s hot outside! Wear light and breathable clothes.';
    }
    document.getElementById('fashion-tips').innerHTML = tips;
}

// Iniciar com a tela de login
showLogin();
