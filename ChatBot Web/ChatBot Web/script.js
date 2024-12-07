const quotes = {
  inspirational: [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  ],
  study: [
    "The expert in anything was once a beginner.",
    "What seems hard now will one day be your warm-up.",
    "Strive for progress, not perfection.",
  ],
  positivity: [
    "Stay positive, work hard, make it happen.",
    "Dream it. Believe it. Build it.",
    "Doubt kills more dreams than failure ever will. – Suzy Kassem",
  ],
};
// Get a random quote from a given category
function getRandomQuote(category) {
  if (quotes[category]) {
    const randomIndex = Math.floor(Math.random() * quotes[category].length);
    return quotes[category][randomIndex];
  } else {
    return "Category not found!";
  }
}
function respond(sender, response) {
  const container = document.querySelector(".text-box");

  // Create a new paragraph element with the sender and response
  const newMessage = document.createElement("p");
  newMessage.classList.add("text-content", "text-hidden"); // Add both classes (text-content and text-hidden)
  newMessage.innerHTML = `${sender} : ${response}`;

  // Append the new message to the container
  container.appendChild(newMessage);
  if (sender == "Bot") {
    setTimeout(() => {
      newMessage.classList.remove("text-hidden");
    }, 100);
  } else {
    setTimeout(() => {
      newMessage.classList.remove("text-hidden");
    }, 25);
  }
}
function chat() {
  let msg = document.getElementById("msg");
  if (msg.value != "") {
    respond("You", msg.value);
    if (msg.value == "hi") {
      respond(
        "Bot",
        "hi What type of motivation you are looking for : inspirational , study , positivity ?"
      );
    } else if (msg.value in quotes) {
      respond("Bot", getRandomQuote(msg.value));
    } else {
      respond(
        "Bot",
        "Sorry I didn't Understand please choose one from the above"
      );
    }
    msg.value = "";
  }
}
// Example Usage:
console.log(getRandomQuote("inspirational"));
const send = document.querySelector(".btn");
send.addEventListener("click", function (e) {
  e.preventDefault();
  chat();
});
window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // Check if the Enter key was pressed
    e.preventDefault();
    chat();
  }
});
