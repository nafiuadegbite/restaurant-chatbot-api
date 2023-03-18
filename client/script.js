const chatbox = document.getElementById("chatbox");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (event) => {
  if (event.which === 13) {
    sendMessage();
  }
});


async function sendMessage() {
  let message = messageInput.value;
  chatbox.innerHTML += "<p>User: " + message + "</p>";

  let response = await fetch("/api/v1/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  });

  let data = await response.json();

  let reply = Object.values(data);

  console.log(reply);

  chatbox.innerHTML += "<p>Bot: " + reply + "<p>";

  messageInput.value = "";
}
