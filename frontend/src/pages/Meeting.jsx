import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Mic, MicOff, Video, VideoOff, MoreVertical, 
  MessageSquare, Users, PhoneOff, Send, Paperclip, Smile,
  Share, Settings
} from 'lucide-react';

const ChatMessage = ({ sender, content, timestamp, isCurrentUser }) => (
  <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div
      className={`max-w-[70%] rounded-lg px-4 py-2 ${
        isCurrentUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <p className="font-medium">{sender}</p>
      <p>{content}</p>
      <p className="text-xs opacity-70 mt-1">
        {new Date(timestamp).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  </div>
);

const ParticipantList = ({ participants }) => (
  <div className="space-y-4">
    {participants.map((participant) => (
      <div key={participant.id} className="flex items-center space-x-3">
        <img
          src={participant.avatar || "/placeholder.svg"}
          alt={participant.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium">{participant.name}</p>
          <p className="text-sm text-gray-500">{participant.role}</p>
        </div>
      </div>
    ))}
  </div>
);

const Meeting = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hello everyone!',
      timestamp: new Date(Date.now() - 3600000),
      isCurrentUser: false,
    },
    {
      id: 2,
      sender: 'You',
      content: 'Hi John, looking forward to our session!',
      timestamp: new Date(Date.now() - 3500000),
      isCurrentUser: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [participants, setParticipants] = useState([
    { id: 1, name: 'John Doe', role: 'Mentor', avatar: '/placeholder.svg' },
    { id: 2, name: 'You', role: 'Mentee', avatar: '/placeholder.svg' },
  ]);
  
  const messagesEndRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: 'You',
        content: newMessage,
        timestamp: new Date(),
        isCurrentUser: true,
      },
    ]);
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEndCall = () => {
    navigate('/dashboard/session');
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    // Implement actual screen sharing logic here
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <main className="flex-grow flex">
        {/* Left side - Video area */}
        <div className="flex-grow flex flex-col">
          {/* Main video */}
          <div className="flex-grow relative bg-gray-900">
            <video
              className="w-full h-full object-cover"
              src="/api/placeholder/1280/720"
              autoPlay
              muted
              loop
            />
            {/* Participant video overlay */}
            <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/api/placeholder/480/360"
                autoPlay
                muted
                loop
              />
            </div>
          </div>

          {/* Bottom controls */}
          <div className="bg-white p-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                onClick={() => setIsMicOn(!isMicOn)}
                className={`p-3 rounded-full ${
                  isMicOn ? 'bg-gray-200' : 'bg-red-500 text-white'
                }`}
              >
                {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-3 rounded-full ${
                  isVideoOn ? 'bg-gray-200' : 'bg-red-500 text-white'
                }`}
              >
                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleScreenShare}
                className={`p-3 rounded-full ${
                  isScreenSharing ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                <Share className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-gray-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleEndCall}
              className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <PhoneOff className="w-5 h-5" />
              <span className="hidden sm:inline">End Call</span>
            </button>
          </div>
        </div>

        {/* Right side - Chat and participants */}
        <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-white border-l border-gray-200 flex flex-col transition-all duration-300 ease-in-out overflow-hidden`}>
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-4 font-medium ${
                activeTab === 'chat'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              <div className="flex items-center justify-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Chat</span>
              </div>
            </button>
            <button
              className={`flex-1 py-4 px-4 font-medium ${
                activeTab === 'participants'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('participants')}
            >
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>People</span>
              </div>
            </button>
          </div>

          {/* Content area */}
          <div className="flex-grow overflow-y-auto p-4">
            {activeTab === 'chat' ? (
              <div className="space-y-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} {...message} />
                ))}
                <div ref={messagesEndRef} />
              </div>
            ) : (
              <ParticipantList participants={participants} />
            )}
          </div>

          {/* Chat input */}
          {activeTab === 'chat' && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Smile className="w-5 h-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      {/* Toggle sidebar button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-l-md shadow-md"
      >
        {isSidebarOpen ? <MoreVertical className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default Meeting;