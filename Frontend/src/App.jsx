import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)
  const [ loading, setLoading ] = useState(false)
  const [language, setLanguage] = useState("cpp");

  const [question, setQuestion] = useState("");
const [messages, setMessages] = useState([]);
const [chatLoading, setChatLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll()
  }, [])

async function reviewCode() {
  try {
    setLoading(true);

   const response = await axios.post(
  "https://ai-code-reviewer-o95h.onrender.com/ai/get-review",
  { code }
);

    setReview(response.data);

  } catch (error) {

    setReview(
      error?.response?.data?.message ||
      error?.message ||
      "Error generating review"
    );

  } finally {

    setLoading(false);

  }
}
function copyReview() {
  navigator.clipboard.writeText(review);
  alert("Review copied!");
}

async function askQuestion() {

  if (!question.trim()) return;

  try {

    setChatLoading(true);

    const userMessage = {
      role: "user",
      text: question
    };

    setMessages(prev => [...prev, userMessage]);

    const response = await axios.post(
  "https://ai-code-reviewer-o95h.onrender.com/ai/chat",
  {
    code,
    question
  }
);

    const aiMessage = {
      role: "assistant",
      text: response.data
    };

    setMessages(prev => [...prev, aiMessage]);

    setQuestion("");

  } catch (error) {

    console.error(error);

  } finally {

    setChatLoading(false);

  }
}

  return (
    <>
      <main>
        <div className="left">

  <div className="editor-header">

    <span>📄 main.{language}</span>

   <select
  value={language}
  onChange={(e) => {
    const lang = e.target.value;
    setLanguage(lang);

    if (lang === "js") {
      setCode("function sum(a, b) {\n  return a + b;\n}");
    }

    if (lang === "py") {
      setCode("def sum(a, b):\n    return a + b");
    }

    if (lang === "java") {
      setCode(
        "class Main {\n  public static void main(String[] args) {\n  }\n}"
      );
    }

    if (lang === "cpp") {
      setCode(
        "#include <iostream>\nusing namespace std;\n\nint main() {\n\n}"
      );
    }
  }}
  
>
  <option value="js">JavaScript</option>
  <option value="cpp">C++</option>
  <option value="java">Java</option>
  <option value="py">Python</option>
</select>

  </div>

  
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={(code) => {
  const prismLanguage =
    language === "js"
      ? "javascript"
      : language === "py"
      ? "python"
      : language === "java"
      ? "java"
      : "cpp";

  return prism.highlight(
    code,
    prism.languages[prismLanguage],
    prismLanguage
  );
}}
              padding={10}
              style={{
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: 16,
  border: "none",
  borderRadius: "5px",
  height: "100%",
  width: "100%",
  backgroundColor: "#0d1117",
  color: "#e6edf3"
}}
            />
          </div>
          <div
  onClick={!loading ? reviewCode : undefined}
  className="review">

  {loading ? "Reviewing..." : "Review"}

</div>
        </div>
 <div className="right">

  <div className="review-content">

    {review && (
      <div className="copy-btn" onClick={copyReview}>
        📋 Copy Review
      </div>
    )}

    <Markdown rehypePlugins={[rehypeHighlight]}>
      {review}
    </Markdown>

    <h3 style={{marginTop:"20px"}}>
  💬 Conversation
</h3>
    <div className="chat-messages">

      {messages.map((msg, index) => (
        <div
          key={index}
          className={
            msg.role === "user"
              ? "user-message"
              : "ai-message"
          }
        >
          {
            msg.role === "assistant"
              ? (
                <Markdown rehypePlugins={[rehypeHighlight]}>
                  {msg.text}
                </Markdown>
              )
              : msg.text
          }
        </div>
      ))}

    </div>

  </div>

  <div className="chat-section">

    <input
      type="text"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          askQuestion();
        }
      }}
      placeholder="Ask anything about this code..."
    />

    <button onClick={askQuestion}>
      {chatLoading ? "Thinking..." : "Send"}
    </button>

  </div>

</div>
      </main>
    </>
  )
}



export default App
