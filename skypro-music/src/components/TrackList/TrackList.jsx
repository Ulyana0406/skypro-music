import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./TrackList.styles";
import { getPlayList } from "../../api";
export function MainCenterblok({ isLoading, setLoading, setCurrentTrack }) {
  const [allTracks, setAllTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPlayList()
      .then((lists) => {
        setAllTracks(lists);
      })
      .finally(() => setLoading(false))
      .catch((error) => setError(error.message));
  }, []);
  if (error) {
    return <div>Ошибка при получении треков: {error}</div>;
  }

  return (
    <>
      {allTracks.map((oneTrack) => {
        return (
          <S.PlayListItem
            onClick={() => setCurrentTrack(oneTrack)}
            key={oneTrack.id}
          >
            <S.PlayListTrack>
              <S.TrackTitle>
                {/* <SkeletonTheme baseColor="#cf6565" highlightColor="#ff0">
                      <p><Skeleton /></p>
                    </SkeletonTheme> */}
                <S.TrackTitleImg>
                  {!isLoading ? (
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
                    {!isLoading ? (
                      <S.TrackTitleLink
                        onClick={() => setCurrentTrack(oneTrack)}
                        href="http://"
                      >
                        {oneTrack.name} <S.TrackTitleSpan></S.TrackTitleSpan>
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
                  {!isLoading ? (
                    <S.TrackAuthorLink href="http://">
                      {oneTrack.author}
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
                  {!isLoading ? (
                    <S.TrackAlbumLink href="http://">
                      {oneTrack.album}
                    </S.TrackAlbumLink>
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
                  {!isLoading
                    ? (oneTrack.duration_in_seconds / 60).toFixed(2)
                    : "0.00"}
                </S.TrackTimeText>
              </S.TrackTime>
            </S.PlayListTrack>
          </S.PlayListItem>
        );
      })}
    </>
  );
}
