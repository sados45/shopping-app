import React, { useState } from 'react';


export default function Input({ selectCategory }) {

    const [category, setCategory] = useState('all');

    return (
        <>
            <form className="input-group mx-auto w-25 d-flex align-items-center mt-4 mb-4"
                onSubmit={(e) => selectCategory(e, category)}
            >
                <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value='all'>All</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value='jewelery'>Jewelery</option>
                    <option value='electronics'>Electronics</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Ara</button>
                </div>
            </form>



        </>
    )
}