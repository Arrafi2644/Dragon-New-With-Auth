import React from 'react';
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, image_url, details, others_info } = news;
  // console.log(news);

  return (
    <div className="rounded-lg space-y-3 shadow-lg border border-gray-200 bg-white overflow-hidden">
      {/* Author and Date */}
      <div className="flex items-center p-4">
        <img className="w-10 h-10 rounded-full" src={author.img} alt={author.name} />
        <div className="ml-3">
          <h5 className="font-bold text-gray-800">{author.name}</h5>
          <p className="text-sm text-gray-500">{author.published_date}</p> {/* Displaying raw published date */}
        </div>
        <div className="ml-auto flex space-x-2 text-gray-500">
          <button className="text-lg hover:text-gray-700" onClick={() => console.log('Bookmark clicked')}>
            <FaRegBookmark />
          </button>
          <button className="text-lg hover:text-gray-700" onClick={() => console.log('Share clicked')}>
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title and Thumbnail */}
      <h3 className="px-4 font-bold text-lg text-gray-900">{title}</h3>
      <img
        src={image_url}
        alt={title}
        className="w-full px-4 object-cover rounded-lg my-2 mx-auto"
      />


      {/* Details */}
      <p className="px-4 pt-6 text-gray-700 text-sm line-clamp-2">{details}</p> {/* Using line-clamp for truncation */}
      <div className="px-4">
        <Link to={`/news/${news._id}`} className="text-orange-500 cursor-pointer">Read More</Link>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-200" /> {/* Horizontal divider with 16px gap */}

      {/* Ratings and Views */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center text-orange-500">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={index < rating.number ? '' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-sm font-medium text-gray-600">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1 text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
