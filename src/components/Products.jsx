import React, { useEffect, useState } from 'react'
import PorductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function Products() {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    let pages = [];

    useEffect(() => {
        if (data?.length === 0) {
            dispatch(fetchProducts());
        }
    }, [data, dispatch]);

    console.log("Products: ", data?.products);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data?.products?.slice(firstPostIndex, lastPostIndex);

    for (let i = 1; i <= Math.ceil(data?.products?.length / postsPerPage); i++) {
        pages.push(i);
    }
    console.log("pages: ", pages)

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
                                handleClick={() => console.log("first")}
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