import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./TrackList.styles";

export function MainCenterblok(props) {
  const [isLoading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 4000);
  return (
    <S.PlayListItem>
      <S.PlayListTrack>
        <S.TrackTitle>
          {/* <SkeletonTheme baseColor="#cf6565" highlightColor="#ff0">
                      <p><Skeleton /></p>
                    </SkeletonTheme> */}
          <S.TrackTitleImg>
            {isLoading ? (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            ) : (
              <Skeleton />
            )}
            {/* <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                        </svg> */}
          </S.TrackTitleImg>
          <S.TrackTitleText>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={20}
              width={356}
            >
              {isLoading ? (
                <S.TrackTitleLink href="http://">
                  {props.trackName} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <SkeletonTheme
            baseColor="#313131"
            highlightColor="#fff"
            height={20}
            width={272}
          >
            {isLoading ? (
              <S.TrackAuthorLink href="http://">
                {props.trackAuthor}
              </S.TrackAuthorLink>
            ) : (
              <Skeleton />
            )}
          </SkeletonTheme>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <SkeletonTheme
            baseColor="#313131"
            highlightColor="#fff"
            height={20}
            width={250}
          >
            {isLoading ? (
              <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
            ) : (
              <Skeleton />
            )}
          </SkeletonTheme>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {" "}
            {isLoading ? props.trackTime : "0.00"}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlayListTrack>
    </S.PlayListItem>
  );
}
