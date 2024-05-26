import "../index.css";
import React, { useState, useEffect } from "react";
import FirstInput from "../component/good/first_input";
import SecondInput from "../component/good/second_input";
import ChatButton from "../component/chat_button";
import TextAI from "../component/text_ai";
import TextUser from "../component/text_user";
import ThirdInput from "../component/third_input";
import FourthInput from "../component/fourth_input";
import TextNeedHelp from "../component/text_need_help";

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

  const yesNeedHelp = [
    "You recorded a lower response about your LOWEST TOPIC. Here are some suggestions to help you manage:",
    "Is this helpful?",
    "Thanks for talking to me. Remember to take a minute to complete your journal. See you next time!",
  ];

  const noNeedHelp = [
    "Okay. Would you like to 'Talk' to your chosen adult? They can provide support and guidance. Or you can find some help on our 24/7 website or discover local groups and organisations on Discover-It.",
    "It's great that you're reaching out to someone. Talking can really help. Try talking to your chosen adult. They can provide support and guidance.",
    "It's great that you’re looking for things in your local community, this can really help. Use Discover-it to find lots of organisations and groups local to you.",
    "It's great that you’re looking for things in your local community, this can really help. Use 24/7 Support, these are all excellent, safe places to get help.",
    "That's okay! You can always find some help on our 24/7 website or discover local groups and organisations on Discover-It when you're ready.",
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

  function getRandomOptions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const [bad, setBad] = useState([]);

  useEffect(() => {
    const randomOptions = getRandomOptions(feelingBad, 5);
    setBad(randomOptions);
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

  const [needHelp, setNeedHelp] = useState(null);
  const [helpNeeded, setHelpNeeded] = useState(null);

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
            {needHelp && (
              <div>
                <TextUser text={"Yes"} />
                <TextAI text={yesNeedHelp[0]} />
                <TextAI text={yesNeedHelp[1]} />
              </div>
            )}
            {needHelp === false && (
              <div>
                <TextUser text={"No"} />
                <TextAI text={noNeedHelp[0]} />
              </div>
            )}
            {helpNeeded && (
              <div>
                <TextUser text={helpNeeded} />
                <TextNeedHelp help={helpNeeded} />
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
          {savedInput.length > 0 && needHelp === null && (
            <ThirdInput setNeedHelp={setNeedHelp} />
          )}
          {needHelp === false && helpNeeded === null && (
            <FourthInput setHelpNeeded={setHelpNeeded} />
          )}
        </div>
      )}
    </div>
  );
}

export default Template2;
