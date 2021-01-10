import axios from "axios";

export const authorizationUrl = "https://accounts.spotify.com/authorize?client_id=ff7278781ceb44bc9f078dd3125b28eb&response_type=code&redirect_uri=http:%2F%2Flocalhost:3000/login&scope=user-read-private%20user-read-email%20streaming";

export const apiAuthorization = axios.create({
    baseURL: "https://accounts.spotify.com/api/"
});