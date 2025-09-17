import axios from "axios";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

function App() {
  const [prompt, setPrompt] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateBlog() {
    if (!prompt.trim()) {
      return alert("Please enter a topic!");
    }
    setLoading(true);
    setBlog("");

    try {
      const response = await axios.post("https://blog-generator-bb18.onrender.com/blog", {
        prompt,
      });
      setBlog(response.data.blog);
    } catch (err) {
      setBlog("Failed to generate blog. Please try again!");
    }
    setLoading(false);
  }

  return (
    <>
      {/* Navbar */}
      <div className="navbar">Blog Generator</div>

      {/* Main container */}
      <div className="container">
        <textarea
          className="textarea"
          rows={5}
          placeholder="Enter a topic to generate a blog..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button className="btn" onClick={generateBlog} disabled={loading}>
          {loading ? <div className="spinner"></div> : "Generate Blog"}
        </button>

        {loading && (
          <p className="loading-text">Generating your blog, it may take a while...</p>
        )}

        {/* Blog section*/}
        {blog && (
          <div className="blog">
            <ReactMarkdown>{blog}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
