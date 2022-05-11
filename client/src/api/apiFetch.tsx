import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const getFetch = (url: any) => {
   const result = axios.get(url)
    .then(res => {
        // console.log(url, res.data)
        return res.data
    })
    .catch(error => {
        console.log(error)
    })
}

export default getFetch