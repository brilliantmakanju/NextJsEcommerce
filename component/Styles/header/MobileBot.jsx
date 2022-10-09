import styled from "styled-components";

export const BottomNavigation = styled.div`
    bottom: 0;
    width: 100%;
    z-index: 999;
    display: none;
    position: fixed;
    background-color: #FAC30F;
    border-top-left-radius: 5px ;
    border-top-right-radius: 5px ;

    @media (max-width:768px) {
        display: block;
    }
`;

export const BottomNavigationUl = styled.ul`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    `;

export const BottomNavigationList = styled.li`
    display:flex;
    color: #353535;
    position: relative;
    padding: 20px 20px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    transition: .5s ease-in-out;
    
    


    svg{
        width: 25px;
    }
`;