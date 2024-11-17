import React from 'react';
import Header from './Header';
import RightNavbar from './layoutComponents/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";


const NewsDetails = () => {
    const news = useLoaderData();
    const newsDetails = (news.data[0]);
    const { thumbnail_url, title, details, category_id } = newsDetails;
    // console.log(newsDetails);
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <div className='grid grid-cols-12 gap-6'>
                <section className='col-span-9'>
                    <h2 className='font-semibold mb-4'>Dragon News</h2>
                    <div className="card bg-base-100 border">
                        <figure className="px-10 pt-10 w-full">
                            <img className="w-full rounded-xl"
                                src={thumbnail_url}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${category_id}`} className="btn bg-[#D72050] text-white"> <span><FaArrowLeftLong /></span> All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>

            </div>
        </div>
    );
};

export default NewsDetails;