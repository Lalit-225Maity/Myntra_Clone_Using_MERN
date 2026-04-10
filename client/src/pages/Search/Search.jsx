import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Search = ({ search }) => {
    const [searchdata, setsearchdata] = useState([]);
    const [userfilter, setuserfilter] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/search?name=${search}&brand=${search}`);
                console.log(response.data.FindProduct);
                setsearchdata(response.data.FindProduct)


            }
            catch (error) {
                console.log(error.response.data.message);

            }
        })();
    }, [search])
    const {
        register,
        watch
    } = useForm();
    const filterdata = watch("brand");
    useEffect(() => {
        console.log(filterdata);

    }, [filterdata])

    const checkT = [
        { brand: "Urban Threads" },
        { brand: "Modern Fit" },
        { brand: "Street Style" },
        { brand: "Beach Breeze" },
        { brand: "Urban Chic" },
        { brand: "Polo Classics" },
        { brand: "Street Vibes" },
        { brand: "Heritage Wear" },
        { brand: "Winter Basics" },
        { brand: "Everyday Comfort" },
        { brand: "ActiveWear" },
        { brand: "UrbanStyle" },
        { brand: "ChillZone" },
        { brand: "DenimCo" },
        { brand: "CasualLook" },
        { brand: "SportX" },
        { brand: "ExecutiveStyle" },
        { brand: "StreetWear" }
    ];
    return (
        <div className='search'>
            <div className="filter-product">

                {checkT.map((i, index) => (
                    <div className="select-brand">
                        <input type="checkbox" {...register("brand")} value={i.brand} id={index} />
                        <label htmlFor={index}>{i.brand}</label>
                    </div>

                ))}

            </div>
            <div className="serach-product-container">
                {searchdata.length > 0 && searchdata.map((i) => (
                    <div className="pro">
                        <p>{i.brand}</p>
                        <img src={i.images_url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search
