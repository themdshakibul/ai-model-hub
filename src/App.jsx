import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AiModal from "./Components/Pages/AiModal";
import Banner from "./Components/Pages/Banner";
import Card from "./Components/Pages/Card";

const CardModal = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const CardPromis = CardModal();

function App() {
  const [activeTab, setActiveTab] = useState("modal");
  console.log(activeTab);

  return (
    <>
      <div>
        <NavBar />
        <Banner />

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Modal"
            defaultChecked
            onClick={() => setActiveTab("modal")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Card"
            onClick={() => setActiveTab("card")}
          />
        </div>

        {activeTab === "modal" ? <AiModal CardPromis={CardPromis} /> : <Card />}

        <Footer />
      </div>
    </>
  );
}

export default App;
