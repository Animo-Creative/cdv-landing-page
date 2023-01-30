import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--blue-one);
  color: var(--white);
  width: 100vw;
  height: 99px;
  display: flex;
  justify-content: center;

  #home {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    max-width: 1260px;
    height: 100%;

    #menuHamb {
        display: none;
        font-size: 30px;
        cursor: pointer;
      }

    

    img {
      width: 120px;
    }

    ul {
      display: flex;
      width: auto;

      li {
        margin: 0 15px;
        text-decoration: none;
        list-style: none;
        color: white;
      }

      a {
        :hover {
          color: var(--yellow-background);
        }
        color: var(--white);
        
        :visited {
          :hover {
            color: var(--yellow-background);
          }
          color: var(--white);
        }
      }
      
      #${(props) => props.linkId} {
        color: var(--yellow-background);

        :visited {
          color: var(--yellow-background);
        }
      }
    }
  }

  @media (max-width: 600px) {
    height: 60px;
    padding: 0 20px;

    #home {
      justify-content: space-between;

      #linksDesktop {
        display: none;
      }

      #menuHamb {
        display: block;
        font-size: 30px;
        cursor: pointer;
      }
      
      img {
        width: 95px;
      }
      
      h2 {
        font-size: 10px;
      }
    }

    #linksMobile {
      width: 100vw;
      height: 100vh;
      z-index: 1;
      background-color: var(--blue-one);
      color: var(--white);
      position: absolute;
      
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 20px;

        li {
          font-size: 25px;
        }

        a {
          color: white;
        }

        #${(props) => props.linkId} {
          color: var(--yellow-background);
        }
      }
    }
  }
`;
