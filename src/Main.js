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
import logo from "./img/img1.png";
import logo1 from "./logo/1.png";
import logo2 from "./logo/2.png";
import logo3 from "./logo/3.png";
import logo4 from "./logo/4.png";
import logo5 from "./logo/5.png";
import logo6 from "./logo/6.png";
import logo7 from "./logo/7.png";
import logo8 from "./logo/8.png";
import logo9 from "./logo/9.png";
import logo10 from "./logo/10.png";
import logo11 from "./logo/11.png";
import logo12 from "./logo/12.png";
import logo13 from "./logo/13.png";
import logo14 from "./logo/14.png";

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

    .nav:hover {
      background-color: #eee;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 1rem 3rem;

    .navContainer {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 1rem 2rem;
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

const Banner1 = styled.div``;

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

  @media screen and (max-width: 400px) {
    .banner2Title {
      font-size: 6vw;
    }
  }
`;

const Footer = styled.div`
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  padding: 2rem;

  .footerContainer {
    width: 100%;
    max-width: 850rem;
    color: white;
    font-size: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 3rem;
    color: gray;
  }

  img {
    width: 5rem;
  }

  .cul {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .footerTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    gap: 1rem;
    font-weight: bold;

    div {
      display: flex;
      gap: 1rem;
    }
  }

  .footerTitle2 {
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .footerContent {
    color: gray;
  }

  @media screen and (max-width: 850px) {
    .footerContainer {
      gap: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    height: fit-content;

    .footerTitle {
      align-items: start;
    }
    .footerContainer {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

const Support = styled.div`
  background-color: #f1f1f1;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  .supportContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;
  }

  .supportTitle {
    font-weight: bold;
    font-size: 1.2rem;
    border-left: 0.2rem solid #012f81;
    padding-left: 0.5rem;
    line-height: 1.2rem;
    height: 1rem;
    white-space: nowrap;
  }

  .supportCul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  @media screen and (max-width: 850px) {
    height: fit-content;
    .supportContainer {
      gap: 2vw;
    }
    img {
      width: 10vw;
    }

    .supportTitle {
      font-size: 0.8vw;
    }

    .supportContainer {
      width: 100%;
      max-width: 850rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 2rem;

    .supportCul {
      gap: 1.5vw;
      justify-content: space-between;
    }
  }
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

      <Observer>
        <Banner
          num={1}
          content={content2}
          width={100}
          color={"rgb(186, 211, 255)"}
        ></Banner>
      </Observer>
      <Observer>
        <Banner2>
          <div className="banner2Title"> PICTURES OF GLOBAL 6K</div>
          <Banner num={4} content={content} width={80}></Banner>
        </Banner2>
      </Observer>

      {/* <MainComponent></MainComponent> */}
      <Observer>
        <Support>
          <div className="supportContainer">
            <div className="supportCul">
              <div className="supportTitle">주최</div>
              <img src={logo1} alt={logo1} />
              <img src={logo2} alt={logo1} />
              <img src={logo3} alt={logo1} />
            </div>
            <div className="supportCul">
              <div className="supportTitle">후원</div>
              <img src={logo4} alt={logo1} />
              <img src={logo5} alt={logo1} />
              <img src={logo6} alt={logo1} />
              <img src={logo7} alt={logo1} />
            </div>

            <div className="supportCul">
              <div className="supportTitle">협찬사</div>
              <img src={logo8} alt={logo1} />
              <img src={logo9} alt={logo1} />
              <img src={logo10} alt={logo1} />
              <img src={logo11} alt={logo1} />
              <img src={logo12} alt={logo1} />
            </div>

            <div className="supportCul">
              <div className="supportTitle">파트너사</div>
              <img src={logo13} alt={logo1} />
              <img src={logo14} alt={logo1} />
            </div>
          </div>
        </Support>
      </Observer>

      <Footer>
        <div className="footerContainer">
          <div className="footerTitle">
            <img src={logo} alt={logo} />

            <div>
              <span>개인정보처리방침</span>
              <span>이용약관</span>
            </div>
          </div>

          <div>
            <div className="footerTitle2">[행사/참가 신청문의]</div>
            <div className="cul">
              <div>
                <div>문의처</div>
                <div>ADDRESS</div>
                <div>TEL</div>
                <div>E-MAIL</div>
              </div>
              <div>
                <div className="footerContent">사랑, 하나, 오티즘 사무국</div>
                <div className="footerContent">
                  서울특별시 송파쿠 중대로 56, 국제빌딩 601호
                </div>
                <div className="footerContent"> 070-4139-7227 </div>
                <div className="footerContent"> autismkorearace@gmail.com</div>
              </div>
            </div>
          </div>

          <div>
            <div className="footerTitle2">[캠페인/기부금 문의]</div>
            <div className="cul">
              <div>
                <div>사단법인</div>
                <div>ADDRESS</div>
                <div>사업자등록번호</div>
                <div>TEL</div>
                <div>E-MAIL</div>
              </div>
              <div>
                <div className="footerContent">한국자폐인사랑협회</div>
                <div className="footerContent">
                  서울특별시 영등포구 의사당대로22, 306호
                </div>
                <div className="footerContent"> 120-82-08355</div>
                <div className="footerContent"> 02 445-5444 </div>
                <div className="footerContent"> ask@autismkorea.kr </div>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </MainContainer>
  );
}

export default Main;
