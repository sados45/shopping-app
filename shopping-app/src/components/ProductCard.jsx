import React, { useContext, useState, useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function ProductCard({ imgUrl, title, rating, price, id }) {
    const [isFav, setIsFav] = useState(false)
    const { favs, addFav, deleteFav, increaseCounter, currentUser } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        // getFavs()
        if (favs.length > 0) {
            const filteredValues = favs.filter(fav => fav.data?.product_id == id);
            filteredValues.length ? setIsFav(true) : setIsFav(false);
        };

    }, [favs])



    return (
        <>
            <div id={id} className="card" style={{ width: '18rem', height: '25rem', padding: '1rem' }}>
                

                <img className="card-img-top" src={imgUrl} alt="Card image cap" style={{ height: '15rem' }} />
                <div className="card-body">
                    <h6 className="card-title">{title.length > 40 ? title.substring(0, 40) + '...' : title}</h6>
                    <div className="d-flex justify-content-center align-items-center">
                        <h6 className='text-center my-2 mr-4'>{price}$</h6>
                    <svg  onClick={increaseCounter} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 mx-4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                    </div>
                    
                </div>
                <div onClick={() => {
                    currentUser ? isFav ? deleteFav(id) : addFav(id) : navigate('/login')
                    setIsFav(!isFav)
                }}>
                    {

                        currentUser && isFav ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                            </svg>
                        )
                            :


                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-balloon-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z" />
                            </svg>



                    }
                </div>
            </div>
        </>
    )
}