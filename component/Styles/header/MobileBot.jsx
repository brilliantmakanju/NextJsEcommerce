import styled from "styled-components";

export const BottomNavigation = styled.div`
    bottom: 0;
    width: 100%;
    display: none;
    z-index: 999;
    position: fixed;
    background-color: #FAC30F;
    display: none;

    @media (max-width:768px) {
        display: block;
    }
`;

export const BottomNavigationUl = styled.ul`
    display:flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 5px 0px;
    align-items: center;
    justify-content: space-around;
    `;

export const BottomNavigationList = styled.li`
    display:flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;