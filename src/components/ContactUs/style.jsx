import styled from "styled-components";

export const ContactUs = styled.div`
  width: 100vw;
  height: calc(100vh - 198px);
  min-height: 735px;
  background-image: url(${(props) => props.backDesktop});
  background-size: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;

  section {
    width: 100%;
    height: 100%;
    max-width: 1260px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    .divForm {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      form {
        width: 398px;
        height: 700px;
        background-color: var(--white);
        border-radius: 13px;
        box-shadow: 0px 5.30667px 61.9111px rgba(0, 0, 0, 0.25);
        padding: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
          font-size: 24.7644px;
          width: 90%;
          font-weight: bold;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 5px;

          label {
            font-size: 13px;
            font-weight: 800;

            .redSpan {
              color: red;
              font-size: 11px;
            }
          }

          input {
            border: 0.884444px solid #c1c1c1;
            border-radius: 4px;
            height: 39.76px;
            background-color: var(--white);
            padding: 0 13px;
          }

          .input-div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 75%;
            min-width: 250px;

            .input-radio {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 4px;
              font-weight: 400;
              width: 200px;
            }

            .selects {
              border: 0.884444px solid #c1c1c1;
              border-radius: 4px;
              width: 110px;
              height: 39.76px;
              background-color: var(--white);
              padding: 0 7px;
            }
          }

          .input-div-quantiy {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            width: 75%;

            .input-radio {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 4px;
              font-weight: 400;
              height: 20px;
            }
          }
        }

        button {
          height: 49.53px;
          background-color: var(--blue-one);
          padding: 0 13px;
          border: none;
          border-radius: 4px;
          color: var(--white);

          display: flex;
          align-items: center;
          justify-content: center;

          .arrowUpRight {
            margin-left: 10px;
            font-size: 18px;
          }
        }
      }
    }

    .divInfo {
      width: 50%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      padding: 0 50px;

      #formMobile {
        display: none;
      }

      h3 {
        color: var(--orange);
        font-size: 16px;
        text-transform: uppercase;
      }

      h2 {
        font-weight: 700;
        font-size: 40px;
        line-height: 128%;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;

        span {
          font-weight: 700;
          color: var(--orange);
        }
      }

      div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 0;

        img {
          height: 30px;
          margin-right: 20px;
        }

        a {
          display: flex;
          align-items: center;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          text-decoration-line: underline;
          color: black;

          #fiArrowUpRight {
            color: var(--orange);
            margin-left: 10px;
            font-size: 20px;
          }
        }
      }

      .hourAddress {
        display: flex;
        flex-direction: column;
        background-color: #F0F0F0;
        padding: 24px;
        max-width: 384px;
        
        h4 {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
    
            .icons-orange {
              color: var(--orange);
              margin-left: 5px;
            }
        }
      }

      #numberPhone {
        font-weight: 900;
        font-size: 18px;
        line-height: 160%;

        span {
          display: flex;
          align-items: center;
        }
      }

      button {
        width: 100%;
        height: 49.53px;
        background-color: var(--blue-one);
        border: none;
        color: var(--white);

        border-radius: 4px;
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
    width: 100vw;
    height: auto;
    margin-bottom: 0;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    background-image: url(${(props) => props.backTablet});

    section {
      width: 100%;
      height: 100%;
      flex-direction: column;

      .divInfo {
        width: 100%;
        align-items: center;
        padding: 5vw 100px;

        h2 {
          font-size: 40px;
          text-align: center;
        }

        #formMobile {
          display: flex;
          width: auto;
          margin: 18vw auto;
        }

        #numberPhone {
          width: 100%;
        }
      }

      #formDesktop {
        display: none;
      }

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 50px;
        margin: 30px 0;
        gap: 20px;

        h3 {
          font-size: 12px;
        }

        h2 {
          font-size: 28px;
        }

        p {
          font-weight: 400;
          font-size: 16px;
        }

        div {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          padding: 0;
          margin: 0;
          gap: 0;

          img {
            height: 30px;
            margin-right: 20px;
          }

          a {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 160%;
            text-decoration: none;
            text-decoration-line: underline;
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

          .arrowUpRight {
            margin-left: 10px;
            font-size: 18px;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: auto;
    margin-bottom: 0;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    background-image: url(${(props) => props.backMobile});
    background-size: 100vw;

    section {
      width: 100%;
      height: 100%;
      flex-direction: column;

      .divInfo {
        width: 100%;
        padding: 0 50px;


        h2 {
          font-size: 28px;
        }

        #formMobile {
          display: flex;
          margin: 100px 0;
        }
      }

      #formDesktop {
        display: none;
      }

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 50px;
        margin: 30px 0;
        gap: 20px;

        h3 {
          font-size: 12px;
        }

        h2 {
          font-size: 28px;
        }

        p {
          font-weight: 400;
          font-size: 16px;
        }

        div {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          padding: 0;
          margin: 0;
          gap: 0;

          img {
            height: 30px;
            margin-right: 20px;
          }

          a {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 160%;
            text-decoration: none;
            text-decoration-line: underline;
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

          .arrowUpRight {
            margin-left: 10px;
            font-size: 18px;
          }
        }
      }
    }
  }
`;
