import Head from "next/head";
import { useState } from "react";
import PromptModifierOptions from "../components/PromptModifierOptions";
import * as libmodifiers from "../lib/modifiers";
import { PromptInput } from "../components/PromptInput";
import { Header } from "../components/Header";
import { OptimizePrompt } from "../components/OptimizePrompt";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [modifiers, setModifiers] = useState({
    ...libmodifiers.default,
  });

  return (
    <div className="container mx-auto px-4">
      <main>
        <div className="flex flex-col">
          <Header />
          <PromptInput prompt={prompt} setPrompt={setPrompt} />

          <div className="block mb-10">
            <span className="text-gray-600 text-sm">
              Step 2: Pick your modifiers...
            </span>
            <PromptModifierOptions
              modifiers={modifiers}
              setModifiers={setModifiers}
            />
          </div>

          <OptimizePrompt prompt={prompt} modifiers={modifiers} />
        </div>
      </main>
    </div>
  );
}
