import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { replaceHyphenWithSpace } from '../../utils/stringsUtils';
import { getBookByTitle } from '../../services/booksService';
import './details.scss';

const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [bookDetails, setBookDetails] = useState(null);
    const title = replaceHyphenWithSpace(name);

    const getBookDetails = useCallback(() => {
        getBookByTitle(title).then(({ book }) => {
            console.log(book);
            setBookDetails(book)
        });
    }, [])

    useEffect(() => {
        // getBookByTitle(title).then(({book})=>{
        //     console.log(book);
        //     setBookDetails(book)
        // })
        getBookDetails();
    }, [getBookDetails])

    const navigateToBack = () => navigate(-1)

    return (
        <main className='bookDetails'>
            {
                bookDetails ? (
                    <article className='box'>
                        <button className='close' onClick={navigateToBack}>X</button>
                        <h1>{bookDetails.title}</h1>
                        <h3>{`ISBN: ${bookDetails.ISBN}`}</h3>
                        <section className='box__info'>
                            <figure className='box__figure'>
                                <img src={bookDetails.cover} alt={bookDetails.title} />
                            </figure>
                            <p>{bookDetails.synopsis}</p>
                        </section>
                        <div className='box__author'>
                            <span>Autor:</span>
                            <span>{bookDetails.author.name}</span>
                        </div>
                        <div className='box__genre'>
                            <span>{bookDetails.genre}</span>
                            <span>{bookDetails.year}</span>
                        </div>
                        {
                            bookDetails.author.otherBooks && bookDetails.author.otherBooks.length ? (
                                <div className='box__otherBooks'>
                                    <h5>Otros libros</h5>
                                    <section>
                                        {
                                            bookDetails.author.otherBooks.map((item, index) =>
                                                <span key={index}>{item}</span>)
                                        }
                                    </section>
                                </div>
                            ) : (<></>)
                        }
                    </article>
                ) : (
                    <div>...Cargando</div>
                )
            }
        </main>
    )
}

export default Details