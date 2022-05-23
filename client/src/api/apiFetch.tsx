import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const getFetch = async (url: any) => {
   const result: any = await axios.get(url)
    .then(res => {
        // console.log(url, res.data)
        return res.data
    })
    .catch(error => {
        console.log(error)
        return error
    })
    
    return result
}

export default getFetch