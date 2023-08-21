import React, { useEffect, useState } from 'react'
import PorductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';
import { Link, useOutletContext } from 'react-router-dom';
import { cartActions } from '../redux/cartSlice';

function Products() {
    const dispatch = useDispatch();
    const { data: products } = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    let pages = [];

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products?.slice(firstPostIndex, lastPostIndex);

    for (let i = 1; i <= Math.ceil(products?.length / postsPerPage); i++) {
        pages.push(i);
    }

    const addToCart = (product) => dispatch(cartActions.add(product));

    return (
        <>
            <div className="row">
                {
                    currentPosts?.map(product => (
                        <div className="col-4">
                            <ProductCard
                                key={product.id}
                                product={product}
                                buttonTitle="Add to cart"
                                handleClick={addToCart}
                                variant="primary"
                            />
                        </div>

                    ))
                }
            </div>

            <ul className="pagination justify-content-center">
                {
                    pages?.map((page, index) => (
                        <li className={`page-item ${page === currentPage ? 'active' : ''}`} key={index}><button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button></li>
                    ))
                }
            </ul>
        </>
    )
}

export default Products