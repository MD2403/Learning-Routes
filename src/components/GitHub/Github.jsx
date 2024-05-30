import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/md2403')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })
  return (
    <div className='text-center m-5 bg-gray-600 text-white p-5 text-3xl'>Github Followers: {data.followers}
    <img className='flex rounded-2xl'
    src={data.avatar_url} alt="Git picture" width={300} /></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/md2403')
    return response.json()
}