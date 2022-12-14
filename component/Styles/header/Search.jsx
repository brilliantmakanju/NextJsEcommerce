import styled from "styled-components";

export const SearchSection = styled.section`
    display: flex;
    color: white;
    padding: 20px 0;
    align-items: center;
    background-color: #363940;
    border-bottom: 2px solid #FAC30F;

    

    .D_logo{
        width:50px;
        font-size: 2.5em;
        font-weight: 500;
        margin-left: 10px;
        margin-right: 5px;
        color: transparent;
        font-family: QG-Bold;
        -webkit-text-stroke: 1px ;
        -webkit-text-stroke-color: #FAC30F;
    }

    .arb_logo{
        color: #363940;
        letter-spacing: 1px;
        -webkit-text-stroke: 1px ;
        -webkit-text-stroke-color: #FAC30F;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .y_logo{
        font-size: 2.5em;
        margin-top: -10px;
        color: transparent;
        font-family: QG-Regular;
        -webkit-text-stroke: 1px ;
        -webkit-text-stroke-color: #FAC30F;
    }

    .width{
        width: 20%;
    }

    .f_flex{
        align-items: center;
        justify-content: end;
    }

    .active{
        top: 0;
        width: 100%;
        height: 12vh;
        z-index: 1000;
        color: #363940;
        transition: .5s;
        position: fixed;
        background: #FAC30F;
        box-shadow: -1px 12px 24px -11px #000000ae;
    }
`;

export const SearchBox = styled.form`
    width: 80%;
    height: 8vh;
    margin-left: 20vh;
    border-radius: 100px;
    border: 2px solid #FAC30F;

    svg{
        width: 70px;
        opacity: .8;
        color: #FAC30F;
        font-size: 20px;
        padding: 15px 20px;
        text-align: center;
        background-color: #acac09d3;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    input{
        width: 100%;
        padding: 10px;
        outline: none;
        color: #FAC30F;
        font-size: 15px;
        font-weight: 700;
        border-radius: 10px;
        border: 2px solid transparent;
        background-color: transparent;
    }

    input::placeholder{
        font-size: 15px;
    }

    span{
        width: 20%;
        opacity: .9;
        padding: 15px;
        color: white;
        padding-left: 20px;
        background-color: #b9b909d3;
        border-left: 2px solid #FAC30F;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

`;

export const SearchNavIcon = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    .Cart{
        position: relative;
    }

    .Cart span{
        top: -2px;
        right: -5px;
        width: 20px;
        height: 20px;
        color: #FAC30F;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        border: 1px solid white;
        background-color: red;
        transition: .5s ease-in-out;
    }

    li{
        width: 50px;
        height: 50px;
        display: flex;
        padding: .5em;
        color: #363940;
        border-radius: 50%;
        align-items: center;
        background: #FAC30F;
        justify-content:center;
        border: 2px solid white;
        transition: .5s ease-in-out;
    }

    li:not(:first-child){
        margin: 0 20px;
        padding: 0.5em;
    }

    li:not(:first-child) svg{
        width: 500px;
    }

    li:hover{
        color: white;
        background-color: transparent;
    }

    li:hover:not(:first-child) span{
        color: #363940;
        border: 1px solid #363940;
        background-color: #FAC30F;
    }

    button{
        display: none;
    }

    /* li */
`;








