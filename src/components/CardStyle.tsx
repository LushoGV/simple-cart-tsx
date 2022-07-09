import styled from 'styled-components'

export const CardStyle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 8px;
    
    & img{
        width: 100%;
        object-fit: contain;
    }

    & h2{
        font-weight: 500;
        font-size: 20px;
    }
    
    & p{
        color: gray;
    }
    
    & section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & section p{
        font-weight: 500;
        color: black;
    }
`