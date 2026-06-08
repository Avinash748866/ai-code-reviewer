const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateContent(prompt) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a senior code reviewer with 7+ years experience. Review code, find issues, suggest fixes, performance improvements, security improvements and best practices."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3
    });

    return chatCompletion.choices[0].message.content;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = generateContent;