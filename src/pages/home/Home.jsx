import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import Nav from "../../components/Nav";
import MoguriModal from "./MoguriModal";
import Sidebar from "./Sidebar";
import slideButtonImage from "assets/icon/slidebutton.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const moguriState = useSelector((state) => state.moguri);

  useEffect(() => {
    // console.log(moguriState);
  }, [moguriState]);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${moguriState.currentItem.background.imageUrl})`,
      }}
    >
      <Nav />
      {!isSidebarOpen && (
        <div className="sidebar" onClick={openSidebar}>
          <button className="slide-button" onClick={openSidebar}>
            <img src={slideButtonImage} alt="Slide" />
          </button>
        </div>
      )}

      <div>
        <img
          src={moguriState.currentItem.accessory.imageUrl}
          alt=""
          className="current-accessory"
        />
        <img
          src={moguriState.imageUrl}
          alt="Selected Moguri"
          className="selected-moguri"
          onClick={openModal}
        />
      </div>

      <MoguriModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      ></MoguriModal>
      <Sidebar isOpen={isSidebarOpen} onRequestClose={closeSidebar}></Sidebar>
    </div>
  );
};

export default Home;
