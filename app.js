document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const preloader = document.getElementById("preloader");
    const startChatBtn = document.getElementById("start-chat");
    const chatContainer = document.getElementById("chat-container");

    const responses = [
        "vixxx",
        "🫠",
        "kiiiii",
        "naaaah",
        "kacebi ar mevasebit",
        "ar mevasebi",
        "ვკივიიიიიი",
        "vaxxx",
        "xoo",
        "vauuu",
        "ოოოო ხო იცი რო არ ვიცი წერააა"
    ];

    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);

        if (sender === "bot") {
            const avatar = document.createElement("img");
            avatar.src = "eleniko.png"; // Change this to the avatar you want
            avatar.alt = "AI Avatar";

            const nameLabel = document.createElement("div");
            nameLabel.classList.add("name-label");
            nameLabel.textContent = "ელენიკოGPT"; // Change this to her name

            messageDiv.appendChild(avatar);
            messageDiv.appendChild(nameLabel);
        }

        const textSpan = document.createElement("span");
        textSpan.textContent = message;
        messageDiv.appendChild(textSpan);

        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendBtn.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        appendMessage("user", userMessage);
        userInput.value = "";

        setTimeout(() => {
            const botMessage = responses[Math.floor(Math.random() * responses.length)];
            appendMessage("bot", botMessage);
        }, 500);
    });

    // Preloader logic
    startChatBtn.addEventListener("click", function() {
        preloader.style.display = "none";
        chatContainer.style.display = "flex";
    });
});
