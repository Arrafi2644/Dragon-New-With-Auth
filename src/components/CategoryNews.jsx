import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';

const CategoryNews = () => {
    const { data } = useLoaderData();
    // console.log(loader.data);
    // console.log(data);
    return (
        <div>
            <h2 className='font-semibold mb-4'>Dragon News Home</h2>
            <div className='flex flex-col gap-8'>
                {
                  data.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;