import Head from "next/head";
import { useState } from "react";
import PromptModifierOptions from "../components/PromptModifierOptions";
import * as libmodifiers from "../lib/modifiers";
import { PromptInput } from "../components/PromptInput";
import { Header } from "../components/Header";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [modifiers, setModifiers] = useState({
    ...libmodifiers.default,
  });

  const optimizePrompt = () => {
    if (!prompt || prompt === "") {
      return;
    }

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

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>DALLE2 Prompt Tool</title>
        <meta name="description" content="DALLE2 Prompt Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col">
          <Header />
          <PromptInput prompt={prompt} setPrompt={setPrompt} />

          <div className="block mb-10">
            <span className="text-gray-600 text-sm">
              Step 2: Pick your modifiers
            </span>
            <PromptModifierOptions
              modifiers={modifiers}
              setModifiers={setModifiers}
            />
          </div>

          <div className="box-border p-4 rounded-lg bg-emerald-700">
            <h2 className="text-xl pb-2 text-white">Optimized Prompt</h2>
            <h1 className="text-3xl text-white select-all mb-2">
              {optimizePrompt()}
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
