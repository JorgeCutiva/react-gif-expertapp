import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGird } from './GifGird';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setcategories([...categories, 'HunterXHunter'])
    //     setcategories( catg => [...catg, 'HunterxHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGird
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
export default GifExpertApp;