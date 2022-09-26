import styled from "styled-components";

export const BottomNavigation = styled.div`
    bottom: 0;
    width: 100%;
    position: fixed;
    background-color: gold;
`;

export const BottomNavigationUl = styled.ul`
    display:flex;
    flex-wrap: wrap;
    margin-top: 10px;
    align-items: center;
    padding: 10px 0px;
    justify-content: space-around;
`;

export const BottomNavigationList = styled.li`
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;