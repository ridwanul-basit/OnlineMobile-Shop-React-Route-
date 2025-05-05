import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    return (
        <div>
            <img className='w-full my-5 rounded-2xl  h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl my-3'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn btn-secondary my-5' to={`/category/${news.category_id}`}>Back To Category</Link>
            
        </div>
    );
};

export default NewsDetailsCard;