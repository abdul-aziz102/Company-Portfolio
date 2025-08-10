import React, { useState } from 'react';
import axios from 'axios';
import { FaRobot } from 'react-icons/fa';

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);

  const portfolioContext = `
hello: Hello How can I help You with MB Tech
  Web Development Portfolio Information.

  Developer Name: Muhummad
  Specialization: Full-Stack Web Development
  Experience: 4 Years in Web Development
  Location: Karachi , Pakistan
  
  Technical Skills:
  • Frontend: React.js, Next.js, HTML5, CSS3, JavaScript, Tailwind CSS
  • Backend: Node.js, Express.js, MongoDB, Firebase
  • Mobile: React Native
  • Design: UI/UX Principles, Figma, Adobe XD
  
  Services Offered:
  1. Custom Website Development
  2. E-Commerce Solutions
  3. Web Application Development
  4. Responsive Design
  5. Website Maintenance
  6. SEO Optimization

  Contact Information:
  • Phone: [Your Contact Number]
  • Email: [Your Professional Email]
  • Portfolio: [Your Portfolio Website URL]
  • GitHub: [Your GitHub Profile]
  • LinkedIn: [Your LinkedIn Profile]

  Recent Projects:
  • E-Commerce Platform (React/Node.js)
  • Business Dashboard (Next.js/Tailwind)
  • Mobile App (React Native)
  • CMS Solution (MongoDB/Express)

  Availability: Available for freelance projects and full-time opportunities
`;

  const cleanAndFormatText = (text) => {
    return text
      .replace(/#+\s?/g, '') // remove markdown hashes
      .replace(/\*\*(.*?)\*\*/g, '$1') // remove bold markdown
      .replace(/\*/g, '•') // replace bullet-style asterisks
      .trim();
  };

  const generateAnswer = async () => {
    if (!question.trim()) return;

    const userMessage = { text: question, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion('');

    try {
      // Check if the question is "hello" (case insensitive)
      if (question.trim().toLowerCase() === 'hello') {
        const aiMessage = { text: "Hello How can I help You with MB Teach", sender: 'ai' };
        setMessages((prev) => [...prev, aiMessage]);
        return;
      }

      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtl06jWeRssYK2pvnsl8D5lrpPvq8vomg',
        method: 'post',
        data: {
          contents: [
            {
              parts: [
                {
                  text: `${portfolioContext}\nUser: ${question}`,
                },
              ],
            },
          ],
        },
      });

      const rawText = response.data.candidates[0].content.parts[0].text;
      const formattedText = cleanAndFormatText(rawText);

      const aiMessage = { text: formattedText, sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: '❌ Failed to get answer. Please try again.', sender: 'ai' },
      ]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-2 py-4 sm:px-4 sm:py-6 bg-[#d5fff7] text-[#23194f]">
      {/* Header */}
      <FaRobot className="text-yellow-500 text-xl sm:text-2xl" />
      <h1 className=" font-semibold text-xl sm:text-2xl py-2 text-center flex items-center gap-2">
         Portfolio AI Assistant <br/>MB Tech
      </h1>

      {/* Chat Box */}
      <div className="w-full flex flex-col justify-between rounded-xl border border-gray-300 shadow-md bg-gray-400 flex-1 max-h-[65vh] overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 bg-gray-200">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[85%] rounded-xl px-4 py-2 text-sm sm:text-base break-words whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-blue-200 text-black self-end ml-auto'
                  : 'bg-gray-200 text-black self-start mr-auto'
              }`}
            >
              {msg.text.split(/\n{2,}|\n•|\n-/).map((para, i) => (
                <p key={i} className="mb-2">
                  {para.trim().startsWith('•') || para.trim().startsWith('-')
                    ? '• ' + para.trim().replace(/^[-•]\s?/, '')
                    : para.trim()}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-gray-200 bg-white flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask something about MB Teach..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateAnswer()}
            className="flex-1 px-4 py-2 rounded-full text-sm sm:text-base border border-gray-400 bg-gray-50 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={generateAnswer}
            className="px-4 py-2 bg-[#23194f] text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:bg-[#252232] transition"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;