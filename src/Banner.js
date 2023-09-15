import { useState } from "react";
import styled from "styled-components";
import Observer from "./Observer";
// import BiSolidLeftArrow from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const BannerContainer = styled.div`
  .bannerWindow {
    position: relative;
    width: ${({ width }) => `${width}vw`};
    height: fit-content;
    overflow: hidden;
    background-color: ${({ color }) => (color ? color : `none`)};
  }
  .bannerContainer {
    position: relative;
    width: ${({ num, content }) => `${(100 / num) * content.length}%`};
    top: 0;
    left: ${({ banner, num }) => `-${(banner * 100) / num}%`};
    display: flex;
    transition: 1s;
  }

  .bannerContentBox {
    flex: 1;
    display: flex;
    padding: 1rem;
  }

  .bannerContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      object-fit: cover;
    }

    a {
      font-weight: bold;
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.4rem;
      display: inline-block;
    }

    div {
      font-size: 0.7rem;
    }
  }

  .banner2ContentBox {
    flex: 1;
    padding: 3rem;
  }

  .banner2Content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
    img {
      width: 55vw;
      height: 30vw;
      border-radius: 1rem;
      object-fit: cover;
    }

    .bannerWord {
      width: 35vw;
      height: 30vw;
      border-radius: 1rem;
      background-color: #012f81;
      color: white;
      padding: 3rem;
      line-height: 1.5rem;
      z-index: 5;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;

      img {
        width: 100%;
        height: 30vw;
      }

      .bannerWord {
        width: 100%;
        height: 30vw;
      }
    }
  }

  .wordTitle {
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
  /* <div className="banner2ContentBox">
      <div className="banner2Content" key={idx}>
        <div className="bannerWord">
          <div className="wordTitle"> */

  .bannerNav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 3rem 0;
    font-weight: bolder;
    span {
      cursor: pointer;
      transition: 0.5s;
    }
  }

  @media screen and (max-width: 80rem) {
  }

  @media screen and (max-width: 36rem) {
  }
`;

function Banner({ num, content, width, height, color }) {
  const [banner, setBanner] = useState(1);

  const move = (direction) => {
    if (direction === "l") {
      setBanner((prev) => prev - 1);
    } else if (direction === "r") {
      setBanner((prev) => prev + 1);
    }
  };

  return (
    <BannerContainer
      banner={banner}
      num={num}
      content={content}
      width={width}
      height={height}
      color={color}
    >
      <div className="bannerWindow">
        <div className="bannerContainer">{content}</div>
        <div className="bannerNav">
          <span
            onClick={() => {
              move("l");
            }}
          >
            <BiSolidLeftArrow />
          </span>
          <div>
            <span>
              {banner}/{content.length}
            </span>
          </div>
          <span
            onClick={() => {
              move("r");
            }}
          >
            <BiSolidRightArrow />
          </span>{" "}
        </div>
      </div>
    </BannerContainer>
  );
}

export default Banner;
