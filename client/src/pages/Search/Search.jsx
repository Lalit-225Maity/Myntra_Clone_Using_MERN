import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Search = ({ search }) => {
    const [searchdata, setsearchdata] = useState([]);

    const {
        register,
        watch
    } = useForm();
    const filterdata = watch("brand");
    useEffect(() => {
        (async () => {
            try {
                if (filterdata && filterdata.length > 0) {
                    const response = await axios.get(`/api/filter?brand=${filterdata}`);
                     console.log(response.data.findProduct)
                     console.log(filterdata);
                     
                    setsearchdata(response.data.findProduct)
                }
                else {
                    const response = await axios.get(`/api/search?name=${search}&brand=${search}`);
                    console.log(response.data.FindProduct);
                    setsearchdata(response.data.FindProduct)
                }


            }
            catch (error) {
                console.log(error.response.data.message);

            }
        })();
    }, [search, filterdata])




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
                       <img src={i.images_url} alt="" />
                        <p>{i.brand}</p>
                        <p>{i.name}</p>
                         <p>Rs.{Math.ceil((i.price)*10)}</p>
                         <p>{Math.ceil((i.price)*10)+Math.floor((i.discountPrice)*10)}</p>
                         <p>Rs.{Math.floor((i.discountPrice)*10)}Off.</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search
