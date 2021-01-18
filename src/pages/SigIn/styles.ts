import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: #D4E4FD;    

    display: flex;
    flex-direction: column;

    @media(min-width: 800px) {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: row;

      }
`;

export const ContainerLeft = styled.div`
    width: 100vw;

    display:flex;
    flex-direction: column;
    align-items: center;

    .logo{
        display:flex;
        flex-direction: column;
        align-items: center;

        > img {
            width: 50vw;
            margin-top: 30px;
        }
            
    }

    .calendar {
        display:none;    
    }

    @media(min-width: 800px) {
        width: 100vw;
        height: 100vh;

        .logo{
            > img {
                width: 40vw;
                margin-top: 30px;
            }
                
        }
        .calendar {
            display:flex;
            
            >img {
                width: 40vw;
            }
        }
      }
`;

export const ContainerRight = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;

    margin-top: 80px;

    .title{
        color: #000;
        font-size: 30px;
        margin-bottom: 40px;
        
    }

    > form {
        display: flex;
        flex-direction: column;
        align-items:center;

        width: 100%;

        > input{
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
            
            width: 351px;
            height: 64px;
            margin: 30px 10px;

            cursor: pointer;

        }
    }

    > div{
        display: flex;
        flex-direction: column;
        align-items: center;

        > a {
            margin: 10px 10px;
        }
    }

    @media(min-width: 800px) {
      margin-right: 60px;

      }
`;