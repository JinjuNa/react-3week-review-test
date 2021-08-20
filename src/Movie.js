import React from 'react';

const Movie = ({title, image, rating, discription}) => {
    return (
        <div className="movie-item">
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>평점 : {rating}</p>
            <p>{discription}</p>
        </div>
    )
}

export default Movie;