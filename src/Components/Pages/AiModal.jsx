import React, { use } from "react";
import ModelCard from "./ModelCard";

const AiModal = ({ CardPromis, cards, setCards }) => {
  const Modals = use(CardPromis);

  return (
    <>
      <div className="container mx-auto px-2 mb-10">
        <header className="text-center space-y-3">
          <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
          <p className="text-xl font-semibold">
            One subscription gives you access to all frontier AI models
          </p>
        </header>

        <div className="grid grid-cols-3 gap-10 mt-10">
          {Modals.map((modal) => (
            <ModelCard key={modal.id} modal={modal} cards={cards} setCards={setCards} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AiModal;
