import styled from 'styled-components';

export const PerfilWrapper = styled.div`
    width: 1000px;
    height: 600px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.alternative};
    border-radius: 5px;
`

export const UserImage = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
`