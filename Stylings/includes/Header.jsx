import styled from "styled-components";

export const HeaderCont = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1.2rem 0;
    position: relative;
    background: #7e7e10;
    border-bottom: 1px solid #242020;

    @media (max-width:800px){
        display: none;
    }
`;

export const HeaderLeftCont = styled.ul`
    left: 0;
    top: 10px;
    display: flex;
    margin-left: 10px;
    position: absolute;
    align-items: center;
    list-style-type: none;
    justify-content: center;
`;

export const HeaderLeftLink = styled.li`
    display: flex;
    color: white;
    flex-wrap: wrap;
    cursor: pointer;
    align-items: center;
    justify-items: center;
    &:not(:first-child){
        margin-left: 20px;
    }
    svg{
        width: 20px;
        margin-right: 5px;
    }
`;

export const HeaderRightCont = styled.ul`
    top: 10px;
    right: 10px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    align-items: center;
    list-style-type: none;
    justify-content: center;
`;

export const HeaderRightLink = styled.li`
    display: flex;
    color: white;
    flex-wrap: wrap;
    cursor: pointer;
    align-items: center;
    justify-items: center;
    &:not(:first-child){
        margin-left: 20px;
    }
    svg{
        width: 20px;
        margin-right: 5px;
    }
`;