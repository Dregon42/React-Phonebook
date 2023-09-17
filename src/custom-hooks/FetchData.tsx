import { server_calls } from "../api/server";
import { useEffect, useState } from "react";


export const useGetData = () => {
    const [ contactData, setData ] = useState<string[]>([]);

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount occurs because of the '[]'
    useEffect( () => {
        handleDataFetch();
    }, ) // without '[]' useEffect would occur everytime the component it lives in changes


    return { contactData, getData:handleDataFetch }
}


