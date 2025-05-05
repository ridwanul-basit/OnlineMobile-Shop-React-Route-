import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../homeLayOut/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {id} = useParams();
    const [news,setNews] = useState({});

    useEffect(()=>{
        const newsDetails = data.find((singleData) => singleData.id == id);
        setNews(newsDetails);
},[data,id])
    return (
        <div>
            <header className='py-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
            <section className='col-span-9'>
                <h2 className='font-bold'>News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
            
            </main>
           
        </div>
    );
};

export default NewsDetails;