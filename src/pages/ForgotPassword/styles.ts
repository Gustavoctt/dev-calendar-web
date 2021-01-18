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
        justify-content: space-between;

    }

`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        color: #000;
        font-size: 28px;
        margin-bottom: 40px;
        margin-top: 40px;
    }

    >form {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    @media(min-width: 800px){
        margin-left: 100px;

        justify-content: center;
    }
`;

export const ContainerRight = styled.div`
    display: none;

    @media(min-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 50px;
        margin-right: 70px;

        .logo {
            > img {
                width: 40vw;
            }
        }

        .calendar {
            > img {
                width: 30vw;
                margin-top: 40px;
            }
        }
    }
/*
width: 50vw;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    
        .logo{
            margin-bottom: 50px;
        }
 */

`;