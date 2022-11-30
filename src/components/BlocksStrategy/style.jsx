import styled from "styled-components";

export const BlocksStrategy = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 889px;

  .section-one {
    height: 577px;
    width: 100%;
    max-width: 1260px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px RGB(0, 0, 0, 0.1);

    div {
      width: 50%;
      margin: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .descript {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 32px;
      padding: 0 50px;

      h3 {
        font-weight: 700;
        font-size: 16px;
        text-transform: uppercase;
        color: var(--orange);
      }

      h2 {
        font-weight: 700;
        font-size: 40px;
      }

      p {
        font-weight: 400;
        font-size: 18px;
      }
    }

    .figure-circles {
      margin: auto;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      figure {
        width: 536px;

        img {
          width: 100%;
        }
      }
    }
  }

  .section-two {
    height: 312px;
    width: 100%;
    max-width: 1260px;
    margin: auto;
    display: flex;
    justify-content: center;

    div {
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;

        h2 {
          font-weight: 700;
          font-size: 48px;
        }

        p {
          font-weight: 400;
          font-size: 20px;
          width: 100%;
        }
      }

      button {
        width: 40%;
        height: 49.53px;
        background-color: var(--blue-one);
        padding: 0 13px;
        border: none;
        border-radius: 4px;
        color: var(--white);

        display: flex;
        align-items: center;
        justify-content: center;

        a {
          text-decoration: none;
          color: white;
        }

        .arrowUpRight {
          margin-left: 10px;
          font-size: 18px;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  @media (max-width: 600px) {
    height: auto;

    .section-one {
      height: auto;
      margin: auto;
      flex-direction: column;

      div {
        width: 100%;
        margin: auto;
        height: auto;
      }

      .descript {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 32px;
        padding: 0 50px;

        h3 {
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          color: var(--orange);
        }

        h2 {
          font-weight: 700;
          font-size: 24px;
        }

        p {
          font-weight: 400;
          font-size: 14px;
        }
      }

      .figure-circles {
        margin: 20px auto;
        width: 100%;
        height: 100%;

        figure {
          width: 80%;

          img {
            width: 100%;
          }
        }
      }
    }

    .section-two {
      height: auto;
      flex-direction: column;
      padding: 25px;
      gap: 20px;
      div {
        width: 100%;
        gap: 20px;

        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;

          h2 {
            font-weight: 700;
            font-size: 32px;
          }

          p {
            font-weight: 400;
            font-size: 14px;
            width: 100%;
          }
        }

        button {
          width: 100%;
          height: 49.53px;
          background-color: var(--blue-one);
          padding: 0 13px;
          border: none;
          border-radius: 4px;
          color: var(--white);

          display: flex;
          align-items: center;
          justify-content: center;

          a {
            text-decoration: none;
            color: white;
          }

          .arrowUpRight {
            margin-left: 10px;
            font-size: 18px;
          }
        }
      }
    }
  }
`;
