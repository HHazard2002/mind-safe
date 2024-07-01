import "../index.css";
import React, { useState, useEffect, useRef } from "react";
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
  const [selectedItems, setSelectedItems] = useState([]);
  const [submittedItems, setSubmittedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [savedInput, setSavedInput] = useState("");
  const [savedInput2, setSavedInput2] = useState("");
  const [needHelp, setNeedHelp] = useState(null);
  const [helpNeeded, setHelpNeeded] = useState(null);
  const [bad, setBad] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const text = [
    "I noticed that you reported in your Mood Diary that you are feeling low. It's great that you're sharing and thinking about how you feel. It's normal to feel this way sometimes.",
    "From the choices below can you share with us what makes you feel low? Choose 1 option.",
    "Thanks for talking to me! Please share in under 8 words what makes you feel this way?",
    "Sorry you are feeling like this. Would you like me to help suggest ways that you could feel better?",
    "Thank you for your feedback!",
  ];

  const yesNeedHelp = [
    `You recorded a lower response about ${submittedItems[0]}. Here are some suggestions to help you manage:`,
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

  const feelingBad2 = [
    "Feeling anxious or worried",
    "Being bullied",
    "Lacking motivation",
    "Not feeling motivated for exams",
    "Feeling lonely due to family breakout",
  ];

  const ressources1 = [
    { text: "Talk", url: "https://mind-safe.com/MoodDiary" },
    {
      text: "Meditation video",
      url: "https://www.youtube.com/watch?v=p99oYZZjmwQ",
    },
    { text: "ASMR Video", url: "https://www.youtube.com/watch?v=knusIemI8G0" },
    {
      text: "Fight or flight “Nudge”",
      url: "https://res.cloudinary.com/dkjsnpplv/raw/upload/v1/MindSafe/Fight%20Or%20Flight.docx",
    },
  ];

  const ressources2 = [
    { text: "Talk", url: "https://mind-safe.com/MoodDiary" },
    {
      text: "Understanding bullying worksheet",
      url: "https://res.cloudinary.com/dkjsnpplv/raw/upload/v1/MindSafe/Worksheet%20Understanding%20Bullying.pdf",
    },
    {
      text: "National Bullying Helpline",
      url: "https://www.nationalbullyinghelpline.co.uk/",
    },
    {
      text: "Breath and relax “Nudge”",
      url: "https://res.cloudinary.com/dkjsnpplv/raw/upload/v1/MindSafe/Breath%20And%20Relax.pdf",
    },
  ];

  const ressources3 = [
    { text: "Talk", url: "https://mind-safe.com/MoodDiary" },
    {
      text: "Good mental wellbeing for exams worksheet",
      url: "https://res.cloudinary.com/dkjsnpplv/raw/upload/v1/MindSafe/Worksheet%20Good%20Mental%20Well-Being%20For%20Exams.docx",
    },
    {
      text: "Meditation video",
      url: "https://www.youtube.com/watch?v=eqeh96EV4ms&t=16s",
    },
    {
      text: "Help for exam stress",
      url: "https://www.mind.org.uk/for-young-people/feelings-and-experiences/exam-stress/",
    },
    {
      text: "Find motivation “Nudge”",
      url: "https://res.cloudinary.com/dkjsnpplv/raw/upload/v1/MindSafe/Find%20Motivation.docx",
    },
  ];

  const ressources4 = [
    { text: "Talk", url: "https://mind-safe.com/MoodDiary" },
    {
      text: "Coping with change worksheet",
      url: "https://res.cloudinary.com/dkjsnpplv/raw/upload/v1/MindSafe/Worksheet%20Coping%20With%20Change.docx",
    },
    { text: "Discover-it", url: "https://mind-safe.com/DiscoverIt" },
    {
      text: "Write it down “Nudge”",
      url: "https://res.cloudinary.com/dkjsnpplv/raw/upload/v1/MindSafe/Write%20it%20Down.docx",
    },
  ];

  function getRandomOptions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  useEffect(() => {
    const randomOptions = getRandomOptions(feelingBad, 5);
    setBad(randomOptions);
  }, []);

  const handleSelect = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item].slice(-1)
    );
  };

  const handleSubmit = () => {
    setSubmittedItems(selectedItems);
  };

  const handleInputChange = (e) => {
    const words = e.target.value.split(" ");
    if (words.length <= 8) {
      setInputValue(e.target.value);
    } else {
      setInputValue(words.slice(0, 8).join(" "));
    }
  };

  const handleInputChange2 = (e) => {
    const words = e.target.value.split(" ");
    if (words.length <= 8) {
      setInputValue2(e.target.value);
    } else {
      setInputValue2(words.slice(0, 8).join(" "));
    }
  };

  const handleSubmit2 = () => {
    setSavedInput(inputValue);
  };

  const handleSubmit3 = () => {
    setSavedInput2(inputValue2);
  };

  const scrollableDivRef = useRef(null);

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [text, submittedItems, savedInput, needHelp, helpNeeded]);

  const renderResources = () => {
    let resources = [];
    if (submittedItems.includes("Feeling anxious or worried")) {
      resources = ressources1;
    } else if (submittedItems.includes("Being bullied")) {
      resources = ressources2;
    } else if (
      submittedItems.includes("Lacking motivation") ||
      submittedItems.includes("Not feeling motivated for exams")
    ) {
      resources = ressources3;
    } else if (
      submittedItems.includes("Feeling lonely due to family breakout")
    ) {
      resources = ressources4;
    }

    return (
      <div>
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500"
          >
            {resource.text}
          </a>
        ))}
      </div>
    );
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
            ref={scrollableDivRef}
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
                {renderResources()}
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
            {savedInput2 && (
              <div>
                <TextUser text={savedInput2} />
                <TextAI text={text[4]} />
              </div>
            )}
          </div>

          {submittedItems.length === 0 && (
            <FirstInput
              options={feelingBad2}
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
          {needHelp === true && helpNeeded === null && (
            <SecondInput
              handleSubmit2={handleSubmit3}
              handleInputChange={handleInputChange2}
              inputValue={inputValue2}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Template2;
