import * as S from "./../../App.styles";
import { useSelector } from "react-redux";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { AudioPlayer } from "../../components/AudiopPayer/AudioPlayer";
import { MainCenterblok } from "../../components/TrackList/TrackList";
import { useState } from "react";
export const MyPlaylist = ({
  setLoading,
  isLoading,
  isPlaying,
  setIsPlaying,
  volume,
  setVolume,
}) => {
  const myAllTracks = [
    {
      id: 8,
      name: "Chase",
      author: "Alexander Nakarada",
      release_date: "2005-06-11",
      genre: "Классическая музыка",
      duration_in_seconds: 205,
      album: "Chase",
      logo: null,
      track_file:
        "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
    },
  ];
  const currentTrack = useSelector(
    (state) => state.player.currentTrack.content
  );

  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        <S.MainCentrBlock>
          <S.Centerh2>Мои треки</S.Centerh2>

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
      </S.Main>

      <footer className="footer"></footer>
    </S.Container>
  );
};
