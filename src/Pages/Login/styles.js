import styled from "styled-components";

export const DivForm = styled.form`
    box-shadow: 1px 0px 10px 1px rgba(0,0,0,0.52);
    background-color: #ffffff;
    height: 80vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    row-gap: 5%;
    span{
        font-size: 0.75rem;
        color: #8F8F8F;
    }
    p{
        color: #535353;
        a{
            text-decoration: none;
            color: blue;
            cursor: pointer;
        }
    }
    .buttons{
        height: max-content;
        width: max-content;
        display: flex;
        column-gap: 15px;
    }


`
export const Button = styled.button`
    cursor: pointer;
    width: max-content;
    padding: 5px 15px;
    height: 100%;
    font-size: 1.4rem;
    text-align: center;
    color: #ffffff;
    background-color: #0494E5;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: #0776B4;
    }
    
`
export const Input = styled.div`
    padding-left: 2%;
    width: 65%;
    height: 6%;
    border: ${(propError) => propError.error ? "1px solid red" : "1px solid #0494E5"};
    border-radius: 20px;
    display: flex;
    align-items: center;
    column-gap: 3%;
    
    input{
        width: 80%;
        height: 90%;
        border: none;
        background-color: transparent;
        color: #535353;
        &:focus{
            border: none;
            outline: none;
        }
    }
`