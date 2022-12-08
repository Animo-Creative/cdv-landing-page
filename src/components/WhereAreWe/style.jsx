import styled from "styled-components";

export const WhereAreWe = styled.div`
  width: 100vw;
  height: 406px;
  background-color: var(--yellow-background);
  margin-bottom: 112px;
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
    
    div {
      width: 50%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 50px;

      h3 {
        color: var(--orange);
        font-size: 16px;
        text-transform: uppercase;
        text-align: center;

      }

      h2 {
        font-weight: 700;
        font-size: 32px;
        text-align: center;
      }
      
      p {
        font-weight: 500;
        text-align: center;
        font-size: 16px;
      }

      div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0;

        img {
          height: 30px;
          margin-right: 20px;
        }

        a {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          text-decoration-line: underline;
          color: black;
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
          display: flex;
          align-items: center;
          justify-content: center;
            text-decoration: none;
            color: white;
            width: 100%;
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
    padding: 40px 0;

    section {
        width: 100%;
        height: 100%;

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
            font-size: 32px;
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
            align-items: center;
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
