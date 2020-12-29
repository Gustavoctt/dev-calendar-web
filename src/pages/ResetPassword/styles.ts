import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #D4E4FD;

    > img {
        margin-bottom: 60px;
    }

    > form {
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
`