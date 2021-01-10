import { useEffect } from 'react';
import { useRouter } from 'next/router'
import api from '../../src/services/api'
import { apiAuthorization } from '../../src/services/authorization'
 
export default function Login() {
    const router = useRouter()
  
    useEffect(() => {
        console.log(router.query)  
        
        if (router.query.code != undefined) {
            getPlaylists(router.query.code)
        }
    }, [router]);

    async function getPlaylists(code: string | string[]) {
        let authorization = btoa("ff7278781ceb44bc9f078dd3125b28eb:ae1a0077b898470c81e19e67caf9ab8a");

        let response = await apiAuthorization.post('token', `grant_type=authorization_code&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authorization}`,
            },
        })
        // let response = await api.get(`users/${code}/playlists`)
        console.log(response)
    }
    
    return <h1>Login</h1>
}