// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import './chatbot.css'
const Chatbot = () => {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState('')
  const [remainingQuestions, setRemainingQuestions] = useState([])
  const [input, setInput] = useState('')

  const initialQuestions = [
    'Hello',
    'Available properties',
    'How much is the rent?',
    'What are the rental requirements?',
    'Can I schedule a property viewing?',
    'Tell me about the application process',
    'What utilities are included in the rent?',
    'Are pets allowed?',
    'Goodbye',
  ]

  useEffect(() => {
    setRemainingQuestions(initialQuestions)
  }, [])

  const handleQuestionSelection = question => {
    if (!selectedQuestion) {
      setSelectedQuestion(question)
      setInput(question)
    }
  }

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }])
      handleChatbotResponse(input)
      setInput('')
      setSelectedQuestion('')
    }
  }

  const handleChatbotResponse = userInput => {
    let response

    switch (userInput.toLowerCase()) {
      case 'hello':
        response = 'Hi there! How can I help you with property rental today?'
        break
      case 'available properties':
        response = (
          <>
            Sure we have several properties available. What city are you
            interested in. <br /> You can also click the link below to see
            available apartments
            <br />
            For more details, you can visit our <br />{' '}
            <div className="pt-3">
              <a href="/properties" className="mt-2 px-2 py-1 bg-slate-800">
                See available properties
              </a>
            </div>
          </>
        )
        break
      case 'how much is the rent?':
        response =
          'The rent varies depending on the property. Could you specify your budget range?'
        break
      case 'what are the rental requirements?':
        response =
          'To rent a property, you typically need to provide proof of income, references, and undergo a background check.'

        break
      case 'can I schedule a property viewing?':
        response =
          'Certainly! Please provide your contact details, and we will arrange a convenient time for you to view the property.'
        break
      case 'tell me about the application process':
        response =
          'The application process involves submitting an application form, undergoing a background check, and signing the lease agreement upon approval.'
        break
      case 'what utilities are included in the rent?':
        response =
          'Utilities included in the rent may vary by property. Please specify the property you are interested in for more details.'
        break
      case 'are pets allowed?':
        response = (
          <>
            The application process involves submitting an application form,
            undergoing a background check, and signing the lease agreement upon
            approval.
            <br />
            For more details, you can visit our{' '}
            <a
              href="https://example.com/application-process"
              className="border"
              target="_blank"
              rel="noopener noreferrer"
            >
              application process page
            </a>
            .
          </>
        )
        break
      case 'goodbye':
        response =
          'Thank you for chatting with us! If you have more questions in the future, feel free to ask.'
        setRemainingQuestions(initialQuestions) // Reset remaining questions
        break
      default:
        response = "I'm sorry, I didn't understand that. How can I assist you?"
    }

    setMessages([...messages, { text: response, sender: selectedQuestion }])
  }

  useEffect(() => {
    // Welcome message
    setMessages([
      { text: 'Welcome to our property rental chatbot!' },
      { text: 'Ask me about available properties or rental prices.' },
    ])
  }, [])

  return (
    <div className="z-20 exo fixed bottom-10 text-[12px] right-10 max-w-[20rem]">
      {showChat ? (
        <div className="bg-slate-200 relative h-[30rem]">
          <div className=" top-0 right-0 w-[100%] text-[16px] flex items-center justify-between px-[1rem] py-[5px] text-white bg-slate-400 shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8943/8943377.png"
              className="w-10 h-10"
            />
            <FaTimes
              onClick={() => setShowChat(false)}
              className="text-[17px] text-slate-600 cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 h-[90%] p-[1rem]">
            <div className="h-[20rem] overflow-y-scroll">
              {/* {selectedQuestion && (
                <div className="flex flex-col gap-2 mt-2">
                  <div className="border text-start bg-slate-300 w-fit p-1">{selectedQuestion}</div>
                </div>
              )} */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-2 mt-2 ${message.sender === 'chatbot' ? 'items-end' : 'items-start'}`}
                >
                  {message.sender && (
                    <div className="border text-start bg-slate-300 w-fit p-1">
                      {message.sender}
                    </div>
                  )}
                  <div className="flex justify-end w-[100%]">
                    <p
                      className={` bg-slate-600 text-white w-fit p-1 max-w-[90%]`}
                    >
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <ul className="flex border-t border-white pt-4 flex-row mt-3 overflow-x-auto gap-x-5 gap-y-2 p-1">
                {remainingQuestions.map((question, index) => (
                  <li
                    key={index}
                    className={`border bg-slate-600 px-2 h-[2rem] whitespace-nowrap flex items-center text-white cursor-pointer ${
                      selectedQuestion === question ? 'bg-slate-700' : ''
                    }`}
                    onClick={() => handleQuestionSelection(question)}
                  >
                    {question}
                  </li>
                ))}
              </ul>
              <div className="flex mt-3 bg-slate-600">
                <input
                  className="flex-1 border p-2"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  disabled
                />
                <button
                  className="p-2 text-white text-[16px]"
                  onClick={handleSendMessage}
                >
                  <IoMdSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-white flex flex-col justify-center items-center cursor-pointer p-3 shadow-md"
          onClick={() => setShowChat(true)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/8943/8943377.png"
            className="w-10 h-10"
          />
          <p className="text-black">Need help?</p>
        </div>
      )}
    </div>
  )
}

export default Chatbot
