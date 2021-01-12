import styled from 'styled-components';

export const PerfilWrapper = styled.main`
    width: 1000px;
    height: 600px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.alternative};
    border-radius: 5px;

    display: flex;
`

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 300px;
    height: 100%;

    > header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        margin-top: 20px;
    }

    & > p{
        color: ${({ theme }) => theme.colors.secundary};
    }
`

export const UserImage = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
`

export const Player = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;

    img{
        border-radius: 4px;
        margin-right:10px;
    }
    
    > div{
        width: 100%;
        height: 100%;
    }

    h2{
        color: #FFF;
        font-size: 20px;
    }

    p{
        color: #CBCBCB;
        font-size: 16px;
    }
`

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: calc(100% - 300px);
    height: 100%;
`