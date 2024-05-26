import "../index.css";
import React, { useState, useEffect } from "react";
import FirstInput from "../component/good/first_input";
import FirstText from "../component/good/first_text";
import SecondText from "../component/good/second_text";
import ThirdText from "../component/good/third_text";
import SecondInput from "../component/good/second_input";
import ChatButton from "../component/chat_button";

function Template() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const feelingGood = [
    "Planning things with friends",
    "Having people to be with at break times",
    "Doing things out of school",
    "Feeling I belong to a group",
    "We have fun together",
    "We like the same things",
    "Having someone to sit with in class",
    "Working on projects together",
    "Facing a challenge together",
    "Share values",
    "I like to compete with my friends",
    "Have a sense of belonging",
    "People I trust",
    "They help me and look out for me",
    "I look out for them",
    "Make me feel useful",
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

  const [good, setGood] = useState([]);
  const [lastMessage, setLastMessage] = useState([]);

  useEffect(() => {
    const randomOptions = getRandomOptions(feelingGood, 5);
    setGood(randomOptions);
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
            <FirstText />
            {submittedItems.length > 0 && (
              <SecondText submittedItems={submittedItems} />
            )}
            {savedInput && (
              <ThirdText savedInput={savedInput} lastMessage={lastMessage} />
            )}
          </div>

          {submittedItems.length === 0 && (
            <FirstInput
              good={good}
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

export default Template;
