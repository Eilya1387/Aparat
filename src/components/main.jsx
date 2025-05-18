import React, { useEffect, useState } from "react";
import "../CSS/main.css";
import Side from "../components/side";
import TopMenu from "./topmenu";
import VideoCard from "./videoCard";
import VideoCardSkeleton from "./Loading";
import axios from "axios";
const Main = ({ isSideOpen }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://moviesapi.ir/api/v1/movies?page=1"
        );
        setTimeout(() => {
          const videoList = response.data.data.slice(0, 8);

          console.log(videoList);
          setVideos(videoList);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error("خطا در دریافت ویدیوها:", error);
        setLoading(false);
      }
    };
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
            {loading
              ? [...Array(8)].map((_, index) => (
                  <VideoCardSkeleton key={index} />
                ))
              : videos.map((video) => (
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
