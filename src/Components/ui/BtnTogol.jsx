import React from "react";

const BtnTogol = ({ activeTab, setActiveTab, cards }) => {
  return (
    <>
      <div className="container mx-auto px-2 flex items-center justify-center mb-10">
        <button
          onClick={() => setActiveTab("modal")}
          className={`btn text-xl  py-6 ${activeTab === "modal" ? "bg-[#fb2c36] text-white" : ""} rounded-r-none rounded-l-xl`}
        >
          Modal
        </button>

        <button
          onClick={() => setActiveTab("cards")}
          className={`btn text-xl  py-6 ${activeTab === "cards" ? "bg-[#fb2c36] text-white" : ""} rounded-l-none rounded-r-xl`}
        >
          Cards {`(${cards.length})`}
        </button>
      </div>
    </>
  );
};

export default BtnTogol;
