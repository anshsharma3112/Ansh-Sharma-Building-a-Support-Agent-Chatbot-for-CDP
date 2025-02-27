let btnEl = document.getElementById("sendButton");
let queryInputEl = document.getElementById("queryInput");
let chatWindow = document.getElementById("chatWindow");
window.onload = function() {
    appendMessage("bot", "Hello! I am CDP Chatbot. How can I assist you today?");
};

let responses = {
    "segment": {
        "new source": "To set up a new source in Segment, go to the Sources tab, click 'Add Source', and follow the setup wizard. Learn more at: https://segment.com/docs/getting-started/",
        "audience creation": "In Segment, audiences can be created using Personas. Navigate to the Personas tab and follow the instructions to define an audience: https://segment.com/docs/personas/"
    },
    "mparticle": {
        "user profile": "To create a user profile in mParticle, use the mParticle API and call the 'setUserIdentity' method with the desired user ID. Documentation: https://docs.mparticle.com/",
        "data integration": "To integrate your data with mParticle, go to the Integrations tab, choose a partner, and follow the steps to connect. Learn more: https://docs.mparticle.com/"
    },
    "lytics": {
        "audience segment": "In Lytics, you can create an audience segment by navigating to the Audience tab, selecting the filters, and saving the segment. Learn more: https://docs.lytics.com/",
        "advanced configuration": "For advanced configuration in Lytics, you can use the APIs or explore advanced audience rules. Documentation: https://docs.lytics.com/"
    },
    "zeotap": {
        "data integration": "To integrate data with Zeotap, follow the integration guide in their documentation: https://docs.zeotap.com/home/en-us/",
        "user profile": "In Zeotap, user profiles are managed automatically as part of the CDP ingestion process. Contact Zeotap support for advanced configurations."
    }
};

const getResponse = (query) => {
    query = query.toLowerCase();

    for (let platform in responses) {
        if (query.includes(platform)) {
            for (let key in responses[platform]) {
                if (query.includes(key)) {
                    return responses[platform][key];
                }
            }
        }
    }

    return "Sorry, I couldn't find an answer to your question. Please ask something related to Segment, mParticle, Lytics, or Zeotap.";
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    const messageText = document.createElement("p");

    // Convert URLs into clickable links
    const linkifiedMessage = message.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank">$1</a>'
    );

    messageText.innerHTML = linkifiedMessage; // Use innerHTML to render links

    messageDiv.appendChild(messageText);
    chatWindow.appendChild(messageDiv);

    chatWindow.scrollTop = chatWindow.scrollHeight;
}


btnEl.addEventListener("click", function() {
    let query = queryInputEl.value.trim();
    if (!query) return;

    appendMessage("user", query);
    appendMessage("bot", getResponse(query));

    queryInputEl.value = "";
});

queryInputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        btnEl.click();
    }
});
