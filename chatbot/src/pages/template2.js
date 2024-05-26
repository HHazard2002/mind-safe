import "../index.css";
import React, { useState, useEffect } from "react";
import FirstInput from "../component/good/first_input";
import FirstText from "../component/bad/first_text";
import SecondText from "../component/good/second_text";
import ThirdText from "../component/good/third_text";
import SecondInput from "../component/good/second_input";
import ChatButton from "../component/chat_button";
import TextAI from "../component/text_ai";
import TextUser from "../component/text_user";

function Template2() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const text = [
    "I noticed that you reported in your Mood Diary that you are feeling LOWEST SCORE about LOWEST SCORE TOPIC. It's great that you're sharing and thinking about how you feel. It's normal to feel this way sometimes.",
    "From the choices below can you share with us what makes you feel low? Choose up to 3.",
    "Thanks for talking to me! Please share in under 8 words what makes you feel this way?",
    "Sorry you are feeling like this. Would you like me to help suggest ways that you could feel better?",
  ];

  const feelingBad = [
    "Feeling left out",
    "Alone during break times",
    "No activities outside school",
    "Feeling disconnected from a group",
    "Lack of enjoyment in activities",
    "Different interests from peers",
    "No one to sit with in class",
    "Lack of teamwork opportunities",
    "Struggling with challenges alone",
    "Different values from peers",
    "Feeling excluded from competition",
    "No sense of belonging",
    "Lack of trust in others",
    "Lack of support from peers",
    "Feeling unsupported by others",
    "Not feeling valued or useful",
  ];

  const sentences = [
    "Thanks for talking to me! Remember to take a minute to complete your journal. See you next time!",
    "It’s great that you’re feeling like this. Use your Journal to remember what is making you feel good. Speak soon!",
    "Thanks for sharing – it’s great to know what makes you feel positive about. Add it to your Journal and talk soon!",
    "Remember, your feelings matter! Keep track of what makes you happy in your journal. Take care!",
    "Thanks for chatting with me! Don't forget to reach out if you need support. You're not alone in this journey.",
  ];

  function getRandomOptions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const [bad, setBad] = useState([]);
  const [lastMessage, setLastMessage] = useState([]);

  useEffect(() => {
    const randomOptions = getRandomOptions(feelingBad, 5);
    setBad(randomOptions);
    const lastMessage = getRandomOptions(sentences, 1);
    setLastMessage(lastMessage);
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);
  const [submittedItems, setSubmittedItems] = useState([]);

  const handleSelect = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item].slice(-3)
    );
  };

  const handleSubmit = () => {
    setSubmittedItems(selectedItems);
  };

  const [inputValue, setInputValue] = useState("");
  const [savedInput, setSavedInput] = useState("");

  const handleInputChange = (e) => {
    const words = e.target.value.split(" ");
    if (words.length <= 8) {
      setInputValue(e.target.value);
    } else {
      setInputValue(words.slice(0, 8).join(" "));
    }
  };

  const handleSubmit2 = () => {
    setSavedInput(inputValue);
  };

  return (
    <div>
      <ChatButton isChatOpen={isChatOpen} toggleChat={toggleChat} />
      {isChatOpen && (
        <div className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px] overflow-hidden">
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg ">Chatbot</h2>
            <p className="text-sm text-black leading-3">
              I am Saffy, the MindSafe Bot
            </p>
          </div>

          <div
            className=" pr-4 h-[474px] overflow-y-auto"
            style={{ minWidth: "100%" }}
          >
            <TextAI text={text[0]} />
            <TextAI text={text[1]} />
            {submittedItems.length > 0 && (
              <div>
                <TextUser text={submittedItems.join(", ")} />
                <TextAI text={text[2]} />
              </div>
            )}
            {savedInput && (
              <div>
                <TextUser text={savedInput} />
                <TextAI text={text[3]} />
              </div>
            )}
          </div>

          {submittedItems.length === 0 && (
            <FirstInput
              options={bad}
              handleSelect={handleSelect}
              handleSubmit={handleSubmit}
              selectedItems={selectedItems}
            />
          )}
          {submittedItems.length > 0 && savedInput.length === 0 && (
            <SecondInput
              handleSubmit2={handleSubmit2}
              handleInputChange={handleInputChange}
              inputValue={inputValue}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Template2;
