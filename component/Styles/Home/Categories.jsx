import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: 23%;
    z-index: 1;
    height: 451px;
    color: #FFb423;
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 5px;
    margin-left: -7.5px;
    background-color: #363940;
    box-shadow: rgb(43 52 69 / 10%) 0 4px 16px;

    img{
        width: 30px;
        height: 30px;
        margin-top: 10px;
        object-fit: contain;
    }

    span{
        margin: 10px 20px;
        text-transform: capitalize;
    }

    .box{
        transition: .5s;
        padding: 0 20px;
    }

    .box:hover{
        color: #363940;
        transform: scale(1.05);
        background-color: #FFb423;
    }
`;


export const CategoryBoxSpan = styled.span`

`;
