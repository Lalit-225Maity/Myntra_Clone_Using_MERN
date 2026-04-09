import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Search = ({ search }) => {
    const [searchdata, setsearchdata] = useState([])
    useEffect(() => {
       (async()=>{
        try {
            const response=await axios.get(`/api/search?name=${search}`);
            console.log(response.data.FindProduct);
            setsearchdata(response.data.FindProduct)
            

        } catch (error) {
            
        }
       })()
    }, [search])
    
    return (
        <div className='search'>
        {searchdata.length>0&&searchdata.map((i)=>(
           <div className="pro">
            <p>{i.brand}</p>
             <img src={i.images[1].url} alt="" />
           </div>
        ))}
        </div>
    )
}

export default Search
