import { Trash } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const Card = ({ cards, setCards }) => {
  const totalPrice = cards.reduce((sum, item) => sum + item.price, 0);

  const handelPayment = () => {
    setCards([]);
    toast.success("Payment Successfull!");
  };

  const handelDelet = (item) => {
    const filterArray = cards.filter((clear) => clear.id != item.id);
    setCards(filterArray);
    toast.error("Item Deleted!");
  };

  return (
    <>
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold">Your Cards</h2>

        {cards.length === 0 ? (
          <div className="border rounded-lg h-80 my-5 flex justify-center items-center">
            <h2 className="text-3xl font-bold">Card is Empty!</h2>
          </div>
        ) : (
          <>
            <div className="space-y-5 py-10">
              {cards.map((item) => (
                <div key={item.id}>
                  <>
                    <div className="flex flex-col md:flex-row items-center justify-between p-5 rounded-lg shadow-2xl border border-gray-400">
                      <div className="flex items-center justify-center gap-10 mb-5 md:mb-0">
                        <img
                          src={item.image}
                          alt=""
                          className="w-30 h-30 object-contain"
                        />
                        <h2 className="text-4xl font-bold">{item.title}</h2>
                      </div>
                      <div className="flex items-center gap-10">
                        <h3 className="text-3xl font-bold">
                          ${item.price}/month
                        </h3>
                        <button
                          onClick={() => handelDelet(item)}
                          className="btn rounded-2xl px-5 bg-error text-white"
                        >
                          <Trash />
                        </button>
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </div>

            <div className="flex justify-between mb-5 p-5 bg-black text-white rounded-lg">
              <h2 className="text-3xl font-bold">Total</h2>
              <p className="text-3xl font-bold">${totalPrice}</p>
            </div>
            <button
              onClick={handelPayment}
              className="btn btn-warning rounded-lg mb-10 items-center w-full text-white text-3xl py-10"
            >
              Proceed to Checkou
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
