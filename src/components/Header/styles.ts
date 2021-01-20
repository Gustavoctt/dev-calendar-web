import styled from 'styled-components';

export const Headers = styled.div`
    width: 100vw;
    height: 15vh;

    background: #CAD8ED;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .goBack {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;

        > span {
        color: #323232; 
        display: flex;
        
        margin-left: 10px;

        text-decoration: none;
        }
    }


    > img {
        width: 30vw;
    }

    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > strong {
            color: #323232;
            margin-right: 10px;
            text-decoration: none;
        }

        > img {
            width: 8vw;
            border-radius: 50%;
        }
    }

    @media(min-width: 800px) {
        height: 25vh;

        > img {
            width: 20vw;
        }

        .link {
            > img{
                margin-left: 20px;
            }
        }
    }
`;