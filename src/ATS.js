import {React, useEffect} from 'react'
import axios from "axios"

export const ATS = () => {
    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5152/todolists`)
            getCategory(r.data)
        }
        fetch()
    }, [])
}

    const onHandleSelectoption = async () => {
        let result = await axios.get(`http://localhost:5152/todolists`)
        getCategory(result.data)
    return (
    <div></div>
  )
}
