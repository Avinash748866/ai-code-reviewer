# 🚀 AI Code Review Assistant

An AI-powered Code Review application that helps developers improve their code quality by providing instant feedback, suggestions, and best practices.

## 📌 Features

- 🔍 AI-based code review
- 🎨 Syntax highlighting for multiple languages
- 💻 Interactive code editor
- ⚡ Real-time review generation
- 🌙 Modern dark-themed UI
- 📝 Detailed code improvement suggestions

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Simple Code Editor
- PrismJS
- React Markdown
- Rehype Highlight

### Backend
- Node.js
- Express.js
- AI API Integration (OpenAI/Gemini)

## 📂 Project Structure

```
code-review/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── components/
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── services/
│   │
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/code-review.git
cd code-review
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend will run on:

```bash
http://localhost:3000
```

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

### For OpenAI

```env
OPENAI_API_KEY=your_api_key
```

### For Gemini

```env
GOOGLE_API_KEY=your_api_key
```

## 🚀 How It Works

1. User writes or pastes code in the editor.
2. Clicks the **Review** button.
3. Frontend sends code to backend API.
4. Backend forwards code to AI model.
5. AI analyzes:
   - Code Quality
   - Readability
   - Performance
   - Best Practices
   - Potential Bugs
6. Suggestions are returned and displayed in formatted markdown.

## 📸 Screenshots

### Code Editor

- Syntax Highlighting
- Multi-language Support
- Dark Theme UI

### Review Output

- AI Suggestions
- Bug Detection
- Optimization Tips

## 🔍 Supported Languages

- JavaScript
- Python
- Java
- C
- C++

## 📚 Future Improvements

- User Authentication
- Review History
- Download Review Report
- Multiple AI Models
- Code Complexity Analysis
- Team Collaboration Features

## 🎯 Learning Outcomes

Through this project, I learned:

- React State Management
- API Integration
- AI Model Integration
- REST APIs
- Express.js Backend Development
- Syntax Highlighting using PrismJS
- Full Stack Application Development

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Avinash Kumar Singh**

B.Tech CSE Student

Passionate about Full Stack Development, AI Applications, and Problem Solving.
