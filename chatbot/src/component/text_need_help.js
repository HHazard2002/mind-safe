function TextNeedHelp({ help }) {
  const options = {
    Talk: {
      text: "Chatbot: It's great that you're reaching out to someone. Talking can really help. Try talking to your chosen adult. They can provide support and guidance.",
      link: "https://mind-safe.com/MoodDiary",
    },
    Discover: {
      text: "It's great that you’re looking for things in your local community, this can really help. Use Discover-it to find lots of organisations and groups local to you.",
      link: "https://mind-safe.com/DiscoverIt",
    },
    NotNow: {
      text: "That's okay! You can always find some help on our 24/7 website or discover local groups and organisations on Discover-It when you're ready.",
      link: "https://example.com/notnow",
    },
    Support: {
      text: "It's great that you’re looking for things in your local community, this can really help. Use 24/7 Support, these are all excellent, safe places to get help.",
      link: "https://mind-safe.com/UrgentHelp",
    },
  };
  return (
    <div>
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
          {options[help].text}
          <span>&nbsp;</span>
          <a
            href={options[help].link}
            className="text-blue-500 hover:underline"
          >
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
}

export default TextNeedHelp;
