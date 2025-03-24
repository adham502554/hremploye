document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.createElement("div");
    chatContainer.id = "chat-container";

    // Create the chat box
    const chatBox = document.createElement("div");
    chatBox.id = "chat-box";

    // Create the chat header
    const chatHeader = document.createElement("div");
    chatHeader.id = "chat-header";
    chatHeader.textContent = "Chat with us";
    chatBox.appendChild(chatHeader);

    // Create the chat body
    const chatBody = document.createElement("div");
    chatBody.id = "chat-body";
    chatBox.appendChild(chatBody);

    // Create the chat input and send button container
    const chatInputContainer = document.createElement("div");
    chatInputContainer.style.display = "flex";
    chatInputContainer.style.justifyContent = "space-between";

    const chatInput = document.createElement("input");
    chatInput.id = "chat-input";
    chatInput.placeholder = "Type a message...";

    const sendButton = document.createElement("button");
    sendButton.id = "send-btn";
    sendButton.textContent = "Send";

    chatInputContainer.appendChild(chatInput);
    chatInputContainer.appendChild(sendButton);

    chatBox.appendChild(chatInputContainer);
    chatContainer.appendChild(chatBox);
    document.body.appendChild(chatContainer);

    // Create the open chat button
    const openChatBtn = document.createElement("button");
    openChatBtn.id = "open-chat-btn";
    openChatBtn.textContent = "+";
    document.body.appendChild(openChatBtn);

    // Functionality to open chat
    openChatBtn.addEventListener('click', function() {
        chatContainer.style.display = 'block';
        openChatBtn.style.display = 'none'; // Hide the open chat button after clicking
    });

    // Functionality to close chat
    chatHeader.addEventListener('click', function() {
        chatContainer.style.display = 'none';
        openChatBtn.style.display = 'block'; // Show the open chat button when chat is closed
    });

    // Handle sending messages on Enter or clicking the send button
    sendButton.addEventListener('click', function() {
        if (chatInput.value.trim() !== '') {
            const newMessage = document.createElement('div');
            newMessage.textContent = chatInput.value;
            chatBody.appendChild(newMessage);
            chatInput.value = ''; // Clear the input field
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
        }
    });

    // Handle sending message with Enter key
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && chatInput.value.trim() !== '') {
            const newMessage = document.createElement('div');
            newMessage.textContent = chatInput.value;
            chatBody.appendChild(newMessage);
            chatInput.value = ''; // Clear the input field
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
        }
    });
});
