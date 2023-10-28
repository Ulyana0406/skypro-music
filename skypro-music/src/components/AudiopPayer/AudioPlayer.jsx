import * as S from "./AudioPlayer.styles";

export function AudioPlayer() {
  return (
    <S.Bar>
      <S.BarContent>
        <S.PlayerProgress />
        <S.PlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.BtnPrev>
                <S.BtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.BtnPrevSvg>
              </S.BtnPrev>
              <S.BtnPlay>
                <S.BtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </S.BtnPlaySvg>
              </S.BtnPlay>
              <S.BtnNext>
                <S.BtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.BtnNextSvg>
              </S.BtnNext>
              <S.BtnRepeat>
                <S.BtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </S.BtnRepeatSvg>
              </S.BtnRepeat>
              <S.BtnShufle>
                <S.BtnShufleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.BtnShufleSvg>
              </S.BtnShufle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.trackPlayContain>
                <S.trackPlayimg>
                  <S.trackPlaysvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.trackPlaysvg>
                </S.trackPlayimg>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    Ты та...
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    Баста
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.trackPlayContain>
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.PlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.PlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDisLike>
                  <S.PlayDisLikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.PlayDisLikeSvg>
                </S.TrackPlayDisLike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.VolumeBlock>
            <S.VolumeContent>
              <S.Volumeimg>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.Volumeimg>
              <S.VolumeProgres>
                <S.VolumeProgresLine type="range" name="range" />
              </S.VolumeProgres>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.PlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
