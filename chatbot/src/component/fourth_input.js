function FourthInput({ setHelpNeeded }) {
  return (
    <div>
      <div className="flex items-center pt-2 ">
        <div className="flex items-center justify-start w-full space-x-2">
          <button
            type="submit"
            onClick={() => setHelpNeeded("Talk")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-700 h-10 px-4 py-2"
          >
            Talk
          </button>
          <button
            type="submit"
            onClick={() => setHelpNeeded("Discover")}
            className="inline-flex items-center justify-center  rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-blue-500 hover:bg-blue-700 h-10 px-4 py-2"
          >
            Discover It
          </button>
          <button
            type="submit"
            onClick={() => setHelpNeeded("Support")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-purple-500 hover:bg-purple-700 h-10 px-4 py-2"
          >
            24/7 Support
          </button>
          <button
            type="submit"
            onClick={() => setHelpNeeded("NotNow")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-red-500 hover:bg-red-700 h-10 px-4 py-2"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FourthInput;
