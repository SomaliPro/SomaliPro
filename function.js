function sendMessage() {
    const input = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    const userMessage = input.value;

    if (userMessage.trim()) {
        displayMessage(userMessage, 'user');
        input.value = '';
        setTimeout(() => {
            const botReply = getBotReply(userMessage);
            displayMessage(botReply, 'bot');
        }, 500);
    }
}

function displayMessage(message, sender) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = `${sender === 'bot' ? 'Bot' : 'You'}: ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotReply(input) {
    const responses = {
        'hello': 'Hello! How can I help you?',
        'how are you?': 'I am just a bot, but I am doing well! How about you?',
        'bye': 'Goodbye! Have a great day!',
    };
    return responses[input.toLowerCase()] || 'I am not sure how to respond to that.';
}