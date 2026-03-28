import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ modal }) => {
  const [subscribe, setSubscribed] = useState(false);

  const handelClickBtn = () => {
    setSubscribed(true);
    toast.error("Item already in cart!");
  };

  return (
    <>
      <div>
        <div className="border border-gray-300 rounded-2xl shadow-2xl">
          <div className="py-15 bg-base-300 rounded-t-2xl flex justify-center">
            <img
              src={modal.image}
              alt=""
              className="w-40 h-40 object-contain "
            />
          </div>
          <div className="space-y-4 p-5">
            <h2 className="text-3xl font-bold">ChatGPT</h2>
            <p className="text-xl font-semibold">
              The world's most popular AI assistant by OpenAI. Versatile for
              writing, coding, reasoning, and creative tasks.
            </p>
            <p className="text-2xl font-bold">$20/month</p>
            <button
              onClick={handelClickBtn}
              className="btn bg-[#fb2c36] py-6 w-full text-xl rounded-lg text-white"
            >
              {subscribe ? "Subscribe" : "Subscribe Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelCard;
