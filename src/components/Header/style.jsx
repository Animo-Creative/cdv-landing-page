import styled from 'styled-components'


export const Header = styled.header`
    background-color: var(--blue-one);
    color: var(--white);
    width: 100vw;
    height: 99px;
    display: flex;
    justify-content: center;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        max-width: 1260px;
        height: 100%;

        img {
            width: 120px;
        }

        h2 {
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            font-size: 16px;
        }
    }

    @media (max-width: 600px) {
        height: 60px;

        div {
            justify-content: space-around;

            img {
                width: 95px;
            }

            h2 {
                font-size: 10px;
            }
        }
    }
`
