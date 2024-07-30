import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import background1 from "../../assets/image/background1.png";
import Nav from "../../components/Nav";
import MoguriModal from "./MoguriModal";
import Sidebar from "./Sidebar";
import slideButtonImage from "../../assets/icon/slidebutton.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const selectedMoguri = useSelector((state) => state.moguri.image);
  const targetWeight = useSelector((state) => state.moguri.target_weight);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <Nav />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {selectedMoguri && (
        <img
          src={selectedMoguri}
          alt="Selected Moguri"
          className="selected-moguri"
          onClick={toggleModal}
        />
      )}
      {isModalOpen && (
        <MoguriModal
          toggleModal={toggleModal}
          selectedMoguri={selectedMoguri}
          targetWeight={targetWeight}
        />
      )}
    </div>
  );
};

export default Home;
