 
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPaperPlane, FaRegClock, FaRobot, FaCode, FaCloud, FaServer, FaMobileAlt, FaChartLine } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { User, Sparkles, Loader2, Mail, Phone, Building, Target, Award, Zap } from "lucide-react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "🚀 **Hello! I'm your AI Assistant for AZ.Tech** - Your Premier Digital Solutions Partner! I can help you with:\n\n• **Custom Web Development**\n• **UI/UX Design Services**\n• **Cloud & DevOps Solutions**\n• **Digital Marketing Strategy**\n• **Project Consultations**\n\nWhat can I help you with today? 💡",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Enhanced Context for AZ.Tech
  const AZTechContext = `
You are a professional AI assistant representing "AZ.Tech" - Advanced Digital Solutions & Technology Consulting.

**CRITICAL INSTRUCTIONS:**
- Provide ONLY the information the user specifically asks for
- Keep responses concise and professional
- Use engaging, tech-forward language
- Format responses with clear headings and bullet points
- Do NOT dump all information at once
- Emphasize our premium, advanced solutions
- Highlight our 10+ years of experience
- Mention our trusted partnerships and 150+ successful projects

**AZ.Tech Company Information:**

Company Overview:
- Name: AZ.Tech (Advanced Digital Solutions)
- Tagline: Where Innovation Meets Excellence
- Years Experience: 10+ years in digital transformation
- Projects Completed: 150+ successful projects
- Client Satisfaction: 95% satisfaction rate
- Team: 50+ expert professionals

Core Services:
1. **Web Development** - Custom websites, e-commerce, web apps
2. **UI/UX Design** - User-centered design, branding, prototypes
3. **Mobile Development** - iOS, Android, React Native apps
4. **Cloud Solutions** - AWS, Azure, Google Cloud deployment
5. **DevOps** - CI/CD, Docker, Kubernetes, infrastructure
6. **Digital Marketing** - SEO, Social Media, PPC campaigns
7. **IT Consulting** - Technology strategy and implementation

Key Differentiators:
- Advanced black & yellow brand identity
- Cutting-edge technology stack
- Premium client service
- Data-driven approach
- Agile development methodology
- 24/7 support availability

**Contact Information:**
- Email: contact@AZtech.com
- Phone: +1 (203) 446-5381 (USA)
- Phone: +971 543 367865 (UAE)
- Website: www.AZtech.com

**Response Rules:**
1. If user asks for contact info → Provide specific contact details only
2. If user asks about services → List only requested services with benefits
3. If user asks about expertise → Highlight our advanced technology stack
4. Always maintain professional, premium tone
5. Use emojis sparingly for emphasis
6. Keep responses focused and value-driven
7. Reference our brand colors (black & yellow) when appropriate
8. Mention our global presence (USA & UAE offices)
9. Include brief success metrics when relevant

**Brand Voice:**
- Confident and innovative
- Technology-focused
- Premium quality emphasis
- Results-oriented
- Forward-thinking
`;

  // Enhanced message formatting
  const formatMessageWithLinks = (text) => {
    let processedText = text
      .replace(/\*\*(.*?)\*\*/g, (match, p1) => `<strong class="text-yellow-300">${p1}</strong>`)
      .replace(/\*(.*?)\*/g, (match, p1) => `<em class="text-gray-300">${p1}</em>`)
      .replace(/\n/g, '<br/>')
      .replace(/•\s*(.*?)(?=•|$)/g, '<li class="flex items-start gap-2 py-1"><span class="text-yellow-400 mt-1">•</span><span>$1</span></li>')
      .replace(/🚀/g, '<span class="text-yellow-400">🚀</span>')
      .replace(/💡/g, '<span class="text-yellow-400">💡</span>')
      .replace(/⚡/g, '<span class="text-yellow-400">⚡</span>');
    
    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  // Improved text cleaning that preserves formatting
  const cleanAndFormatText = (text) => {
    return text
      .replace(/#{1,6}\s?/g, '')
      .replace(/```[\s\S]*?```/g, '')
      .trim();
  };

  const generateAnswer = async () => {
    if (!question.trim()) return;

    const userMessage = {
      text: question,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBFxVRCvOH6b0YNg3-C0oql6z_TgRvl_H4",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ 
                text: `${AZTechContext}\n\nUser Question: ${question}\n\nInstructions: Provide specific, concise, professional answer about AZ.Tech services. Focus on premium quality and innovation.` 
              }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 500,
          }
        },
      });

      const rawText = response.data.candidates[0].content.parts[0].text;
      const formattedText = cleanAndFormatText(rawText);

      setTimeout(() => {
        const aiMessage = {
          text: formattedText,
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    } catch (err) {
      console.error("Error occurred:", err); 
      setTimeout(() => {
        const fallback = {
          text: "⚡ Sorry, I'm experiencing connectivity issues. Please contact us directly:\n\n**Email:** contact@AZtech.com\n**Phone USA:** +1 (203) 446-5381\n**Phone UAE:** +971 543 367865",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, fallback]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Enhanced quick actions for AZ.Tech
  const handleQuickAction = (action) => {
    let response = "";
    
    switch(action) {
      case "webdev":
        response = "🚀 **Advanced Web Development:**\n• Custom websites & web applications\n• E-commerce solutions with advanced features\n• Progressive Web Apps (PWA)\n• API development & integration\n• Performance optimization & SEO\n\n💡 *10+ years experience, 150+ projects*";
        break;
      case "design":
        response = "🎨 **Premium UI/UX Design:**\n• User-centered interface design\n• Brand identity & visual systems\n• Interactive prototypes & wireframes\n• Design systems & component libraries\n• Usability testing & optimization\n\n🌟 *Creating memorable digital experiences*";
        break;
      case "contact":
        response = "📞 **Get In Touch with AZ.Tech:**\n**Global Offices:**\n• **USA:** +1 (203) 446-5381\n• **UAE:** +971 543 367865\n**Email:** contact@AZtech.com\n**Website:** www.AZtech.com\n\n📍 *Premium digital solutions since 2014*";
        break;
      case "services":
        response = "💼 **Comprehensive AZ.Tech Services:**\n• Web & Mobile Development\n• UI/UX & Brand Design\n• Cloud & DevOps Solutions\n• Digital Marketing Strategy\n• IT Consulting & Planning\n• Ongoing Support & Maintenance\n\n⚡ *End-to-end digital transformation*";
        break;
    }

    const actionMessage = {
      sender: "ai",
      text: response,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, actionMessage]);
  };

  // Enhanced AI Icon with AZ.Tech branding
  const AZIcon = ({ size = 8, className = "" }) => (
    <div className={`relative w-${size} h-${size} ${className}`}>
      <motion.div
        className="w-full h-full bg-gradient-to-br from-yellow-500 to-black rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30"
        whileHover={{ scale: 1.05 }}
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(255, 215, 0, 0.4)",
            "0 0 0 10px rgba(255, 215, 0, 0)",
            "0 0 0 0 rgba(255, 215, 0, 0)"
          ]
        }}
        transition={{ 
          boxShadow: { 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <FaRobot className="text-black text-xs" />
      </motion.div>
      <motion.div
        className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-black"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Enhanced Chat Messages with Glass Effect */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-gradient-to-b from-transparent to-black/50">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${
              msg.sender === "user" 
                ? "bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/30" 
                : "bg-gradient-to-br from-black to-gray-800 shadow-lg shadow-yellow-500/30 border border-yellow-500/30"
            }`}>
              {msg.sender === "user" ? (
                <User size={16} className="text-black" />
              ) : (
                <AZIcon size={10} />
              )}
            </div>

            {/* Message Bubble */}
            <div className={`max-w-[85%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col gap-2`}>
              <motion.div
                className={`px-4 py-3 rounded-3xl backdrop-blur-sm ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-br-md shadow-2xl shadow-yellow-500/30"
                    : "bg-black/80 text-gray-100 rounded-bl-md border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 backdrop-blur-sm"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {formatMessageWithLinks(msg.text)}
                </p>
              </motion.div>
              
              {/* Timestamp */}
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <FaRegClock size={10} />
                <span>{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Enhanced Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-black to-gray-800 shadow-lg shadow-yellow-500/30 border border-yellow-500/30 flex items-center justify-center">
                <AZIcon size={10} />
              </div>
              <div className="bg-black/80 rounded-3xl rounded-bl-md px-4 py-3 border border-yellow-500/30 shadow-lg backdrop-blur-sm">
                <div className="flex gap-1 items-center">
                  <span className="text-xs text-yellow-400/80 mr-2">AZ.Tech AI is thinking</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-yellow-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-yellow-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-yellow-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={chatEndRef} />
      </div>

      {/* Enhanced Input Area with Glass Effect */}
      <div className="p-4 border-t border-gray-700/50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Ask about AZ.Tech services, expertise, or contact information..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generateAnswer()}
              className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-600 bg-black/50 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              disabled={isTyping}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Zap size={16} className="text-yellow-400" />
            </div>
          </div>
          
          <motion.button
            onClick={generateAnswer}
            disabled={!question.trim() || isTyping}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold rounded-2xl hover:from-yellow-700 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl shadow-yellow-700/30 flex items-center justify-center min-w-[48px] backdrop-blur-sm"
          >
            {isTyping ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <FaPaperPlane size={16} />
            )}
          </motion.button>
        </div>
        
        {/* Enhanced Quick Suggestions for AZ.Tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { text: "Web Development", icon: FaCode, action: "webdev" },
            { text: "UI/UX Design", icon: FaMobileAlt, action: "design" },
            { text: "Contact Info", icon: Phone, action: "contact" },
            { text: "Our Services", icon: FaServer, action: "services" }
          ].map((suggestion) => (
            <motion.button
              key={suggestion.text}
              onClick={() => handleQuickAction(suggestion.action)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 text-xs bg-black/50 text-yellow-300 rounded-full hover:bg-yellow-600 hover:text-black transition-all duration-300 border border-yellow-500/30 backdrop-blur-sm flex items-center gap-2"
              disabled={isTyping}
            >
              <suggestion.icon size={12} />
              {suggestion.text}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced AI Icon for Widget
const EnhancedAZIcon = ({ size = 14, className = "" }) => (
  <motion.div
    className={`w-${size} h-${size} bg-gradient-to-br from-yellow-500 via-yellow-600 to-black rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/50 ${className}`}
    whileHover={{ scale: 1.1, rotate: 5 }}
    animate={{
      boxShadow: [
        "0 0 20px 0 rgba(255, 215, 0, 0.6)",
        "0 0 30px 10px rgba(255, 215, 0, 0.3)",
        "0 0 20px 0 rgba(255, 215, 0, 0.6)"
      ]
    }}
    transition={{
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }}
  >
    <FaRobot className="text-black text-lg" />
    <motion.div
      className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-black"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
);

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false);
  };

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      <motion.div
        onClick={handleToggle}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-yellow-600 via-yellow-700 to-black text-black rounded-2xl shadow-2xl shadow-yellow-700/60 cursor-pointer hover:shadow-3xl z-[9999] flex items-center justify-center group backdrop-blur-sm border border-yellow-400/30"
        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isPulsing 
            ? [
                "0 0 0 0 rgba(255, 215, 0, 0.8)",
                "0 0 0 20px rgba(255, 215, 0, 0)",
                "0 0 0 40px rgba(255, 215, 0, 0)",
              ]
            : "0 20px 40px rgba(255, 215, 0, 0.4)",
          y: [0, -5, 0]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: isPulsing ? Infinity : 0,
            repeatType: "loop",
          },
          y: {
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <div className="relative">
          {isOpen ? (
            <X size={24} className="text-black group-hover:scale-110 transition-transform" />
          ) : (
            <EnhancedAZIcon size={14} />
          )}
        </div>
        
        {/* Enhanced Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-20 bottom-1/2 translate-y-1/2 bg-black/90 text-yellow-300 text-sm px-4 py-2 rounded-xl backdrop-blur-sm border border-yellow-500/30 pointer-events-none whitespace-nowrap"
        >
          🤖 Chat with AZ.Tech AI
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-3 h-3 bg-black/90 rotate-45 border-r border-b border-yellow-500/30"></div>
        </motion.div>
      </motion.div>

      {/* Enhanced Chat Window with Glass Morphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.9 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
            className="fixed bottom-28 right-6 w-[95vw] max-w-[440px] h-[75vh] min-h-[520px] max-h-[720px] bg-black/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-yellow-900/40 overflow-hidden flex flex-col z-[9999] border border-yellow-500/30"
          >
            {/* Enhanced Header with Gradient */}
            <div className="bg-gradient-to-r from-black via-yellow-900/50 to-black text-white p-5 border-b border-yellow-500/30 relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-black rounded-full blur-3xl"></div>
              </div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <EnhancedAZIcon size={12} />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl text-white bg-gradient-to-r from-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                      AZ.Tech AI Assistant
                    </h2>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <p className="text-sm text-yellow-200">Online • Premium Support</p>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-xl flex items-center justify-center transition-all duration-300 group border border-yellow-500/30 backdrop-blur-sm"
                >
                  <X size={18} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden bg-gradient-to-br from-black/80 via-gray-800/50 to-black/80">
              <Chat />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Import for X icon (missing from original code)
import { X } from "lucide-react";

export default ChatbotWidget;