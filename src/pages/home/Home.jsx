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
  const [accessoryStyle, setAccessoryStyle] = useState({});

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

  const getAccessoryStyle = (id, accessoryId) => {
    switch (id) {
      case 1:
        switch (accessoryId) {
          case 101:
            return { bottom: "140px", left: "130px" };
          case 102:
            return { bottom: "145px", left: "130px" };
          case 103:
            return { bottom: "140px", left: "135px" };
          case 104:
            return { bottom: "160px", left: "135px" };
          case 105:
            return { bottom: "145px", left: "135px" };
          default:
            return {};
        }
      case 2:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "170px",
              left: "205px",
              width: "80px",
              height: "80px",
            };
          case 102:
            return {
              bottom: "177px",
              left: "205px",
              width: "80px",
              height: "80px",
            };
          case 103:
            return {
              bottom: "175px",
              left: "205px",
              width: "80px",
              height: "80px",
            };
          case 104:
            return {
              bottom: "179px",
              left: "205px",
              width: "80px",
              height: "80px",
            };
          case 105:
            return {
              bottom: "175px",
              left: "205px",
              width: "80px",
              height: "80px",
            };
          default:
            return {};
        }
      case 3:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "130px",
              left: "120px",
              width: "130px",
              height: "130px",
            };
          case 102:
            return {
              bottom: "140px",
              left: "120px",
              width: "130px",
              height: "130px",
            };
          case 103:
            return {
              bottom: "140px",
              left: "120px",
              width: "130px",
              height: "130px",
            };
          case 104:
            return {
              bottom: "160px",
              left: "125px",
              width: "130px",
              height: "130px",
            };
          case 105:
            return {
              bottom: "147px",
              left: "125px",
              width: "130px",
              height: "130px",
            };
          default:
            return {};
        }
      case 4:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "167px",
              left: "140px",
              width: "110px",
              height: "110px",
            };
          case 102:
            return {
              bottom: "173px",
              left: "140px",
              width: "110px",
              height: "110px",
            };
          case 103:
            return {
              bottom: "170px",
              left: "140px",
              width: "110px",
              height: "110px",
            };
          case 104:
            return {
              bottom: "183px",
              left: "143px",
              width: "110px",
              height: "110px",
            };
          case 105:
            return {
              bottom: "172px",
              left: "150px",
              width: "110px",
              height: "110px",
            };
          default:
            return {};
        }
      case 5:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "125px",
              left: "175px",
              width: "90px",
              height: "90px",
            };
          case 102:
            return {
              bottom: "130px",
              left: "177px",
              width: "90px",
              height: "90px",
            };
          case 103:
            return {
              bottom: "130px",
              left: "177px",
              width: "90px",
              height: "90px",
            };
          case 104:
            return {
              bottom: "143px",
              left: "175px",
              width: "90px",
              height: "90px",
            };
          case 105:
            return {
              bottom: "137px",
              left: "175px",
              width: "90px",
              height: "90px",
            };
          default:
            return {};
        }
      case 6:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "135px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 102:
            return {
              bottom: "143px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 103:
            return {
              bottom: "140px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 104:
            return {
              bottom: "165px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 105:
            return {
              bottom: "153px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          default:
            return {};
        }
      case 7:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "125px",
              left: "115px",
              width: "150px",
              height: "150px",
            };
          case 102:
            return {
              bottom: "135px",
              left: "115px",
              width: "150px",
              height: "150px",
            };
          case 103:
            return {
              bottom: "130px",
              left: "115px",
              width: "150px",
              height: "150px",
            };
          case 104:
            return {
              bottom: "155px",
              left: "115px",
              width: "150px",
              height: "150px",
            };
          case 105:
            return {
              bottom: "145px",
              left: "115px",
              width: "150px",
              height: "150px",
            };
          default:
            return {};
        }
      case 8:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "135px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 102:
            return {
              bottom: "143px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 103:
            return {
              bottom: "140px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 104:
            return {
              bottom: "160px",
              left: "120px",
              width: "150px",
              height: "150px",
            };
          case 105:
            return {
              bottom: "150px",
              left: "123px",
              width: "150px",
              height: "150px",
            };
          default:
            return {};
        }
      case 9:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "135px",
              left: "155px",
              width: "110px",
              height: "110px",
            };
          case 102:
            return {
              bottom: "143px",
              left: "155px",
              width: "110px",
              height: "110px",
            };
          case 103:
            return {
              bottom: "140px",
              left: "155px",
              width: "110px",
              height: "110px",
            };
          case 104:
            return {
              bottom: "150px",
              left: "150px",
              width: "110px",
              height: "110px",
            };
          case 105:
            return {
              bottom: "145px",
              left: "153px",
              width: "110px",
              height: "110px",
            };
          default:
            return {};
        }
      case 10:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "163px",
              left: "180px",
              width: "90px",
              height: "90px",
            };
          case 102:
            return {
              bottom: "167px",
              left: "180px",
              width: "90px",
              height: "90px",
            };
          case 103:
            return {
              bottom: "167px",
              left: "180px",
              width: "90px",
              height: "90px",
            };
          case 104:
            return {
              bottom: "175px",
              left: "175px",
              width: "90px",
              height: "90px",
            };
          case 105:
            return {
              bottom: "167px",
              left: "180px",
              width: "90px",
              height: "90px",
            };
          default:
            return {};
        }
      case 11:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "135px",
              left: "147px",
              width: "90px",
              height: "90px",
            };
          case 102:
            return {
              bottom: "135px",
              left: "147px",
              width: "90px",
              height: "90px",
            };
          case 103:
            return {
              bottom: "135px",
              left: "147px",
              width: "90px",
              height: "90px",
            };
          case 104:
            return {
              bottom: "155px",
              left: "147px",
              width: "90px",
              height: "90px",
            };
          case 105:
            return {
              bottom: "145px",
              left: "147px",
              width: "90px",
              height: "90px",
            };
          default:
            return {};
        }
      case 12:
        switch (accessoryId) {
          case 101:
            return {
              bottom: "140px",
              left: "125px",
              width: "130px",
              height: "130px",
            };
          case 102:
            return {
              bottom: "147px",
              left: "125px",
              width: "130px",
              height: "130px",
            };
          case 103:
            return {
              bottom: "145px",
              left: "125px",
              width: "130px",
              height: "130px",
            };
          case 104:
            return {
              bottom: "167px",
              left: "125px",
              width: "130px",
              height: "130px",
            };
          case 105:
            return {
              bottom: "153px",
              left: "125px",
              width: "130px",
              height: "130px",
            };
          default:
            return {};
        }
      default:
        return {};
    }
  };

  useEffect(() => {
    const style = getAccessoryStyle(
      moguriState.id,
      moguriState.currentItem.accessory.id
    );
    setAccessoryStyle(style);
  }, [moguriState.id, moguriState.currentItem.accessory.id]);

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
          style={accessoryStyle}
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
