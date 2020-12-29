import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: #D4E4FD;
    display: flex;
    flex-direction: row;
`;

export const ContainerLeft = styled.div`
    width: 50vw;
    padding: 50px;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        color: #000;
        font-size: 36px;
        margin-bottom: 50px;
    }
    
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;

        > input {
            width: 552px;
            height: 64px;
            background: #EDEDED;
            border-radius: 20px;
            border: none;
            margin: 8px 10px;
            outline: none;
            padding: 10px 20px;
            font: 15px Roboto;
        }

        > button {
            background: #2B63FF;
            border-radius: 20px;
            border: none;
            color: #fff;
            outline:none;
            
            width: 552px;
            height: 64px;
            margin: 30px 10px;

            cursor: pointer;
        }
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
`;

export const ContainerRight = styled.div`
    width: 50vw;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    
        .logo{
            margin-bottom: 50px;
        }
 

`;