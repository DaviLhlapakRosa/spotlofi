import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import api from '../../src/services/api'
import { apiAuthorization } from '../../src/services/authorization'

import UserContext from '../../src/contexts/user-context'

 
export default function Login() {
    const router = useRouter()

    const { token, setToken } = useContext(UserContext);
  
    useEffect(() => {
        if (router.query.code != undefined) {
            getToken(router.query.code)
        }
    }, [router]);

    async function getToken(code: string | string[]) {
        if (token.length <= 0) {
            let authorization = btoa("ff7278781ceb44bc9f078dd3125b28eb:ae1a0077b898470c81e19e67caf9ab8a");

            let response = await apiAuthorization.post('token', `grant_type=authorization_code&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authorization}`,
                },
            })

            if (response.data.access_token != undefined) {
                setToken(response.data.access_token)
            }
        }

        router.replace("perfil")
    }

    return <></>
}