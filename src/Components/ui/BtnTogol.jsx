import React from "react";

const BtnTogol = ({ setActiveTab, cards }) => {
  return (
    <>
      <div className="py-10">
        <div className="tabs tabs-box justify-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab px-10 rounded-full text-xl font-bold"
            aria-label="Modal"
            defaultChecked
            onClick={() => setActiveTab("modal")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab px-10 rounded-full text-xl font-bold"
            aria-label={`Cards (${cards.length})`}
            onClick={() => setActiveTab("card")}
          />
        </div>
      </div>
    </>
  );
};

export default BtnTogol;
