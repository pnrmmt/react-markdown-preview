import React, {useState} from 'react';
import ReactMarkdown from "react-markdown"
import './App.css';

function App() {
  const [markdown, setMarkdown]=useState("markdown")
  return (
    <div className="markdown__container">
      <textarea value={markdown} onChange={e=>setMarkdown(e.target.value)}/>

      
      <ReactMarkdown className="markdown__preview">{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
