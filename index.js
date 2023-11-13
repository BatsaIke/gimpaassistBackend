const express = require('express');
const OpenAI = require('openai');
const fs = require('fs');
require('dotenv').config();

const app = express(); 

// Set your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("OpenAI API key is missing. Please set the OPENAI_API_KEY environment variable.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: apiKey });


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route for handling POST requests
app.use(express.json()); // Parse JSON requests
app.post('/response', async (req, res) => {
  try {
    // Extract the prompt from the request body
    const prompt = req.body.prompt;

    if (!prompt) {
      return res.status(400).json({ error: 'Enter a prompt to get a feedback.' });
    }

    const promptText = `${prompt}`;

    const completion = await openai.chat.completions.create({
      model: 'text-davinci-003', // Provide the model/engine name
      prompt: promptText,
      max_tokens: 100, // Adjust as needed
    });

    const responseText = completion.choices[0].text;
    res.json({ response: responseText });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const port =process.env.PORT||6000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
