import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    

    useEffect(() => {
        const dadosStorage = JSON.parse(localStorage.getItem("usuario"))

        if (dadosStorage) {
            setUsuario(dadosStorage.usuario)
            setEmail(dadosStorage.email)
        }
    }, [])

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}