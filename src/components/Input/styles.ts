import styled from 'styled-components';

export const InputBlock = styled.div`
    width: 552px;
    height: 64px;
    background: #EDEDED;
    border-radius: 20px;
    border: none;
    margin: 8px 10px;
    outline: none;
    padding: 10px 20px;
    font: 15px Roboto;

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

    svg {
        margin-right: 16px;
    }
`;