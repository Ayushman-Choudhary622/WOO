document.addEventListener('DOMContentLoaded', function () {
  const chatbotMessages = document.querySelector('.chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotButton = document.getElementById('chatbot-button');

  function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('chatbot-message', sender);
    message.textContent = text;
    chatbotMessages.appendChild(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  chatbotButton.addEventListener('click', () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage !== '') {
      addMessage(userMessage, 'user');
      chatbotInput.value = '';
      setTimeout(() => {
        generateBotResponse(userMessage);
      }, 500);
    }
  });

  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      chatbotButton.click();
    }
  });

  function generateBotResponse(input) {
    let response;
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes('hello')) {
      response = 'Hello! How can I assist you with the Olympiads?';
    } else if (lowerCaseInput.includes('register')) {
      response = 'You can register on the registration page. Let me redirect you!';
      setTimeout(() => {
        window.location.href = '../register.html';
      }, 1500);
    } else if (lowerCaseInput.includes('contact')) {
      response = 'You can contact us through our Contact Page.';
    } else {
      response = 'I\'m not sure how to respond. Please try asking about the Olympiads!';
    }
    addMessage(response, 'bot');
  }
});
