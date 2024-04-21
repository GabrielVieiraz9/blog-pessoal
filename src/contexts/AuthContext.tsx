import { createContext, ReactNode, useEffect, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../utils/toastAlerta"
import { useNavigate } from "react-router-dom"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {


    const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
        const storagedUser = sessionStorage.getItem('@App:usuario'); // Alterado para sessionStorage
        if (storagedUser) {
            return JSON.parse(storagedUser);
        }
        return {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        };
    });
    useEffect(() => {
        sessionStorage.setItem('@App:usuario', JSON.stringify(usuario)); // Alterado para sessionStorage
    }, [usuario]);

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Usuário logado com sucesso", 'sucesso')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes", 'erro')
            setIsLoading(false)
        }
    }

    function handleLogout() {
        
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
        sessionStorage.removeItem('@App:usuario'); // Alterado para sessionStorage

    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
