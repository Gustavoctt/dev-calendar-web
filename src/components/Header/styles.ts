import styled from 'styled-components';

export const Headers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background: #Cad8ed;

    > img {
        width: 200px;
    }

    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > img {
            padding: 10px;
            width: 80px;
            border-radius: 50%;
        }
    }

 /*   width: 100%;
    height: 15vh;

    background: #CAD8ED;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    }*/
`;