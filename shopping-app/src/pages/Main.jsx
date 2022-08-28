import React, { useState } from 'react'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { data } from '../data'

export default function Main() {
    const [totalData, setTotalData] = useState(data);

    const selectCategory = (e, category) => {
        e.preventDefault();
        if (category != 'all') {
            let filteredArray = data.filter((el) => el.category == category)
            setTotalData(filteredArray)
        } else {
            setTotalData(data)
        }

    }
    return (
        <>
            <Input
                selectCategory={selectCategory}
            />
            <div className='card-container container'>
                {totalData.map((el) => <ProductCard
                    imgUrl={el.image}
                    title={el.title}
                    rating={el.rating}
                    price={el.price}
                    id={el.product_id}
                />)}
            </div>
        </>
    )
}
Footer
© 2022 GitHub, Inc.
Footer navigation
