import styled from "styled-components";


export const Footer = styled.footer`
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
        max-width: 1360px;
        height: 100%;

        p {
            font-family: 'Heebo', sans-serif;
            font-weight: 400;
            font-size: 18px;
            text-align: center;
            display: flex;
            align-items: center;
            
            a {
                display: flex;
                align-items: center;
                color: white;

                :visited {
                    color: white;
                }

                svg {
                    margin: 0 5px;
                }
            }
            
        }

        button {
            font-family: 'Heebo', sans-serif;
            background-color: transparent;
            color: var(--white);
            border: none;
            display: flex;
            align-items: center;
            font-weight: bold;

            a {
                text-decoration: none;
                color: var(--white);
                width: 100%;
            }

            .arrow {
                margin-left: 10px;
                margin-top: 5px;
                font-size: 16px;
            }
        }
    }

    @media (max-width: 600px) {
        height: 159px;

        div {
            justify-content: space-around;
            flex-direction: column-reverse;
            align-items: flex-start;
            padding-left: 43px;

            p {
                font-size: 14px;
            }
        }
    }
`