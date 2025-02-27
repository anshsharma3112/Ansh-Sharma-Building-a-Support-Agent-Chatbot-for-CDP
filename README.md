# CDP Chatbot

This project is a simple chatbot application designed to assist users with queries related to various Customer Data Platforms (CDPs), including Segment, mParticle, Lytics, and Zeotap. It provides users with automated responses based on predefined information about platform features and functionalities.

## Features:
- **Interactive Chat Interface**: The chatbot provides a user-friendly interface where users can input their questions, and the bot responds with relevant information.
- **Platform-Specific Responses**: The bot has pre-configured answers for common tasks related to the CDPs supported (Segment, mParticle, Lytics, and Zeotap). For example, it provides steps to create new sources, integrate data, and configure user profiles.
- **Dynamic Link Handling**: URLs in the bot's responses are automatically converted into clickable links for easy access to additional resources, such as documentation and guides.
- **Responsive Design**: The bot interface adjusts to different screen sizes and allows users to interact with it on both desktop and mobile devices.

## How It Works:
1. **Initial Greeting**: When the page loads, the bot automatically greets the user with an introductory message: "Hello! I am CDP Chatbot. How can I assist you today?".
2. **User Input**: The user can type a query into the input field and click the "Send" button or press "Enter" to submit the query.
3. **Response Matching**: The bot processes the user’s query and looks for relevant keywords related to the supported CDPs. If it finds a match, it responds with the appropriate pre-configured answer.
4. **Fallback Response**: If no relevant response is found for the user's query, the bot responds with a default message: "Sorry, I couldn't find an answer to your question. Please ask something related to Segment, mParticle, Lytics, or Zeotap."
5. **Displaying Responses**: The chat window dynamically updates with both the user’s message and the bot’s response. The chat window automatically scrolls down to show the most recent messages.

## Files:
- `index.html`: Contains the structure and layout of the chat interface, including input fields and buttons.
- `style.css`: Defines the appearance of the chatbot, including styles for the chat window, messages, and overall page layout.
- `script.js`: Handles the logic behind the chatbot, such as processing user input, generating responses based on predefined data, and updating the UI dynamically.

## Technologies Used:
- **HTML**: Used for the basic structure of the page.
- **CSS**: For styling the chat interface, making it responsive and user-friendly.
- **JavaScript**: Powers the chatbot's interactive features, including event handling, query processing, and dynamically updating the chat window.

## Interactive Features
   - **Cell Selection**: Click on cells, rows, or columns to select and apply operations.
   - **Real-Time Updates**: Changes reflect immediately in the table.
