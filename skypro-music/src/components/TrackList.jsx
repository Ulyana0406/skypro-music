import { useState } from "react";
import "../App.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function MainCenterblok(props) {
  const [isLoading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 4000);
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          {/* <SkeletonTheme baseColor="#cf6565" highlightColor="#ff0">
                      <p><Skeleton /></p>
                    </SkeletonTheme> */}
          <div className="track__title-image">
            {isLoading ? (
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            ) : (
              <Skeleton />
            )}
            {/* <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                        </svg> */}
          </div>
          <div className="track__title-text">
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={20}
              width={356}
            >
              {isLoading ? (
                <a className="track__title-link" href="http://">
                  {props.trackName} <span className="track__title-span"></span>
                </a>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </div>
        </div>
        <div className="track__author">
          <SkeletonTheme
            baseColor="#313131"
            highlightColor="#fff"
            height={20}
            width={272}
          >
            {isLoading ? (
              <a className="track__author-link" href="http://">
                {props.trackAuthor}
              </a>
            ) : (
              <Skeleton />
            )}
          </SkeletonTheme>
        </div>
        <div className="track__album">
          <SkeletonTheme
            baseColor="#313131"
            highlightColor="#fff"
            height={20}
            width={250}
          >
            {isLoading ? (
              <a className="track__album-link" href="http://">
                {props.album}
              </a>
            ) : (
              <Skeleton />
            )}
          </SkeletonTheme>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">
            {" "}
            {isLoading ? props.trackTime : "0.00"}
          </span>
        </div>
      </div>
    </div>
  );
}
export default MainCenterblok;
