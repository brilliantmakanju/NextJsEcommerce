import styled from "styled-components";

export const FlashyImg = styled.div`
    top:0;
    width: 100%;
    left: -40px;
    height: 10.9rem;
    position: absolute;
    padding-right: 270px;
    /* background-image:url(${props => props.flashimg}); */


    #flashImgS{
        width: 37%;
        height: 85%;
        /* height: 12em; */
        /* margin: auto; */
        margin-top: calc(25px);
        margin-left: 67px;
        /* object-fit: cover; */
    }
`;

export const FlashyColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 100px;
    margin-left: 3px;
    background:${props => props.colors};
`;

export const FlashyColorCont = ({ colors }) => {

    return (
        <FlashyColor colors={colors} />
        // </FlashyColor>
    )
}

export const FlashyImgCont = ({ flashimg, flashAlt }) => {

    return (
        <FlashyImg flashimg={flashimg}>
            <img id="flashImgS" src={flashimg} alt={flashAlt} />
        </FlashyImg>
    )
}


export const DicountCont = styled.section`

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

    .container .product{
        box-shadow: none;
        background: transparent;
    }

    .box{
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        border: 1px solid #363940;
        background-color: #FFb423;
        box-shadow: 0px 0px 1px 1px #363940;
    }

    .box:hover{
        cursor: pointer;
    }

    .info{
        display: flex;
        color: white;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        background-color: #363940;
        justify-content: space-between;
    }

    .info h4{
        font-size: 15px;
        line-height:1em;
        font-weight: 500;
        text-align: center;
    }

    .info span{
        font-weight: 300;
        font-style: italic;
    }

    .info2{
        top: 30px;
        right: 25px;
        padding: 10px;
        color: #f3f3e5;
        font-weight: 500;
        position: absolute;
        background: #363940;
        border-radius: 100px;
    }

`;
