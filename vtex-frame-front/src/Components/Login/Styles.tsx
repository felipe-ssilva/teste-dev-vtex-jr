import styled from 'styled-components';
import bgImage from '../../Assets/bg.png';


const ContainerCenter = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bgImage});
    background-size: cover;
`;

const ContainerLogin = styled.div`
    width: 30%
    height: 400px;
    padding: 20px;
    border-radius: 20px;
    background: #fafafa0;
    backdrop-filter: blur(20px);
    box-shadow: 0px 3px 50px 0px rgba(0,0,0,.09);

    .__header_login{
        display:flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        justify-content: center;
    }

    .__separator{
        width: 36%;
        height: 2px;
        background: #dbdbdb6c; 
    }

    .__title_login{
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        color: #ffffff;
        font-weight: bold;
    }
    .__title_description {
        font-family: 'Nuninto', sans-serif;
        font-size: 0.8rem;
        color: #bbbbbb;
        max-width: 300px;
        text-align: center;
        display: inline-block;
        margin-top: 10px;
    }
`;


const ButtonGoogle = styled.button`
    display: inline-block;
    background: #ffffff;
    color: #000000;
    border: none;
    width: 100%;
    height: 40px;
    cursor: pointer;
    margin: 20px 0px;
    border-radius: 5px;
    white-space: nowrap;    
    
    .__texto_login {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        font-family: 'Nunito', sans-serif;
    }

    .__icon_google {
        background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png) transparent no-repeat;
        display: inline-block;
        vertical-align: middle;
        width: 35px;
        height: 60%;
        background-size: contain;
    }
`;


export { ContainerCenter, ContainerLogin, ButtonGoogle}