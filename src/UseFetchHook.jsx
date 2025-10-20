import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    const fetchData = useCallback(async() => {
        setLoading(true)
        setError(null)
        try{
            const response = await fetch(url)
            if(!response.ok){
                throw new Error('Request failed , Try again later')
            }
            const data = await response.json()
            setData(data)
        } catch(err){
            setError(err.message)
        } finally{
            setLoading(false)
        }
    },[url])

    useEffect(() => {
        fetchData()
    },[fetchData])



  return {data,loading,error}
}

export default useFetch;