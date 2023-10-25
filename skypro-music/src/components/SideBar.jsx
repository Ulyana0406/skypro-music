import "../App.css";
import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import * as S from "./SideBar.styles";
//const S. = S..div``
function SideBar() {
  const [isLoading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 4000);
  return (
    <S.MainSidebar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Sergey.Ivanov</S.SideBarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
          <S.SideItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {isLoading ? (
                <S.SideBarLink href="#">
                  <S.SideBarImg src="img/playlist01.png" alt="day's playlist" />
                </S.SideBarLink>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </S.SideItem>
          <S.SideItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {isLoading ? (
                <S.SideBarLink href="#">
                  <S.SideBarImg src="img/playlist02.png" alt="day's playlist" />
                </S.SideBarLink>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </S.SideItem>
          <S.SideItem>
            <SkeletonTheme
              baseColor="#313131"
              highlightColor="#fff"
              height={150}
              width={250}
            >
              {isLoading ? (
                <S.SideBarLink href="#">
                  <S.SideBarImg src="img/playlist03.png" alt="day's playlist" />
                </S.SideBarLink>
              ) : (
                <Skeleton />
              )}
            </SkeletonTheme>
          </S.SideItem>
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSidebar>
  );
}
export default SideBar;
