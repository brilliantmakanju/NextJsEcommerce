import styled from "styled-components";

export const SliderCardCont = styled.section`

    margin-left: -2em;

    .left button{
        cursor: pointer;
        transition: .5s;
        font-weight: 600;
        margin-left: 20px;
        padding: 13px 40px;
        border-radius: 5px;
        border: 2px solid black;
        background-color: yellow;
        box-shadow: 0px 2px 2px 2px black;
    }

    .left button:hover{
        transform: scale(1.05);
    }

    img{
        width: 100%;
        object-fit: contain;
    }
`;