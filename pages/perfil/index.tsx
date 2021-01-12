import { useContext, useEffect, useState } from 'react'
import UserContext from '../../src/contexts/user-context'
import api from '../../src/services/api';

import { PerfilWrapper, UserImage, Sidebar, Content, Player } from '../../styles/pages/perfil'

interface User{
    name: string,
    email: string,
    image: string
}

interface Album{
    image: string,
    artists: Array<string>
}

interface Play{
    title: string,
    album: Album
}

export default function Perfil() {
    const { token } = useContext(UserContext);

    const [user, setUser] = useState<User>(null)
    const [player, setPlaying] = useState<Play>(null)

    useEffect(() => {
        getUserInfo()
        getTrackInfo()
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

        console.log(response.data)
    }

    async function getTrackInfo() {
        let response: any = await api.get("me/player", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        setPlaying({
            title: response.data.item.name,
            album: {
                image: response.data.item.album.images[2].url,
                artists: response.data.item.album.artists.map((artist: any) => {
                    return artist.name
                })
            }
        })

        console.log(response.data)
    }

    if (user == null || player == null) {
        return <p>Carregando Dados ...</p>
    } else {
        return (
        <PerfilWrapper>
            <Sidebar>
                <header>
                    <UserImage src={user.image} alt={user.name}/>    
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </header>
                <Player>
                    <img src={player.album.image} /> 
                    <div>
                        <h2>{player.title}</h2>
                        <p>{player.album.artists.toString()}</p>
                    </div>
                </Player>
            </Sidebar>
            <Content>
                    
            </Content>
        </PerfilWrapper>
    )
    }
    
}