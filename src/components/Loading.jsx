import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoCardSkeleton = () => {
  return (
    <div className="video-card">
      <Skeleton
        width={300}
        height={150}
        baseColor="#202020"
        highlightColor="#444"
      />

      <div className="info">
        <Skeleton
          width={150}
          height={15}
          baseColor="#202020"
          highlightColor="#444"
          style={{ marginTop: "1rem" }}
        />
        <div className="chanal-name" style={{ marginTop: "1rem" }}>
          <Skeleton
            circle={true}
            width={20}
            baseColor="#202020"
            highlightColor="#444"
            height={20}
          />
          <Skeleton
            width={100}
            height={15}
            baseColor="#202020"
            highlightColor="#444"
            style={{ marginRight: "0.5rem" }}
          />
        </div>
        <div className="time-view">
          <Skeleton
            width={130}
            height={10}
            baseColor="#202020"
            highlightColor="#444"
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCardSkeleton;
