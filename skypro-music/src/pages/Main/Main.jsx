import { SideBar } from "./../../components/SideBar/SideBar";
import { MainCenterblok } from "./../../components/TrackList/TrackList";
import { NavMenu } from "./../../components/NavMenu/NavMenu";
import { AudioPlayer } from "./../../components/AudiopPayer/AudioPlayer";
import { Search } from "./../../components/Search/Search";
import { Filter } from "./../../components/FIlter/Filter";
import * as S from "./../../App.styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlayList } from "../../api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { playerSelector } from "../../store/selectors/selectors";
//import { getPlayList } from "../../api";
//import { useState, useEffect } from "react";
//import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export const MainPage = ({
  setCurrentTrack,
  isLoading,
  setLoading,
  volume,
  setVolume,
  isPlaying,
  setIsPlaying,
}) => {
  const dispatch = useDispatch();
  const [allTracks, setAllTracks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [error, setError] = useState(null);
  const currentTrack = useSelector(
    (state) => state.player.currentTrack.content
  );
  useEffect(() => {
    setLoading(true);
    getPlayList()
      .then((lists) => {
        setAllTracks(lists);
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      )
      .catch((error) => setError(error.message));
  }, []);
  if (error) {
    return <div>Ошибка при получении треков: {error}</div>;
  }
  //setLoading(false);

  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        <S.MainCentrBlock>
          <Search />
          <S.Centerh2>Треки</S.Centerh2>
          <Filter />
          <S.CenterblockContent>
            <S.ContentTitle>
              <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
              <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
              <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
              <S.PlaylistTitleCol4>
                <S.PlayListTitleSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </S.PlayListTitleSvg>
              </S.PlaylistTitleCol4>
            </S.ContentTitle>
          </S.CenterblockContent>
          <S.ContentPlayList>
            <MainCenterblok
              isLoading={isLoading}
              setLoading={setLoading}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </S.ContentPlayList>
        </S.MainCentrBlock>
        <SideBar />
      </S.Main>

      <footer className="footer"></footer>
    </S.Container>
  );
};
