import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AiModal from "./Components/Pages/AiModal";
import Banner from "./Components/Pages/Banner";
import Card from "./Components/Pages/Card";
import BtnTogol from "./Components/ui/BtnTogol";
import { ToastContainer } from "react-toastify";

const CardModal = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const CardPromis = CardModal();

function App() {
  const [activeTab, setActiveTab] = useState("modal");

  const [cards, setCards] = useState([]);

  return (
    <>
      <div>
        <ToastContainer />
        <NavBar />
        <Banner />

        <BtnTogol
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          cards={cards}
        />

        {activeTab === "modal" ? (
          <AiModal CardPromis={CardPromis} cards={cards} setCards={setCards} />
        ) : (
          <Card cards={cards} setCards={setCards} />
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
