// @ts-nocheck




// // @ts-nocheck
// // Chatbot.js

// import React, { useState, useEffect } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { IoChatboxEllipsesOutline } from 'react-icons/io5';
// import { IoMdSend } from "react-icons/io";
// const Chatbot = () => {
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [selectedQuestions, setSelectedQuestions] = useState([]);
//   const [remainingQuestions, setRemainingQuestions] = useState([]);

//   const initialQuestions = [
//     'Hello',
//     'Available properties',
//     'How much is the rent?',
//     'What are the rental requirements?',
//     'Can I schedule a property viewing?',
//     'Tell me about the application process',
//     'What utilities are included in the rent?',
//     'Are pets allowed?',
//     'Goodbye',
//   ];

//   useEffect(() => {
//     setRemainingQuestions(initialQuestions);
//   }, []);

//   const handleQuestionSelection = (question) => {
//     if (!selectedQuestions.includes(question)) {
//       const newSelectedQuestions = [...selectedQuestions, question];
//       setSelectedQuestions(newSelectedQuestions);
//       handleChatbotResponse(question);

//       const updatedRemainingQuestions = remainingQuestions.filter((q) => q !== question);
//       setRemainingQuestions(updatedRemainingQuestions);
//     }
//   };

//   const handleChatbotResponse = (userInput) => {
//     let response;

//     // Simple question-response mapping
//     switch (userInput.toLowerCase()) {
//       case 'hello':
//         response = 'Hi there! How can I help you with property rental today?';
//         break;
//       case 'available properties':
//         response = 'Sure, we have several properties available. What city are you interested in?';
//         break;
//       case 'how much is the rent?':
//         response = 'The rent varies depending on the property. Could you specify your budget range?';
//         break;
//       case 'what are the rental requirements?':
//         response = 'To rent a property, you typically need to provide proof of income, references, and undergo a background check.';
//         break;
//       case 'can I schedule a property viewing?':
//         response = 'Certainly! Please provide your contact details, and we will arrange a convenient time for you to view the property.';
//         break;
//       case 'tell me about the application process':
//         response = 'The application process involves submitting an application form, undergoing a background check, and signing the lease agreement upon approval.';
//         break;
//       case 'what utilities are included in the rent?':
//         response = 'Utilities included in the rent may vary by property. Please specify the property you are interested in for more details.';
//         break;
//       case 'are pets allowed?':
//         response = 'Pet policies vary by property. Please let us know if you have specific requirements regarding pets.';
//         break;
//       case 'goodbye':
//         response = 'Thank you for chatting with us! If you have more questions in the future, feel free to ask.';
//         setSelectedQuestions([]); // Clear selected questions
//         setRemainingQuestions(initialQuestions); // Reset remaining questions
//         break;
//       default:
//         response = "I'm sorry, I didn't understand that. How can I assist you?";
//     }

//     setMessages([...messages, { text: response, sender: 'chatbot' }]);
//   };

//   useEffect(() => {
//     // Welcome message
//     setMessages([
//       { text: 'Welcome to our property rental chatbot!', sender: 'chatbot' },
//       { text: 'Ask me about available properties or rental prices.', sender: 'chatbot' },
//     ]);
//   }, []);

//   return (
//     <div className="z-20 exo fixed bottom-10 text-[12px] right-10 max-w-[20rem]">
//       {showChat ? (
//         <div className="bg-slate-100 p-[1rem] relative h-[30rem] ">
//           <div className="absolute top-0 right-0 w-9 text-[16px] h-9 flex items-center justify-center text-white bg-slate-500">
//             <FaTimes onClick={() => setShowChat(false)} />
//           </div>
//           <div className="flex flex-col justify-between h-[100%]">
//             <div>
//             {selectedQuestions.map((selectedQuestion, index) => (
//               <div key={index} className='flex flex-col gap-2 mt-2'>
//                 <div className='border text-start bg-slate-300 w-fit p-1'>{selectedQuestion}</div>
//                 <div className='border flex justify-end text-white'><p className='bg-slate-600 w-fit max-w-[80%] py-1 px-2'>{messages[index].text}</p></div>
//               </div>
//             ))}
//             </div>
//             {/* <div className="border border-black mt-3"> */}
//               {/* <ul className="flex flex-row mt-3 overflow-x-scroll gap-x-5 gap-y-2 border p-1 border-slate-600">
//                 {remainingQuestions.map((question, index) => (
//                   <li key={index} className="border bg-slate-600 px-2 w-full py-1 text-white" onClick={() => handleQuestionSelection(question)}>
//                     {question}
//                   </li>
//                 ))}
//               </ul> */}
//                <div>
//                <ul className="flex flex-row mt-3 overflow-x-auto gap-x-5 gap-y-2 border p-1 border-slate-600">
//   {remainingQuestions.map((question, index) => (
//     <li
//       key={index}
//       className="border bg-slate-600 px-2 h-[2rem] whitespace-nowrap flex items-center text-white"
//       onClick={() => handleQuestionSelection(question)}
//     >
//       {question}
//     </li>
//   ))}
// </ul>

// <div className='border border-black flex '>
//   <input className='flex-1 border'/>
//   <button><IoMdSend /></button>
// </div>
//                </div>

//             {/* </div> */}
//           </div>
//         </div>
//       ) : (
//         <div className="bg-slate-500 p-3 shadow-md text-white">
//           <IoChatboxEllipsesOutline onClick={() => setShowChat(true)} className="text-[30px]" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;











































import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
 import { IoMdSend } from "react-icons/io";
import './chatbot.css'
const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [input, setInput] = useState('');

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
  ];

  useEffect(() => {
    setRemainingQuestions(initialQuestions);
  }, []);

  const handleQuestionSelection = (question) => {
    if (!selectedQuestion) {
      setSelectedQuestion(question);
      setInput(question);
    }
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      handleChatbotResponse(input);
      setInput('');
      setSelectedQuestion('');
    }
  };

  const handleChatbotResponse = (userInput) => {
    let response;

    switch (userInput.toLowerCase()) {
      case 'hello':
        response = 'Hi there! How can I help you with property rental today?';
        break;
      case 'available properties':
        response = 'Sure, we have several properties available. What city are you interested in?';
        break;
      case 'how much is the rent?':
        response = 'The rent varies depending on the property. Could you specify your budget range?';
        break;
      case 'what are the rental requirements?':
        response = 'To rent a property, you typically need to provide proof of income, references, and undergo a background check.';
        break;
      case 'can I schedule a property viewing?':
        response = 'Certainly! Please provide your contact details, and we will arrange a convenient time for you to view the property.';
        break;
      case 'tell me about the application process':
        response = 'The application process involves submitting an application form, undergoing a background check, and signing the lease agreement upon approval.';
        break;
      case 'what utilities are included in the rent?':
        response = 'Utilities included in the rent may vary by property. Please specify the property you are interested in for more details.';
        break;
      case 'are pets allowed?':
        response = 'Pet policies vary by property. Please let us know if you have specific requirements regarding pets.';
        break;
      case 'goodbye':
        response = 'Thank you for chatting with us! If you have more questions in the future, feel free to ask.';
        setRemainingQuestions(initialQuestions); // Reset remaining questions
        break;
      default:
        response = "I'm sorry, I didn't understand that. How can I assist you?";
    }

    setMessages([...messages, { text: response, sender: selectedQuestion }]);
  };

  useEffect(() => {
    // Welcome message
    setMessages([
      { text: 'Welcome to our property rental chatbot!'},
      { text: 'Ask me about available properties or rental prices.'},
    ]);
  }, []);

  return (
    <div className="z-20 exo fixed bottom-10 text-[12px] right-10 max-w-[20rem]">
      {showChat ? (
        <div className="bg-slate-200 relative h-[30rem]">
          <div className=" top-0 right-0 w-[100%] text-[16px] flex items-center justify-between px-[1rem] py-[5px] text-white bg-slate-400 shadow-md">
            <img src='https://cdn-icons-png.flaticon.com/128/8943/8943377.png' className='w-10 h-10'/>
            <FaTimes onClick={() => setShowChat(false)} className='text-[17px] text-slate-600 cursor-pointer'/>
          </div>
          <div className="flex flex-col justify-between flex-1 h-[90%] p-[1rem]">
            <div className='h-[20rem] overflow-y-scroll'>
              {/* {selectedQuestion && (
                <div className="flex flex-col gap-2 mt-2">
                  <div className="border text-start bg-slate-300 w-fit p-1">{selectedQuestion}</div>
                </div>
              )} */}
              {messages.map((message, index) => (
                <div key={index} className={`flex flex-col gap-2 mt-2 ${message.sender === 'chatbot' ? 'items-end' : 'items-start'}`}>
                  {
                    message.sender && <div className="border text-start bg-slate-300 w-fit p-1">{message.sender}</div>
                  }
                  <div className='flex justify-end w-[100%]'>
                    <p className={` bg-slate-600 text-white w-fit p-1 max-w-[90%]`}>
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
                  onChange={(e) => setInput(e.target.value)}
                  disabled
                />
                <button className="p-2 text-white text-[16px]" onClick={handleSendMessage}>
                  <IoMdSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-500 p-3 shadow-md text-white">
          <IoChatboxEllipsesOutline onClick={() => setShowChat(true)} className="text-[30px]" />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
