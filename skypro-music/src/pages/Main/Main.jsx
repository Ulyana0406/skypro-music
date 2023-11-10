import { SideBar } from "./../../components/SideBar/SideBar";
import { MainCenterblok } from "./../../components/TrackList/TrackList";
import { NavMenu } from "./../../components/NavMenu/NavMenu";
import { AudioPlayer } from "./../../components/AudiopPayer/AudioPlayer";
import { Search } from "./../../components/Search/Search";
import { Filter } from "./../../components/FIlter/Filter";
import * as S from "./../../App.styles";
import { getPlayList } from "../../api";
import { useState, useEffect } from "react";
//import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export const MainPage = (currentTrack, setCurrentTrack) => {
  const [allTracks, setAllTracks] = useState([]);

  //setLoading(true);
  useEffect(() => {
    getPlayList().then((lists) => {
      console.log(lists);
      setAllTracks(lists);
    });
  }, []);
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
          {allTracks.map((oneTrack) => {
            return (
              <S.ContentPlayList>
                <MainCenterblok
                  key={oneTrack.id}
                  oneTrack={oneTrack}
                  trackName={oneTrack.name}
                  trackAuthor={oneTrack.author}
                  album={oneTrack.album}
                  trackTime={oneTrack.duration_in_seconds}
                />
              </S.ContentPlayList>
            );
          })}
        </S.MainCentrBlock>
        <SideBar />
      </S.Main>
      <AudioPlayer />
      <footer className="footer"></footer>
    </S.Container>
  );
};
