import "../CSS/videoCard.css";
const VideoCard = ({ poster, title }) => {
  return (
    <>
      <div className="video-card">
        <div className="thumbnail">
          <img src={poster} alt="" />
          <span>10:22</span>
        </div>
        <div className="info">
          <h2>{title}</h2>
          <div className="chanal-name">
            <img src={poster} alt="" />
            <h3>Eilya Master</h3>
          </div>
          <div className="time-view">
            <span>10 هزار بازدید. </span>
            <span>5 روز پیش</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
