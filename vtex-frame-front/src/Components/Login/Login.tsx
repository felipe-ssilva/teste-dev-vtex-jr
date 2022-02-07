import React, { ReactNode, useEffect } from "react";
import { MainContainer } from "../../Assets/Styles/MainStyles";
import { ButtonGoogle, ContainerCenter, ContainerLogin } from "./Styles";
import { GoogleAuthProvider, signInWithPopup, UserCredential, AuthProvider } from "firebase/auth";
import { FirebaseAuth } from "../../Firebase/Initial";
import { _LocalStorage } from "../../Static/LocalStorage";
import { toast } from "react-toastify";
import { useUserCoontext } from "../../Providers/UserProvider";
import { PopPupInitialUpdate } from "../../Static/Data/InitialDataUserContext";
import { useNavigate } from "react-router-dom";

const GoogleProvider = new GoogleAuthProvider();

const LoginComponent:React.FC<ReactNode> = (props):JSX.Element => {

    const { userDispatch } = useUserCoontext();
    const navigate = useNavigate();

    const generatePopUp = (provider: AuthProvider) => {
        signInWithPopup(FirebaseAuth, provider)
        .then((result: UserCredential) => {
            console.log(result)
            
            
            let credential = GoogleAuthProvider.credentialFromResult(result);
            
            if(credential && typeof credential!.accessToken !== "undefined") {
                
                localStorage.setItem(_LocalStorage.__accessToken, credential.accessToken);

                userDispatch({
                    type: "UPDATE-INITIAL-LOGIN",
                    payload: {
                        user: result.user,
                        token: credential.accessToken,
                        isAuth: true,
                    } as PopPupInitialUpdate
                });

                navigate('/', {replace: true});

            } else {
                toast("Um token não foi gerado, tente novamente.", {type: "warning", theme: "dark"});
            }            
    
        }).catch((error) => {console.log(error)});
    }

    const handleGooglePopUp = (): void => generatePopUp(GoogleProvider);

    useEffect(() => {
        const unsubscribe =  FirebaseAuth.onAuthStateChanged(user => {
       
            if (user) {
                
                userDispatch({
                    type: "UPDATE-INITIAL-LOGIN",
                    payload: {
                        user: user,
                        token: localStorage.getItem(_LocalStorage.__accessToken),
                        isAuth: true,
                    } as PopPupInitialUpdate
                });

                navigate('/', {replace: true});
        
                return () => {
                    unsubscribe()
                }
            }
        });
      }, [navigate, userDispatch]);
 
    return (
        <MainContainer>
            <ContainerCenter>
                <ContainerLogin>
                    <div className="__header_login">
                        <span className="__title_login">Login</span>
                        <span className="__title_description">Seja muito bem vindo ao projeto de teste da Framework, esse projeto vai te mostrar algumas das minhas habilidades. Entre com a sua conta!!</span>
                    </div>

                    <ButtonGoogle onClick={handleGooglePopUp}>
                        <span className="__icon_google" />
                        <span className="__texto_login">Entre com o Google</span>

                    </ButtonGoogle>
                </ContainerLogin>
            </ContainerCenter>
        </MainContainer>
    );
}

export { LoginComponent }