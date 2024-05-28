function FirstInput({ options, handleSelect, handleSubmit, selectedItems }) {
  return (
    <div>
      <div className="flex items-center -mt-28">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex items-end justify-end w-full space-x-2"
        >
          <div className="flex flex-wrap">
            {options.map((item, index) => (
              <span
                key={index}
                onClick={() => handleSelect(item)}
                className={`cursor-pointer ml-2 rounded-md px-2 mt-1 p-1 text-sm md:text-md font-medium ${
                  selectedItems.includes(item)
                    ? "bg-blue-300 text-blue-700"
                    : "bg-blue-100 text-blue-700"
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
  );
}

export default FirstInput;
