import "../index.css";
import React, { useState, useEffect } from "react";

function Template() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const feelingGood = [
    "Planning things with friends",
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

  function getRandomOptions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const [good, setGood] = useState([]);

  useEffect(() => {
    const randomOptions = getRandomOptions(feelingGood, 5);
    setGood(randomOptions);
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

  const ChatButton = () => (
    <button
      className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer p-0 normal-case leading-5 text-white"
      type="button"
      aria-haspopup="dialog"
      aria-expanded={isChatOpen}
      data-state={isChatOpen ? "open" : "closed"}
      onClick={toggleChat}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
      </svg>
    </button>
  );

  return (
    <div>
      <ChatButton />
      {isChatOpen && (
        <div className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg ">Chatbot</h2>
            <p className="text-sm text-black leading-3">
              I am Saffy, the MindSafe Bot
            </p>
          </div>

          <div
            className="pr-4 h-[474px]"
            style={{ minWidth: "100%", display: "table" }}
          >
            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">Saffy </span>
                It’s great that you reported in your Mood Diary that you are
                feeling scoring HIGHEST SCORE about HIGHEST SCORE'S TOPIC.
              </p>
            </div>

            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">Saffy </span>
                From the choices below can you share with us what makes you feel
                good? Choose up to 3.
              </p>
            </div>

            {submittedItems.length > 0 && (
              <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                    </svg>
                  </div>
                </span>

                <p className="leading-relaxed">
                  <span className="block font-bold text-gray-700">You </span>
                  {submittedItems.join(", ")}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center pt-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="flex items-center justify-center w-full space-x-2"
            >
              <div className="flex flex-wrap">
                {good.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => handleSelect(item)}
                    className={`cursor-pointer ml-2 rounded-md px-2 py-1 text-sm md:text-md font-medium ${
                      selectedItems.includes(item)
                        ? "bg-purple-300 text-purple-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
