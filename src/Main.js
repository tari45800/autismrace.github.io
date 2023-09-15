import styled from "styled-components";
import Observer from "./Observer";
import img from "./img/1.jpg";
import Banner from "./Banner";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";

const MainContainer = styled.div`
  padding-top: 65.6px;

  @media screen and (max-width: 1200px) {
    padding-top: 49.6px;
  }
`;

const HeaderComponent = styled.div`
  padding: 1.5rem 3rem;
  position: fixed;
  top: 0;
  display: flex;
  border: 1px solid gray;
  background-color: white;
  z-index: 10;
  width: 100%;

  .title {
    font-weight: bold;
  }

  .navContainer {
    display: flex;
    justify-content: center;
    gap: 5rem;
    flex: 1;
  }

  .nav {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    font-weight: bold;
  }

  .nav:hover {
    color: #012f81;
  }

  .nav:hover .hiddenNav {
    display: block;
  }

  .hiddenNav {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    font-size: 0.7rem;

    div {
      display: flex;
      justify-content: center;
      padding-top: 1.5rem;
      font-weight: normal;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 1rem 3rem;

    .navContainer {
      display: none;
    }
  }
`;

const MainComponent = styled.div`
  border: 1rem solid #012f81;
  height: 200vh;
  padding: 0 3rem;
`;

const Poster = styled.div`
  img {
    width: 100vw;
  }
`;

const Banner1 = styled.div`
  .PICTURES {
    display: flex;
    flex-direction: column;
    align-items: center;

    .PICTURESTitle {
      font-size: 2rem;
      font-weight: bolder;
      text-align: center;
      padding: 5rem 0 1rem 0;
    }
  }
`;

const Banner2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner2Title {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    padding: 5rem 0 1rem 0;
  }
`;

const Support = styled.div`
  background-color: #eee;
`;

function Main() {
  const banner = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const content = banner.map((el, idx) => (
    <div className="bannerContentBox">
      <div className="bannerContent" key={idx}>
        <img src={el} alt={el} />
        <div className="">
          <a>GLOBAL 6K FOR WATER RUNNING</a>
        </div>
        <div className="">소중한 사람과 함께 하니 더 의미있는 기부런</div>
      </div>
    </div>
  ));

  const content2 = banner.map((el, idx) => (
    <div className="banner2ContentBox">
      <div className="banner2Content" key={idx}>
        <Observer>
          <div className="bannerWord">
            <div className="wordTitle">
              글로벌 6K 러닝 캠페인만의 차별점이 있으셨나요?
            </div>
            <div>
              코로나 시기를 지나 오랜만에 오프라인 대회들이 열리기 시작하면서
              아프리카 아이들이 깨끗한 물을 얻기 위해 6km를 달린다는 취지를 알고
              아이들을 어려움에 조금이나마 공감하기 위해 리얼제리캔챌린지에
              신청했어요. 나는 너무나 쉽게 깨끗한 물을 맛보고 있는데 아이들은 이
              긴 거리를 이렇게 힘들게 매일 다니구나라는 미안한 마음도 들었어요.
            </div>
          </div>{" "}
        </Observer>

        <img src={el} alt={el} />
      </div>
    </div>
  ));

  return (
    <MainContainer>
      <HeaderComponent>
        <span className="title">AUTISM RACE</span>

        <div className="navContainer">
          <div className="nav">캠페인 소개</div>
          <div className="nav">
            레이스 안내
            <div className="hiddenNav">
              <div>오프라인 런</div>
              <div>버추얼 런</div>
              <div>이벤트 / 기념품</div>
            </div>
          </div>
          <div className="nav">
            레이스 신청
            <div className="hiddenNav">
              <div>오프라인 런</div>
              <div>버추얼 런</div>
              <div>신청확인</div>
            </div>
          </div>
          <div className="nav">건강지킴이 캠페인</div>
          <div className="nav">
            커뮤니티
            <div className="hiddenNav">
              <div>공지사항</div>
              <div>FAQ</div>
            </div>
          </div>
          <div className="navHoverBar"></div>
        </div>
      </HeaderComponent>

      <Poster>
        <img src={img} alt="img" />
      </Poster>

      <Banner
        num={1}
        content={content2}
        width={100}
        color={"rgb(186, 211, 255)"}
      ></Banner>
      <Banner2>
        <div className="banner2Title"> PICTURES OF GLOBAL 6K</div>
        <Banner num={4} content={content} width={80}></Banner>
      </Banner2>

      {/* <MainComponent></MainComponent> */}
      <Support></Support>
    </MainContainer>
  );
}

export default Main;
