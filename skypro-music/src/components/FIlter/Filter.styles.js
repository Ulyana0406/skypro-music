.centerblock__filter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
}
.filter__title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
}

.filter__button {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
}

.filter__button:not(:last-child) {
  margin-right: 10px;
}
._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}
._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}

.modal {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  padding-top: 16px;
}
.modal__content {
  padding: 19px;
  border-radius: 12px;
  height: 171px;
  width: 10vw;
  display: inline-flex;
  flex-direction: column;
  background: #313131;
  align-items: flex-start;
  gap: 10px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  position: absolute;
  opacity: 0.8;
  position: absolute;
  z-index: 1;
}
.modal__content::-webkit-scrollbar {
  width: 6px;
  border-radius: 12px;

  z-index: 3;
}

.modal__content::-webkit-scrollbar-track {
  background-color: #4b4949;
  border-radius: 12px;

  z-index: 3;
}

.modal__content::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 12px;
  height: 150px;
  width: 150px;

  z-index: 10;
}

.modal__content_text {
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
}
.modal__content_text:hover {
  color: #b672ff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  text-decoration-line: none;
}
