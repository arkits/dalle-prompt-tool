import { useEffect, useState } from "react";
import Select from "./Select";

export function ModifierOption({ modifier, setModifiers, modifiers }) {
  const [selected, setSelected] = useState(null);

  /* eslint react-hooks/exhaustive-deps: "off" */
  useEffect(() => {
    if (!selected) {
      return;
    }

    let updatedModifier = { ...modifier };
    updatedModifier.selectedOption = selected;

    let updatedModifiers = { ...modifiers };
    updatedModifiers[updatedModifier?.name] = updatedModifier;

    setModifiers(updatedModifiers);
  }, [selected]);

  return (
    <>
      <Select
        name={modifier?.name}
        options={modifier?.options}
        noneAvatar={modifier?.avatar}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}

export default function PromptModifierOptions({ modifiers, setModifiers }) {
  const modifierOptions = Object.values(modifiers).map((modifier, idx) => {
    return (
      <div key={idx} className="col-span-4 md:col-span-1">
        <ModifierOption
          modifier={modifier}
          setModifiers={setModifiers}
          modifiers={modifiers}
        />
      </div>
    );
  });

  return <div className="grid gap-4 grid-cols-4">{modifierOptions}</div>;
}
