import "../App.css";
import * as S from "./Search.styles";
function Search() {
  return (
    <S.CenterSearch>
      <S.Svg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.Svg>
      <S.Text type="search" placeholder="Поиск" name="search" />
    </S.CenterSearch>
  );
}
export default Search;
