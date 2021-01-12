import { useContext, useEffect, useState } from 'react'
import UserContext from '../../src/contexts/user-context'
import api from '../../src/services/api';

import { PerfilWrapper, UserImage } from '../../styles/pages/perfil'

interface User{
    name: string,
    email: string,
    image: string
}

export default function Perfil() {
    const { token } = useContext(UserContext);
    const [user, setUser] = useState<User>(null)

    useEffect(() => {
        getUserInfo()
    }, [])
    
    async function getUserInfo() {
        let response: any = await api.get("me", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setUser({
            name: response.data.display_name,
            email: response.data.email,
            image: response.data.images[0].url
        })
    }

    return (
        <>
            {(user == null) ? (
                <p>Carregando</p>
            ) : (
                <PerfilWrapper>
                    <UserImage src={user.image} alt={user.name}/>    
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </PerfilWrapper>
            )}
        </>
    )
}