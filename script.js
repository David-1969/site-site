document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement("div");
            messageElement.className = "message";
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
            chatInput.value = "";  // Clear the input
        }
    }

    chatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    loadMoreButton.addEventListener("click", loadMoreMessages);


    window.sendMessage = sendMessage;  // Make sendMessage available globally for the button click
});


<button2 onclick="window.location.href='https://www.poetryinternational.com/en/poets-poems/poems/poem/103-9470_ON-MY-WAY-HOME">
No Meu Próprio Caminho
</button2>