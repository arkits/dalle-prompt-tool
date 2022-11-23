import Head from "next/head";
import { useEffect, useState } from "react";
import PromptModifierOptions from "../components/PromptModifierOptions";

function PromptInput({ prompt, setPrompt }) {
  return (
    <div className="mb-10">
      <form>
        <input
          className="form-input rounded pt-2 pb-2 w-full"
          placeholder="Enter your prompt here..."
          autoFocus
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

function Header() {
  return (
    <div className="mt-10 mb-10 flex self-center">
      <h1 className="text-lg">DALL-E 2 Prompt Tool</h1>
    </div>
  );
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [modifiers, setModifiers] = useState({
    Artist: {
      name: "Artist",
      options: [
        {
          name: "Dan Vinci",
          avatar:
            "https://images.unsplash.com/photo-1423742774270-6884aac775fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Banksy",
          avatar:
            "https://images.unsplash.com/photo-1629116589563-3840fb6adb28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
      placement: 0,
      selectedOption: null,
      template: `, by`,
    },
    Style: {
      name: "Style",
      options: [
        {
          name: "Digital",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          name: "Cartoon",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
      placement: 0,
      selectedOption: null,
      template: `,`,
    },
  });

  const optimizePrompt = () => {
    if (!prompt || prompt === "") {
      return;
    }

    let optimizedPrompt = prompt;

    for (const modifier of Object.values(modifiers)) {
      if (modifier.selectedOption) {
        optimizedPrompt = optimizedPrompt.concat(
          `${modifier.template} ${modifier.selectedOption.name}`
        );
      }
    }

    return `${optimizedPrompt}`;
  };

  return (
    <div className="container mx-auto">
      <Head>
        <title>DALLE2 Prompt Tool</title>
        <meta name="description" content="DALLE2 Prompt Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col">
          <Header />
          <PromptInput prompt={prompt} setPrompt={setPrompt} />

          <h2 className="text-xl pb-2">Modifiers</h2>
          <PromptModifierOptions
            modifiers={modifiers}
            setModifiers={setModifiers}
          />

          <h2 className="text-xl pb-2">Optimized Prompt</h2>
          <h1 className="text-3xl">{optimizePrompt()}</h1>
        </div>
      </main>
    </div>
  );
}
