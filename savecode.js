
const OpenAI = require("openai");

// Set your OpenAI API key
const apiKey = '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';

const openai = new OpenAI({ apiKey });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
main();


// const openai = require('openai');
// const fs = require('fs');

// // Set your OpenAI API key
// const apiKey = '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';
// const prompt = fs.readFileSync('data.txt', 'utf-8'); // Assuming your data is in a file named data.txt

// const openaiInstance = new openai.OpenAI({apiKey:"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"});
// console.log("HERE IS THE INSANCE")

// // Example prompt
// const promptText = `
//   Your prompt goes here: ${prompt}
// `;

// // Make a request to OpenAI
// openaiInstance.complete({
//   engine: 'text-davinci-003', // You can use a different engine if needed
//   prompt: promptText,
//   max_tokens: 100, // Adjust as needed
// })
//   .then(response => {
//     console.log(response.choices[0].text);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// git remote add origin https://github.com/BatsaIke/gimpaassistBackend.git
// git branch -M main
// git push -u origin main
