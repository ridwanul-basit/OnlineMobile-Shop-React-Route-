import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
    others
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border rounded-xl overflow-hidden p-3">
      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt="News Thumbnail" className="w-full  object-cover" />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <h2 className="card-title text-xl font-bold">
          {title}
          {rating.badge && (
            <span className="badge badge-success text-xs capitalize">{rating.badge}</span>
          )}
        </h2>

        {/* Author + Date */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), 'MMM d, yyyy')}
            </p>
           
            
          </div>
        </div>

        {/* Details */}
        <p className="text-sm text-gray-700">
          {details.length > 200 ?  <>{details.slice(0, 200)}...<Link to={`/news-details/${id}`} className='text-primary font-bold'>Read More</Link></> : details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: Views and Rating */}
        <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
          <span>👁️ {total_view} views</span>
          <span>⭐ {rating.number}/5</span>
        </div>

        {/* Pick/Trending Badges */}
        <div className="mt-2 flex gap-2">
          {others.is_today_pick && <div className="badge badge-info">Today's Pick</div>}
          {others.is_trending && <div className="badge badge-warning">Trending</div>}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
