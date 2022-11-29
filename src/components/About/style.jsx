import styled from "styled-components";

export const About = styled.div`
  width: 100vw;
  height: 1585px;
  background-image: url(${(props) => props.backAbout});
  background-color: white;
  background-size: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-x: hidden;

  .container {
    display: flex;
    justify-content: center;

    .quemSomos {
      width: 696px;
      height: 708px;
      background-color: var(--blue-one);
      margin: 0 16px;
      padding: 80px 104px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        color: var(--yellow-background);
        text-transform: uppercase;
        font-size: 16px;
      }

      h2 {
        font-size: 40px;
        color: var(--white);
      }

      p {
        color: var(--white);
        font-size: 18px;
      }
    }

    .nossaHistoria {
      width: 696px;
      height: 629px;
      background-color: var(--blue-one);
      margin: 0 16px;
      padding: 80px 104px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        color: var(--yellow-background);
        text-transform: uppercase;
        font-size: 16px;
      }

      h2 {
        font-size: 40px;
        color: var(--white);
      }

      p {
        color: var(--white);
        font-size: 18px;
      }
    }

    .bar-yel-blu {
      margin: 16px 15px 0 15px;
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 1851px;
    background-image: url(${(props) => props.backAbout});
    background-size: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .container {
      flex-direction: column;
      width: 100vw;

      .quemSomos {
        width: 80%;
        height: auto;
        margin: 40px auto;
        padding: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 12px;
        }

        h2 {
          font-size: 24px;
        }

        p {
          font-size: 14px;
        }
      }

      .nossaHistoria {
        width: 80%;
        margin: auto;
        background-color: var(--blue-one);
        padding: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 12px;
        }

        h2 {
          font-size: 24px;
        }

        p {
          font-size: 14px;
        }
      }

      figure {
        width: 80%;
        margin: 24px auto;
        height: 63px;
        overflow: hidden;

        .bar-yel-blu {
          margin: 0;
        }
      }
    }
  }
`;

export const NossosValores = styled.section`
  width: 1424px;
  height: 403px;
  background-color: var(--blue-one);
  margin: 0 auto 110px auto;
  padding: 64px 104px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .textsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 20px;

    h3 {
      font-size: 16px;
      text-transform: uppercase;
      color: var(--yellow-background);
      font-weight: 700;
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: var(--white);

      h2 {
        font-weight: 700;
        font-size: 40px;
      }

      p {
        font-weight: 400;
        font-size: 18px;
      }
    }
  }

  .imgsContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      figcaption {
        color: var(--white);
      }
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: auto;
    margin: 0;
    padding: 43px;
    background-color: transparent;

    .textsContainer {
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      gap: 20px;

      h3 {
        font-size: 12px;
        color: var(--orange);
        font-weight: 700;
      }

      div {
        display: flex;
        flex-direction: column;
        color: var(--black);

        h2 {
          font-size: 24px;
        }

        p {
          font-size: 14px;
        }
      }
    }

    .imgsContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
        
      figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        
        svg {
            color: var(--orange);
        }

        figcaption {
          color: var(--white);
        }
      }
    }
  }
`;
