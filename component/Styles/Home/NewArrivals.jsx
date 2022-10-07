import styled from "styled-components";

export const NewArrivalCont = styled.section`

    margin-top: 100px;
    position: relative;

    .container .product {
        margin: 10px;
    }
    
    h2{
        margin: 12px;
        font-size: 25px;
        margin-left: 5px;
    }

    .heading-right{
        display: flex;
        margin-top: 20px;
        justify-content: center;
    }
    
    .heading-right span{
        margin-top: 8px;
    }
    
    svg{
        width: 25px;
        color: #363940;
    }

    .heading-right svg{
        width: 8px;
    }


    .container .grid.product{
        display:grid;
        grid-gap: 15px;
        grid-template-columns: repeat(6, 1fr);
    }

    .container .grid.product{
        box-shadow: none;
        background: transparent;
    }

    .box{
        width: 100%;
        overflow: hidden;
        text-align: center;
        border-radius: 10px;
        background-color: #FFb423;
        box-shadow: 1px 1px 1px 1px #363940;
    }

`;
