'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askQuestion = async () => {
    const res = await axios.post('optionally-humble-mammoth.ngrok-free.app/ask', { question });
    setAnswer(res.data.answer);
  };
  return (
    <div className="p-4 ml-20">
      <h1 className="text-xl font-bold mb-4">Ebovir AI Chatbot</h1>
      <textarea
        className="border p-2 w-full"
        rows={3}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something about Ebovir..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={askQuestion}>
        Ask
      </button>
      <div className="mt-4 p-2 border bg-gray-50">
        <strong>Answer:</strong>
        <p>{answer}</p>
      </div>
    </div>
  );
}
