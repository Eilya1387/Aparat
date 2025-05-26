import React, { useEffect, useState } from "react";
import "../CSS/main.css";
import Side from "../components/side";
import TopMenu from "./topmenu";
import VideoCard from "./videoCard";
import VideoCardSkeleton from "./Loading";
import "../CSS/responsive.css"
import axios from "axios";
const Main = ({ isSideOpen }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
      const [response1, response2] = await Promise.all([
        axios.get("http://moviesapi.ir/api/v1/movies?page=1"),
        axios.get("http://moviesapi.ir/api/v1/movies?page=2")
      ]);
      setTimeout(() => {
        const videoList1 = response1.data.data.slice(0, 10);
        const videoList2 = response2.data.data.slice(0, 10);

        const allVideos = [...videoList1, ...videoList2];
        setVideos(allVideos);
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
          <Side isSideOpen={isSideOpen}/>
        </div>

        <div className="child-v" style={{ width: isSideOpen ? "95%" : "85%" }}>
          <div className="top-menu-container">
            <TopMenu />
          </div>
          <div className="video-bar">
            {loading
              ? [...Array(20)].map((_, index) => (
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
