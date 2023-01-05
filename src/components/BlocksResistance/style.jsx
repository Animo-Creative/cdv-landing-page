import styled from "styled-components";

export const BlocksResistance = styled.div`
  height: 1244px;
  width: 100vw;
  background-color: var(--white-gray);
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1920px;
    margin: auto;

    .div-one {
      width: 50%;
      max-width: 970px;
      height: 622px;
      display: flex;
      justify-content: flex-end;

      div {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding: 85px 0;
        margin: 0;

        h3 {
          font-weight: 700;
          font-size: 16px;
          color: var(--orange);
          text-transform: uppercase;
        }

        h2 {
          font-weight: 700;
          font-size: 40px;
          font-family: "Raleway", sans-serif;
          width: 90%;
        }

        ul {
          margin-left: 40px;

          li {
            font-weight: 400;
            font-size: 18px;
          }
        }
      }
    }

    .div-two {
      width: 50%;
      max-width: 970px;
      height: 622px;
      display: flex;
      align-items: center;

      figure {
        width: 70%;

        img {
          width: 100%;
        }
      }
    }
    
    .div-three {
      width: 50%;
      max-width: 970px;
      height: 622px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      figure {
        width: 70%;
  
        img {
          width: 100%;
        }
      }
    }

    .div-four {
      width: 50%;
      max-width: 970px;
      height: 622px;
      display: flex;
      justify-content: flex-start;

      div {
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding: 85px 0;

        h3 {
          font-weight: 700;
          font-size: 16px;
          color: var(--orange);
          text-transform: uppercase;
        }

        h2 {
          font-weight: 700;
          font-size: 40px;
          font-family: "Raleway", sans-serif;
          width: 70%;
        }

        ul {
          display: flex;
          flex-direction: column;
          margin-left: 40px;
          gap: 20px;

          li {
            font-weight: 400;
            font-size: 18px;
          }
        }
      }
    }
  }


  @media (max-width: 900px) {
    height: auto;

    div {
      width: 100%;
      flex-direction: column;
      padding: 20px;

      .div-one {
        width: 100%;
        height: auto;
        justify-content: flex-start;

        div {
          width: 100% !important;
          justify-content: center;

          h3 {
            font-size: 12px;
          }

          h2 {
            font-size: 24px;
          }

          ul {
            margin-left: 40px;

            li {
              font-weight: 400;
              font-size: 14px;
            }
          }
        }
      }

      .div-two {
        width: 100%;
        height: 100%;

        figure {
          margin: auto;
        }
      }
    }

    .container-two {
        display: flex;
        flex-direction: row;

        .div-three {
        width: 100%;
        height: 200px;
      }

      .div-four {
        width: 100%;
        height: auto;
        justify-content: center;

        div {
          margin-left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          padding: 0;

          h3 {
            font-weight: 700;
            font-size: 12px;
            color: var(--orange);
            text-transform: uppercase;
          }

          h2 {
            font-weight: 700;
            font-size: 24px;
            font-family: "Raleway", sans-serif;
            width: 90%;
          }

          ul {
            margin-left: 40px;

            li {
              font-weight: 400;
              font-size: 14px;
            }
          }
        }
      }
      }
  }


  @media (max-width: 600px) {
    height: auto;

    div {
      width: 100%;
      flex-direction: column;
      padding: 20px;

      .div-one {
        width: 100%;
        height: auto;
        justify-content: flex-start;

        div {
          width: 100%;
          justify-content: center;

          h3 {
            font-weight: 700;
            font-size: 12px;
            color: var(--orange);
            text-transform: uppercase;
          }

          h2 {
            font-weight: 700;
            font-size: 24px;
            font-family: "Raleway", sans-serif;
            width: 90%;
          }

          ul {
            margin-left: 40px;

            li {
              font-weight: 400;
              font-size: 14px;
            }
          }
        }
      }

      .div-two {
        width: 100%;
        height: 200px;
      }

      

      
    }

    .container-two {
        display: flex;
        flex-direction: column-reverse;

        .div-three {
        width: 100%;
        height: 200px;
      }

      .div-four {
        width: 100%;
        height: auto;
        justify-content: center;

        div {
          margin-left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          padding: 0;

          h3 {
            font-weight: 700;
            font-size: 12px;
            color: var(--orange);
            text-transform: uppercase;
          }

          h2 {
            font-weight: 700;
            font-size: 24px;
            font-family: "Raleway", sans-serif;
            width: 90%;
          }

          ul {
            margin-left: 40px;
            gap: 0;
            li {
              font-weight: 400;
              font-size: 14px;
            }
          }
        }
      }
      }
  }
`;
