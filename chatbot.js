function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
    if (chatbotWindow.style.display === 'flex') {
        const isReportPage = window.location.pathname.includes('report.html');
        const greeting = isReportPage
            ? 'Hello! I’m WasteWise Assistant. Need help reporting waste? I can guide you through the process or answer any questions!'
            : 'Hello! I’m WasteWise Assistant. How can I help you report waste or learn more about our platform?';
        addBotMessage(greeting);
    }
}

function addBotMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageElement = document.createElement('p');
    messageElement.className = 'bot-message';
    messageElement.innerHTML = message; // Use innerHTML to support links
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageElement = document.createElement('p');
    messageElement.className = 'user-message';
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (!message) return;

    addUserMessage(message);
    userInput.value = '';

    const lowerMessage = message.toLowerCase();
    const isReportPage = window.location.pathname.includes('report.html');

    if (lowerMessage.includes('report waste') || lowerMessage.includes('how to report')) {
        if (isReportPage) {
            addBotMessage('You’re on the Report Waste page! Here’s how to report:<br>1. Upload a clear photo of the waste.<br>2. Enter the location and describe the issue.<br>3. Click "Submit Report".<br>Need help with any step?');
        } else {
            addBotMessage('To report waste, follow these steps:<br>1. Spot the waste in your area.<br>2. Take a clear photo of the waste.<br>3. Go to the "Report Waste" page and submit your report with the photo and location details.<br>Would you like to go to the Report Waste page now? Click <a href="report.html">here</a>.');
        }
    } else if (lowerMessage.includes('photo') || lowerMessage.includes('upload')) {
        if (isReportPage) {
            addBotMessage('To upload a photo, click the file input field above, select an image of the waste, and ensure it’s clear for accurate reporting.');
        } else {
            addBotMessage('To upload a photo, go to the Report Waste page, select the file input field, and choose a clear image of the waste. Want to go there now? Click <a href="report.html">here</a>.');
        }
    } else if (lowerMessage.includes('what happens after') || lowerMessage.includes('after report')) {
        addBotMessage('After submitting your report, it’s sent to the relevant authorities. You’ll get updates on the progress via our platform.');
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
        addBotMessage('Contact us at <a href="mailto:info@ecowasteguardian.com">info@ecowasteguardian.com</a> or call +1 555-123-4567 for support.');
    } else if (lowerMessage.includes('report page') || lowerMessage.includes('go to report')) {
        addBotMessage('You can report waste by visiting the Report Waste page. Click <a href="report.html">here</a> to go there now.');
    } else if (lowerMessage.includes('back to home') || lowerMessage.includes('home page')) {
        addBotMessage('You can return to the home page by clicking <a href="index.html">here</a>.');
    } else {
        addBotMessage('I’m not sure about that. Could you clarify or ask about reporting waste, uploading photos, or contacting support?');
    }
}