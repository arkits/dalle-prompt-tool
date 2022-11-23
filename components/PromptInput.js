export function PromptInput({ prompt, setPrompt }) {
  return (
    <div className="mb-10">
      <form>
        <label className="block">
          <span className="text-gray-600 text-sm">
            <div className="mb-1">Step 1: Enter your prompt...</div>
          </span>
          <input
            className="form-input rounded pt-2 pb-2 w-full border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="an astronaut"
            autoFocus
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          ></input>
        </label>
      </form>
    </div>
  );
}
