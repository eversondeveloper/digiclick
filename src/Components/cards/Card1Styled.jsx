import styled from "styled-components";

export const Card1Styled = styled.div`
    
    height: 300px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    
    
    .card{
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        background-color: #8D61BA;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.244);
        background-image: linear-gradient( rgba(0, 0, 0, 0.008), #0000005f);
        position: relative;
    }

    .card:hover{
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.077);
        width: 280px;
        height: 280px;

    }

    .card a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: solid #00000016;
        border-radius: 20px;
    }

    .card img{
        width: 60%;
        height: 60%;
    }
`