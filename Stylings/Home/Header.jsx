import styled from "styled-components";

//-----------------------Header Banner Container---------------------------//

export const HeaderBannerCont = styled.div`
    height: 77vh;
    display: flex;
    background: yellow;

    @media (max-width:800px) {
        height: 40vh;
    }

    @media (max-width:500px) {
        height: 88vh;
    }
`;

//-----------------------Header Category Container---------------------------//

export const HeaderCategoryContainer = styled.div`
    width: 20%;
    height: 74.8vh;
    display: flex;
    margin-top: 9px;
    margin-left: 20px;
    overflow-y: scroll;
    background: #7e7e10;
    flex-direction: column;
    border-left: 12px solid #5e5e12 ;
    box-shadow: -0px 2px 3px 5px black;

    @media (max-width:800px) {
        height: 0;
        opacity: 0;
    }

`;

//-----------------------Header Category List---------------------------//

export const HeaderCategoryType = styled.ul`
    padding: 2.5px 0;
    display: flex;
    list-style-type: none;
    flex-direction: column;

    img{
        width: 25px;
        object-fit: cover;
        margin-right: 15px;
    }
`;

//-----------------------Header Category Lists---------------------------//

export const HeaderCategoryList = styled.ul`
    /* background: red; */
    display: flex;
    font-weight: 500;
    padding: 10px 20px;
    align-items: center;
    text-transform: capitalize;
    transition: .5s ease-in-out;

    &:not(:first-child){
        margin-top: 1px;
    }

    &:hover{
        color: black;
        background: yellow;
    }

`;


//-----------------------Header Banners Container---------------------------//

export const HeaderBannersCont = styled.ul`
    width: 160vh;
    height: 75vh;
    display: flex;
    margin-top: 10px;
    margin-left: 2vh;
    font-weight: 500;
    /* background: #5e5e12; */
    text-transform: capitalize;
    box-shadow: 2px -0px 3px 2px black;
    
    @media (max-width: 800px) {
        width: 99.1%;
        margin-top: 0px;
        margin-left: -15.5vh;
    }

`;




