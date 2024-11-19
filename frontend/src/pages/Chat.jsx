import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Send, Paperclip, Smile } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Button from '../components/common/Button'

const Chat = () => {
  const { chatId } = useParams()
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: "Hi, I'm looking forward to our session!",
      sender: 'other',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: '2',
      content: 'Hello! Yes, me too! Do you have any specific topics you'd like to focus on?',
      sender: 'user',
      timestamp: new Date(Date.now() - 3500000),
    },
  ])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!newMessage.trim()) return

    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        content: newMessage,
        sender: 'user',
        timestamp: new Date(),
      },
    ])
    setNewMessage('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center space-x-4">
            <img
              src="/placeholder.svg"
              alt="Sarah Johnson"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold text-gray-900">Sarah Johnson</h2>
              <p className="text-sm text-gray-500">Senior Product Manager</p>
            </div>
          </div>
        </div>

        <div className="h-[calc(100vh-16rem)] overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="bg-white border-t border-gray-200 p-4">
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
            <Button variant="primary" onClick={handleSend}>
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat