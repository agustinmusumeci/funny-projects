// HOOKS
import { useState, useEffect } from "react";

// AXIOS
import axios from "axios";

function useFetch(url, headers, options) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            setLoading(true)
            axios(url, {headers})
            .then((res) => {
                setData(res.data); 
                setLoading(false);
            })
            
        }, [url]
    )

    return { data , loading }

}

export default useFetch

