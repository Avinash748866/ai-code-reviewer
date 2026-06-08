const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {
  try {
    const response = await aiService(req.body.code);
    res.send(response);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
};
module.exports.chatWithCode = async (req, res) => {
  try {

    const { code, question } = req.body;

   const prompt = `
Code:
${code}

Question:
${question}

Answer in markdown format.

Use:
# Headings
## Subheadings
- Bullet points

\`\`\`
code blocks
\`\`\`

Keep answers clean and readable.

Answer only about the provided code.
`;

    const response = await aiService(prompt);

    res.send(response);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message
    });

  }
};