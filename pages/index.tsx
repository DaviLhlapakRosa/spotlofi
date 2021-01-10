import { authorizationUrl } from '../src/services/authorization';

import { FaSpotify } from 'react-icons/fa'

import { LoginWrapper } from '../styles/pages/home'

export default function Home() {
  
  return (
    <LoginWrapper>
      <h1>Spotlofi</h1>
      <a href={authorizationUrl}><FaSpotify size={25} style={{marginRight: "10px"}}/> Entrar com Spotify</a>
    </LoginWrapper>
  )
}
