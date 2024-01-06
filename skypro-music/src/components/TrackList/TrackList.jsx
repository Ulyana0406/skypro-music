import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./TrackList.styles";
import { getPlayList } from "../../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../store/track/trackSlice";

export function MainCenterblok({
  isLoading,
  setLoading,
  isPlaying,
  setIsPlaying,
}) {
  const [allTracks, setAllTracks] = useState([]);
  const [liked, isLiked] = useState(true);

  const dispatch = useDispatch();
  const baseAllTracks = useSelector((state) => state.player.tracks);
  const currentTrack = useSelector(
    (state) => state.player.currentTrack.content
  );
  const isCurrentTrackPlaying = useSelector(
    (state) => state.player.isPlayingTrack
  );

  const handleCurrentTrackId = (oneTrack) => {
    const isPlayingTrack = true;
    dispatch(
      setCurrentTrack(
        oneTrack.id,
        oneTrack,
        isPlayingTrack,
        allTracks,
        baseAllTracks
      )
    );
  };

  const setPlayItemImage = (oneTrack) => {
    if (isLoading) {
      return <Skeleton />;
    }

    if (isCurrentTrackPlaying === true && currentTrack?.id === oneTrack?.id) {
      return <S.BlinkingDot alt="music"> </S.BlinkingDot>;
    }

    if (isCurrentTrackPlaying === false && currentTrack?.id === oneTrack?.id) {
    } else {
      return (
        <S.TrackTitleSvg className="track__title-svg" alt="music">
          {" "}
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>{" "}
        </S.TrackTitleSvg>
      );
    }
  };

  const setLiked = (oneTrack) => {
    if (!liked && currentTrack?.id === oneTrack?.id) {
      return (
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99997 2.25572H8.02154C8.95343 1.44175 11.4125 0.165765 13.6127 1.76734C16.9673 4.20921 13.902 9.5 8.02154 13H7.99997M8.00003 2.25572H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H8.00003"
            stroke="#707070"
          />
        </svg>
      );
    }
    if (liked && currentTrack?.id === oneTrack?.id) {
    } else {
      return (
        <S.PlayLikeSvg alt="like">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </S.PlayLikeSvg>
      );
    }
  };
  return (
    <>
      {baseAllTracks.map((oneTrack) => {
        return (
          <S.PlayListItem key={oneTrack.id}>
            <S.PlayListTrack>
              <S.TrackTitle>
                {/* <SkeletonTheme baseColor="#cf6565" highlightColor="#ff0">
                      <p><Skeleton /></p>
                    </SkeletonTheme> */}
                <S.TrackTitleImg>{setPlayItemImage(oneTrack)}</S.TrackTitleImg>
                <S.TrackTitleText>
                  <SkeletonTheme
                    baseColor="#313131"
                    highlightColor="#fff"
                    height={20}
                    width={356}
                  >
                    {!isLoading ? (
                      <S.TrackTitleLink
                        onClick={() => {
                          handleCurrentTrackId(oneTrack);
                          setIsPlaying(true);
                        }}
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
              <S.TrackPlayLike
                onClick={() => {
                  setLiked(oneTrack);
                }}
              ></S.TrackPlayLike>
            </S.PlayListTrack>
          </S.PlayListItem>
        );
      })}
    </>
  );
}
