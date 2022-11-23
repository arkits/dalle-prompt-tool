export function OptimizePrompt({ prompt, modifiers }) {
  const generate = () => {
    let optimizedPrompt = prompt;

    for (const modifier of Object.values(modifiers)) {
      if (modifier.selectedOption?.name) {
        optimizedPrompt = optimizedPrompt.concat(
          `${modifier.template} ${modifier.selectedOption.name}`
        );
      }
    }

    return `${optimizedPrompt}`;
  };

  if (!prompt || prompt === "") {
    return (
      <div className="box-border p-4 rounded-lg bg-emerald-100 shadow-sm">
        <h2 className="text-xl pb-2">Optimized Prompt</h2>
        <h1 className="text-3xl select-all mb-2">...</h1>
      </div>
    );
  } else {
    return (
      <div className="box-border p-4 rounded-lg bg-emerald-700 shadow-lg">
        <h2 className="text-xl pb-2 text-white">Optimized Prompt</h2>
        <h1 className="text-3xl text-white select-all mb-2">{generate()}</h1>
      </div>
    );
  }
}
