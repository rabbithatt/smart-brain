import styled from 'styled-components';

export const Nav = styled.h3`
    margin: 2rem;
    display: flex;
    justify-content: flex-end;
    letter-spacing: .1rem;
    text-decoration: underline white;
    cursor: pointer;
    &:hover {
        color: #000;
        text-decoration: underline black;
    }
`;



export const Logo = styled.div`
    background: linear-gradient(89deg, #FF5DEF 0%, #04C8DE 100%);
    display: flex;
    width: 12rem;
    height: 10rem;
    margin: 8rem;
    justify-content: center;
    align-content: center;

    img{
        width: 80%;
        height: 80%;
        transition: all 0.3s ease-out;
    }

    img:hover {
        transform: rotate(-20deg);
        perspective: 1000px;
        transform-style: preserve-3d;
    }
`;





