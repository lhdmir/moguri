import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import Nav from "../../components/Nav";
import MoguriModal from "./MoguriModal";
import Sidebar from "./Sidebar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const moguriState = useSelector((state) => state.moguri);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${moguriState.currentItems.background.imageUrl})`,
      }}
    >
      <Nav />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {moguriState && (
        <img
          src={moguriState.imageUrl}
          alt="Selected Moguri"
          className="selected-moguri"
          onClick={toggleModal}
        />
      )}
      {isModalOpen && (
        <MoguriModal
          toggleModal={toggleModal}
          selectedMoguri={moguriState.imageUrl}
          targetWeight={moguriState.targetWeight}
        />
      )}
    </div>
  );
};

export default Home;
