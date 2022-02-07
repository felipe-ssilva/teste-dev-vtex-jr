import React, { ReactNode, useEffect } from "react";
import { toast } from "react-toastify";
import { FirebaseAuth } from "../../Firebase/Initial";
import { useUserCoontext } from "../../Providers/UserProvider";
import { ContainerModal } from './Styles';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ModalOptionsUser:React.FC<ReactNode> = (props):JSX.Element => {

    const width = window.innerWidth;
    const { userState: { openMenuUser } } = useUserCoontext();
    const navigate = useNavigate();

    useEffect(() => {}, [openMenuUser]);

    const handleCompras = () => toast("Função não disponível no momento.", {type: "info"}); 

    const handleLogOut = (): void => {
        signOut(FirebaseAuth).then(() => {
            localStorage.clear();
            navigate("/login", {replace: true});
        }).catch((error) => {
            toast("Algo de errado aconteceu, tente novamente mais tarde!", {type: "error"})
        })
    }

    if(openMenuUser) {
        return (
            <ContainerModal width={width}>
                <span onClick={handleCompras} className="__item-data">Minhas Compras</span>
                <span onClick={handleLogOut} className="__item-data">Sair</span>
            </ContainerModal>
        );
    }

    return (
        <React.Fragment></React.Fragment>
    );
}


export { ModalOptionsUser }