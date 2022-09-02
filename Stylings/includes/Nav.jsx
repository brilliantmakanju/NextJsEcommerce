import styled from "styled-components";

/////---------------Nav Container----------------////////////////

export const NavCont = styled.nav`
    width: 100%;
    display: flex;
    color: yellow;
    flex-wrap: wrap;
    padding: 2.5rem 0;
    position: relative;
    align-items: center;
    background: black;
    padding-bottom: 4.5rem;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 2px 1px 1px black;
`;
/////---------NavTop Container------------///////////////////

export const NavTopCont = styled.div`
    top: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    overflow: hidden;
    position: absolute;
    align-items: center;

    
    @media (max-width:800px){
        top: -.5vh;
        padding: 0 10px;
    }
    
    @media (max-width:400px){
        top: 1.5vh;
        padding: 0 10px;
    }
`;

//////--------------Nav Top Logo---------------/////////////////

export const NavTopLogo = styled.h3`
    font-size: 8vh;
    margin-top: -2.5px;
    font-family: QwitcherGrypen-Bold;

    @media (max-width:800px){
        font-size: 6vh;
    }
`;

/////---------------Nav Top Search Container----------------////////////////

export const NavTopSearch = styled.form`
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    overflow: hidden;
    color: #7e7e10;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;

    svg{
        width: 5vh;
        z-index: 9;
        font-size: 30px;
        cursor: pointer;
        padding: 10px 10px;
        margin-right: -40px;
        border-radius: 100px;
        /* border: 1px solid gray; */
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    @media (max-width:800px){
        display: none;
    }
`;

/////---------------Nav Top Search Input----------------////////////////

export const NavTopSearchInput = styled.input`
    width: 100vh;
    outline: none;
    font-size: 1rem;
    color: white;
    font-weight: 600;
    padding: 10px 5px;
    padding-left: 50px;
    border-radius: 100px;
    border: 2px solid yellow;
    background-color: transparent;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    &:placeholder-shown{
        font-size: 1rem;
        color: yellow;
        font-weight: bolder;
    }
`;

/////---------------Nav Top Search Button----------------////////////////

export const NavTopSearchBtn = styled.input`
    z-index: 9;
    width: 15vh;
    outline: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px 5px;
    border-radius: 100px;
    background: transparent;
    border: 2px solid yellow;
    border-top-left-radius: 0;
    backface-visibility: hidden;
    transition: .5s ease-in-out;
    border-bottom-left-radius: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    /* &:hover{
        transform: skewY(2deg) translateY(2px);
    } */


`;

/////---------------Nav Mobile Toggle Lines---------------////////////////

export const NavMobileLine1 = styled.div`
    width: 35px;
    height: 2px;
    background: yellow;
    transition: .5s ease-in-out;
`;

export const NavMobileLine2 = styled.div`
    width: 35px;
    height: 2px;
    margin-top: 5px;
    background: yellow;
    transition: .5s ease-in-out;
`;

export const NavMobileLine3 = styled.div`
    width: 35px;
    height: 2px;
    margin-top: 5px;
    background: yellow;
    transition: .5s ease-in-out;
    
`;

/////---------------Nav Mobile Toggle  Cont----------------////////////////

export const NavMobileToggle = styled.div`
    display: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 10px 5px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid yellow;
    
    
    @media (max-width:800px) {
        top: -5px;
        right: 35px;
        display: flex;
        overflow: hidden;
        position: absolute;
        
    }

`;

/////---------------Nav Mobile Open Container----------------////////////////

export const NavMobileToggleViews = styled.div`
    left: 0;
    width: 0;
    opacity: 0;
    height: 110%;
    color: black;
    cursor: pointer;
    position: fixed;
    overflow: hidden;
    align-items: center;
    background: yellow;
    flex-direction: column;
    justify-content: center;
    transition: .5s ease-in-out;
    border: 1px solid transparent;

`;

/////---------------Nav Top Help Links Container----------------////////////////

export const NavTopLinkCont = styled.ul`
    display: flex;
    margin-top: 10px;
    align-items: center;
    list-style-type: none;
    justify-content: center;

    //Help Link Icon

    svg{
        width: 15px;
    }

    @media (max-width:800px){
        right: 10px;
        position: absolute;
    }
    
`;

/////---------------Nav Top Help Links ----------------////////////////

export const NavTopLink = styled.li`
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    border-radius: 100px;
    border: 1px solid yellow;
    justify-content: center;
    background-color: black;

    &:not(:first-child){
        margin-left: 20px;
    }

`;

/////---------------Nav Top Red Dot ----------------////////////////

export const NavTopLinkDot = styled.div`
    top: 0px;
    right: 0px;
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    background-color: red;
    border: 1px solid yellow;
`;

/////---------------Nav Down  Container----------------////////////////

export const NavDownCont = styled.div`
    width: 100%;
    bottom: -1vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 1rem 50px;
    padding-top: .5rem;
    position: absolute;
    align-items: center;
    /* background-color: blue; */

    svg{
        width: 20px;
        margin-bottom: -5px;
    }

    /* svg:nth */
    svg:nth-child(2){
        width: 12px;
        margin-bottom: -1.5px;
    }
`;

//////////////-------Nav Category view---------////////////////////

export const NavDownCategory = styled.div`
    color: yellow;
    font-size: 1rem;
    padding: 5px 15px;
    border-radius: 2px;
    text-align: center;
    font-weight: bolder;
    background: black;
    border: 1px solid white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

////---------- Nav Help Link Container-------------------////////////////

export const NavDownHelpLinkCont = styled.ul`
    right: 20px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-start;

    @media (max-width:800px){
        display: none;
    }
`;

////---------- Nav Help Links-------------------////////////////

export const NavDownHelpLinks = styled.li`
    display: flex;
    color: black;
    margin-left: 30px;
    padding: 5px 15px;
    border-radius: 5px;
    align-items: center;
    background: yellow;
    flex-direction: column;
    justify-content: center;
    border: 1px solid transparent;
    transition: .5s ease-in-out;

    &:hover{
        color: yellow;
        background: black;
        border: 1px solid yellow;
    }


`;

////---------- Nav Categories List Container-------------------////////////////

export const NavDownCategoryCont = styled.ul`
    display: flex;
    margin-left: 30px;
    flex-direction: column;
`;

////---------- Nav Categories List-------------------////////////////

export const NavDownCategoryList = styled.li`
    font-size: 1rem;
    padding: 10px 10px;
`;

