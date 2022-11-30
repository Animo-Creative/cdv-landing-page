import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100vw;
  height: 730px;
  background-image: url(${(props) => props.backDesktop});
  background-color: var(--yellow-background);
  background-position: center;
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

    .divInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
      height: 80%;
      align-items: flex-start;

      h3 {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 16px;

        .certificate {
          margin-left: 10px;
        }
      }

      h1 {
        font-size: 48px;
      }

      p {
        font-size: 18px;
        width: 95%;
      }

      button {
        width: 200px;
        height: 56px;
        border: none;
        border-radius: 2px;
        
        background-color: var(--blue-one);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          color: white;
          text-decoration: none;
        }

        .arrowDown {
          margin-left: 10px;
          font-size: 18px;
        }
      }

      .barOne {
        height: 4px;
        margin: 0;
      }
    }

    .divForm {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      form {
        width: 398px;
        height: 727.17px;
        background-color: var(--white);
        border-radius: 13px;
        box-shadow: 0px 5.30667px 61.9111px rgba(0, 0, 0, 0.25);
        padding: 35px;
        margin-top: 124.5px;
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
  }

  @media (max-width: 1000px) {
    .divInfo {
      padding-left: 25px;
    }
  }

  @media (max-width: 900px) {
    section {
      flex-direction: column;

/*       .divInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 50%;
        height: 90%;
        align-items: flex-start;
      } */
    }
  }

  @media (max-width: 600px) {
    background-image: url(${(props) => props.backMobile});
    background-size: 100vw;
    height: 1164px;

    section {
      justify-content: center;
      flex-direction: column;

      .divInfo {
        width: 80%;
        height: 30%;
        margin: 35px 0;

        h3 {
          font-size: 12px;

          .certificate {
            width: 20px;
          }
        }

        h1 {
          font-size: 28px;
        }

        p {
          font-size: 14px;
        }

        button {
          display: none;
        }
      }

      .divForm {
        width: 80%;

        form {
          width: 324px;
          height: 666px;
          margin-top: 5px;

          p {
            width: 100%;
          }
        }
      }
    }
  }
`;
