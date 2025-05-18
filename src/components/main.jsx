import React, { useEffect, useState } from "react";
import "../CSS/main.css";
import Side from "../components/side";
import TopMenu from "./topmenu";
import VideoCard from "./videoCard";
import axios from "axios";
const Main = ({ isSideOpen }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://moviesapi.ir/api/v1/movies?page=1"
        );
        const videoList = response.data.data.slice(0, 10);
        console.log(videoList);
        setVideos(videoList);
      } catch (error) {
        console.error("خطا در دریافت ویدیوها:", error);
      }
    };
console.log(videos.director)
    fetchVideos();
  }, []);
  return (
    <>
      <div className="al-mas">
        <div className="side" style={{ width: isSideOpen ? "5%" : "15%" }}>
          <Side />
        </div>

        <div className="child-v" style={{ width: isSideOpen ? "95%" : "85%" }}>
          <div className="top-menu-container">
            <TopMenu />
          </div>
          <div className="video-bar">
           
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                poster={video.poster}
              />
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
