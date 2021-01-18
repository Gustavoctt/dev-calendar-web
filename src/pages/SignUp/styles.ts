import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: #D4E4FD;
    display: flex;
    flex-direction: column;

    @media(min-width: 800px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        color: #000;
        font-size: 30px;
        margin: 20px 0;
    }

    > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    > div {
        .back {
            color: #2B63FF;
            text-decoration: none;
            
            display: flex;
            align-items: center;

            > span {
                margin-right: 20px;
            }
        }
    }

    @media(min-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const ContainerRight = styled.div`
    display: none;

    @media(min-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items:center;

        .logo {
            > img {
                width: 40vw;
                margin-top: 40px;
            }
        }

        .calendar {
            > img {
                width: 30vw;
                margin-top: 40px;
            }
        }
    }

`;