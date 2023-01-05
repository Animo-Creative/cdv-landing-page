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

    .our-pilars {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 145px 7% 7% 7%;

      h2 {
        font-weight: 700;
        font-size: 40px;
      }

      #see {
        font-weight: 400;
        font-size: 18px;
        margin: 0;
        margin: 30px 0;
        line-height: 160%;
      }

      .pilars {
        display: flex;
        flex-direction: row;
        height: auto;
        margin: 0;
        width: 100%;
        gap: 15px;

        position: relative;

        p {
          position: absolute;
          display: flex;
          align-items: center;

          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
        }

        .check {
          color: #23c450;
          font-size: 25px;
          margin-right: 10px;
        }

        #p2,
        #p4 {
          left: 170px;
        }
      }

      #pilar2 {
        top: 40px;
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
        border: none;
        border-radius: 4px;
        color: var(--white);

        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          width: 100%;
          height: 100%;

          .arrowUpRight {
            margin-left: 10px;
            font-size: 18px;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    height: auto;

    .section-one {
      height: auto;
      margin: auto;
      flex-direction: row;

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

      .our-pilars {
        width: 100%;
        height: 320px;
        padding: 25px 50px;
        margin: 70px 0;

        h2 {
          font-size: 24px;
        }

        #see {
          font-size: 14px;
        }

        .pilars {
          p {
            font-weight: 500;
            font-size: 14px;
            line-height: 160%;
          }

          .check {
            font-size: 23px;
          }

          #p2,
          #p4 {
            left: 130px;
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
          align-items: center;

          h2 {
            font-weight: 700;
            font-size: 32px;
          }

          p {
            font-weight: 400;
            font-size: 14px;
            width: 100%;
            text-align: center;
          }
        }

        button {
          width: 60%;
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

      .our-pilars {
        width: 100%;
        height: 320px;
        padding: 25px 50px;
        margin: 70px 0;

        h2 {
          font-size: 24px;
        }

        #see {
          font-size: 14px;
        }

        .pilars {
          p {
            font-weight: 500;
            font-size: 14px;
            line-height: 160%;
          }

          .check {
            font-size: 23px;
          }

          #p2,
          #p4 {
            left: 130px;
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
          align-items: center;

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
