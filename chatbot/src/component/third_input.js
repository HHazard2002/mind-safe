function ThirdInput({ setNeedHelp }) {
  return (
    <div>
      <div className="flex items-center pt-2 ">
        <div className="flex items-center justify-start w-full space-x-2">
          <button
            type="submit"
            onClick={() => setNeedHelp(true)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-green-500 hover:bg-green-700 h-10 px-4 py-2"
          >
            Yes
          </button>
          <button
            type="submit"
            onClick={() => setNeedHelp(false)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-red-500 hover:bg-red-700 h-10 px-4 py-2"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdInput;
