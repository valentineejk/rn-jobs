import { useState, useEffect } from "react";
import axios from "axios";
// import { API_KEY } from "@env";

// const rapidKey = API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query},
        headers: {
            'X-RapidAPI-Key': '259ee7f8acmsh21fe5b2e6f6b7b3p15da8ejsn77ac43d8e04f',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const fetchData = async() => {

        setIsLoading(true);
        try {
            const response = await axios.request(options);

            setData(response.data.data);

        setIsLoading(false)
    } catch (error) {

        setError(error)
        alert('There is an issue with this request')

    } finally {
setIsLoading(false)
    }
}

useEffect(() => {
fetchData()
}, [])


const refresh = () => {
    setIsLoading(true)
    fetchData()
}

return { data, isLoading, error, refresh};
}

export default useFetch;