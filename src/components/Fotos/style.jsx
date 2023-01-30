import styled from "styled-components";

export const Fotos = styled.section`
  width: 100vw;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .containerFotos {
    width: 80%;

    #contFot1 {
      width: 90%;
      margin: 0 auto 30px auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 25px;

      span {
        font-weight: 700;
        font-size: 12px;
        line-height: 122%;
        color: #e05100;
      }

      h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 122%;
        color: #0f193e;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: #1e1e1e;
      }

      button {
        width: 304px;
        height: 40px;
        background: #273566;
        border-radius: 2px;
        border: none;
        font-size: 12px;
        line-height: 150%;
        
        a {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          
          :visited {
            color: white;
          }
        }
      }
    }

    #contFot2 {
      display: flex;
      align-items: center;
      justify-content: center;

      figure {
        width: 98%;

        img {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 601px) {
    padding: 50px 0;
    border-top: 2px solid #71799530;
    border-bottom: 2px solid #71799530;
    
    .containerFotos {
      width: 100%;
      max-width: 1300px;
      display: flex;
      align-items: center;

      #contFot1 {
        span {
          font-size: 16px;
          line-height: 130%;
        }

        h2 {
          font-size: 40px;
          line-height: 120%;
          width: 90%;
        }

        p {
          font-size: 18px;
          line-height: 160%;
        }

        button {
          width: 280px;
          height: 56px;
        }
      }

      #contFot2 {
        display: flex;
        align-items: center;
        justify-content: center;

        figure {
          width: 100%;
        }
      }
    }
  }
`;
