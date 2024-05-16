import { useEffect, useState } from "react";

export default function useJsonFetch(url, target) {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(url + target)
        .then(res => {
            if (!res.ok) {
                setError(res.status)
            }

            return res.json();
        })
        .then(resData => {
            setData(resData);
            setLoading(false);
        })
    }, [url, target]);

    return [data ? data.status : '', error, loading];
}