import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 350px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.alternative};
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 15px;
    }

    a{
        width: 100%;
        height: 50px;
        margin-top: 30px;
        color: #FFF;
        background-color: ${({ theme }) => theme.colors.spotify};
        border-radius: 5px;
        font-weight: bold;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`