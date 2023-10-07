import React from 'react'

const Card = ({book, navigate}) => {
    return (
        <figure onClick={()=>navigate(book.title)}>
            <img src={book.cover} alt={book.title} />
        </figure>
    )
}

export default Card