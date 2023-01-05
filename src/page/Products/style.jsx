import styled from "styled-components";

export const ProductsPage = styled.div`
  background-color: var(--white-gray);

  section {
    width: 100vw;
    height: 330px;
    background-image: url(${(props) => props.wallpaperOne});
    background-size: 120vw;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0 auto;
      font-weight: 700;
      font-size: 48px;
      line-height: 122%;
      color: var(--white);
    }
  }

  .container-one {
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

      figure {
        display: none;
      }

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

        p {
          font-size: 18px;
          line-height: 160%;
          max-width: 390px;

          span {
            font-weight: 700;
          }
        }

        button {
          width: 280px;
          height: 54px;
          left: 352px;
          top: 2203px;

          background: var(--blue-one);
          border-radius: 2px;
          border: none;

          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;

          color: var(--white);

          #arrow {
            font-size: 20px;
          }
        }

        #aviso {
          display: ${(props) => props.display};
          font-size: 14px;
          color: #0000008b;
        }

        iframe {
          display: none;
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
  }

  @media (max-width: 900px) {
    section {
      height: 240px;
        background-image: url(${(props) => props.wallpaperTwo});


      h1 {
        font-size: 28px;
        width: 80%;
        text-align: center;
      }
    }

    .container-one {
      flex-direction: row;

      .div-one {
        width: 100%;
        height: auto;
        justify-content: center;

        figure {
          display: flex;

          img {
            width: 100%;
          }
        }

        div {
          padding: 20px 0;

          h3 {
            font-size: 12px;
          }

          h2 {
            font-size: 24px;
            width: 100%;
          }

          p {
            font-size: 14px;
          }
        }
      }

      #div-download {
        div {
            align-items: center;

            h2, p {
                text-align: center;
            }
        }
      }

      .div-two {
        width: 100%;
        height: auto;
        padding-top: 0;

        #figureDesktop {
          display: none;
        }
      }

      #no-div {
        width: 0;
      }
    }
  }

  @media (max-width: 600px) {
    section {
      height: 135px;

      h1 {
        font-size: 28px;
        width: 80%;
      }
    }

    .container-one {
      flex-direction: column;

      .div-one {
        width: 100%;
        height: auto;
        justify-content: center;

        figure {
          display: flex;

          img {
            width: 100%;
          }
        }

        div {
          padding: 20px 0;

          h3 {
            font-size: 12px;
          }

          h2 {
            font-size: 24px;
            width: 100%;
          }

          p {
            font-size: 14px;
          }
        }
      }

      .div-two {
        width: 100%;
        height: auto;
        padding-top: 0;

        #figureDesktop {
          display: none;
        }
      }
    }
  }
`;
