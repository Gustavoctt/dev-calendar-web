import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: #D4E4FD;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 30px;

    .input-create {
        display: flex;
        flex-direction: column;
        align-items: center;

        > label {
            display: flex;
            justify-content: start;
            align-items: center;

           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        > input {
            width: 652px;
            height: 64px;
            background: #EDEDED;
            border-radius: 20px;
            border: none;
            margin: 8px 10px;
            outline: none;
            padding: 10px 20px;
            font-size: 15px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

            display: flex;
            align-items: center;

            & + input{
                margin-top: 8px;
            }
            > input {
                background: transparent;
                border: 0;
                outline: none;
                flex: 1;
            }
        }
    }

`;