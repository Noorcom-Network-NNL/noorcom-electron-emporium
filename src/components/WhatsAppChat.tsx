
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "254722723362"; // Your phone number from ContactSidebar
  
  const predefinedMessages = [
    "Hi! I'm interested in your products.",
    "Can you help me choose a laptop?",
    "What are your current deals?",
    "I need help with networking equipment.",
    "Can you provide a quote for office equipment?"
  ];

  const handleMessageClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border w-80 animate-in slide-in-from-bottom-2">
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#25D366"/>
                  <path d="M23.7 20.5c-.35-.18-2.1-1.04-2.42-1.16-.33-.12-.56-.18-.8.18-.23.35-.92 1.15-1.13 1.38-.21.23-.42.26-.77.09-.35-.18-1.47-.54-2.8-1.72-1.03-.92-1.72-2.05-1.92-2.4-.2-.34-.02-.53.15-.69.15-.15.34-.42.52-.62.17-.2.22-.35.33-.58.11-.23.06-.44-.03-.62-.09-.18-.8-1.92-1.1-2.63-.29-.7-.57-.6-.8-.61-.21 0-.45-.01-.7-.01-.25 0-.64.09-.99.45-.35.37-1.32 1.29-1.32 3.1 0 1.81 1.34 3.56 1.52 3.8.18.25 2.64 4.04 6.41 5.36C19.92 28 21.39 28 21.93 27.95c.54-.05 1.67-.73 1.9-1.44.23-.68.23-1.28.16-1.38-.06-.09-.32-.15-.67-.31Z" fill="#fff"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Noorcom Support</h4>
                <p className="text-sm text-green-100">Typically replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">
              Hi there! 👋 How can we help you today?
            </p>
            
            <div className="space-y-2 mb-4">
              {predefinedMessages.map((message, index) => (
                <button
                  key={index}
                  onClick={() => handleMessageClick(message)}
                  className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {message}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleDirectChat}
              className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-md font-medium transition-colors"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppChat;
