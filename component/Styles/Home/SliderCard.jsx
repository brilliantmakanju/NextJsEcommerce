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
        border: 2px solid #363940;
        background-color: #FFb423;
        box-shadow: 0px 2px 2px 2px #363940;
    }

    .left button:hover{
        transform: scale(1.05);
    }

    img{
        width: 100%;
        object-fit: contain;
    }
`;