import styled from "styled-components";

export const PhoneStoreCont = styled.section`
    margin-top: 100px;

    .heading-right{
        display: flex;
        justify-content: center;
    }
    
    .heading-right span{
        margin-top: 8px;
    }
    
    svg{
        width: 25px;
        color: black;
    }

    .heading-right svg{
        width: 8px;
    }

    img{
        width: 10%;
    }

    span{
        margin-top: 5px;
        margin-left: 4px;
    }

    .container .box{
        margin: 30px;
        margin-left: 10px;
        margin-bottom: 10px;
    } 
    
    .category{
        width: 25%;
        height: 90vh;
        padding: 30px;
        color: white;
        overflow: hidden;
        border-radius: 5px;
        background: black;
    }

    .category .chead h1{
        font-size: 20px;
        margin-bottom: 20px;
    }

    .category .chead h1:nth-child(2){
        opacity: 0.5;
        padding-left: 70px;
        border-left: 3px solid rgba(255, 255, 0, 0.753);
    }

    .category .box{
        margin: 15px 0;
        color: black;
        transition: .5s;
        padding:5px 10px;
        border-radius: 5px;
        background: yellow;
    }

    .category .box:hover{
        color: black;
        cursor: pointer;
        background: white;
        transform: scale(1.1);
        box-shadow: 0px 0px 0px 2px yellow;
    }

    .category .box2{
        margin-top: 20px;
    }

    .category button{
        padding: 10px;
        color: black;
        font-size: 17px;
        font-weight: 500;
        background: none;
        text-align: center;
    }

    .contentWidth{
        margin-left: 25px;
    }


    .product-content.d_flex {
        flex-wrap: wrap;
    }

    .product-content.d_flex .box{
        margin: 0;
        width: 25%;
    }

    .rate{
        width: 10em;
        margin: 0 5px;
        margin-left: -5px;
    }

    .rate svg{
        width: 20px;
    }

    .product{
        transition: .5s;
    }

    .product:hover{
        transform: scale(1.05);
    }

`;
