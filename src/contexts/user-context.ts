import { createContext } from 'react';

interface ContextProps{
    authorization: string,
    token: string,
    setToken(token: string): void
}

const UserContext = createContext<ContextProps>({
    authorization: "",
    token: "",
    setToken: null
})

export default UserContext;