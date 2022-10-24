import styled from "styled-components";

export const NavHeader = styled.header`
    height: 8vh;;
    background-color: #363940;
    border-bottom: 2px solid #FFB423;
    box-shadow: -1px 15px 17px -8px rgba(0, 0, 0, 0.521);


    ul{
        display: flex;
        line-height: 2.5vh;
        align-items: center;
        justify-content: center;
    }

    ul li {
        color: #363940;
        font-size: 15px;
        cursor: pointer;
        transition: 0.5s;
        font-weight: 400;
        margin-left: 30px;
        padding: 10px 20px;
        border-radius: 5px;
        border: 2px solid white;
        background-color: #FFB423;
    }

    ul li:hover{
        color: white;
        background-color: #363940;
    }

`;

export const NavCategory = styled.div`
    height: 6vh;
    margin-top: 5px;
    padding: 0 30px;
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid #363940;
    background-color: #FFB423;
    

    span{
        font-size: 30px;
        margin-right: 10px;
    }

    h4{
        font-weight: 500;
        margin-top: 9px;
    }

    h4 svg{
        width: 12px;
        margin-left: 10px;
    }
`;

export const NavLinks = styled.div`

    margin-top: 5px;

    .open{
        display: none;
    }

    ul{
        right: 10px;
        position: absolute;
    }

    @media (max-width:768px) {
       header ul{
            padding-top: 30px;
        }

        .nav-links-MobileMenu{
            top: 0;
            left: 0;
            width: 60%;
            z-index: 888;
            height: 100%;
            display: block;
            position: fixed;
            padding-top: 5em;
            list-style-type: none;
            background-color: #FFB423;
            box-shadow: rgba(50, 50, 93, .23) 0 50px 100px -20px , rgba(0, 0, 0, 10) 0 30px 60px -30px;
        }

        ul li{
            width: 70%;
            border: none;
            padding: 10px;
            overflow: hidden;
            margin-top: 20px;
            line-height: 40px;
            text-transform: uppercase;
            transition: all .5s ease-in-out;
        }

        .link{
            display: none;
        }

        .close,.open{
            top: 35px;
            width: 40px;
            right: 20px;
            padding: 10px;
            display: block;
            color: #363940;
            position: absolute;
            border-radius: 10px;
            background-color: transparent;
        }

        .close svg{
            width: 25px;
        }

        .close{
            top: 45px;
            right: 45%;
            z-index: 888;
        }

        .open{
            top: 17%;
            right: 2%;
            width: 3.5em;
            color: #FFB423;
            backface-visibility: hidden;
        }

        .close .home-btn{
            color: blue;
        }
    }
`;

export const Nav = styled.ul``;

export const NavLi = styled.li``;


