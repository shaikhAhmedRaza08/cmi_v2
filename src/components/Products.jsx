import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { cartActions } from '../redux/cartSlice';
import Filters from './Filters';
import CardPlaceHolder from './CardPlaceHolder';
import { filterActions } from '../redux/filterSlice';

function Products() {
    const dispatch = useDispatch();
    const { data: products } = useSelector(state => state.products);
    const material = useSelector(state => state.filters.material);
    const color = useSelector(state => state.filters.color);
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
            <div className="container-fluid">
                <div className="row">
                    <div className='col-2'>
                        <Filters />
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {
                                currentPosts.length === 0 && <CardPlaceHolder />
                            }
                            <div className="d-flex flex-row">

                                {
                                    material &&
                                    <div className="d-inline me-2">
                                        <button type="button" class="btn btn-primary">
                                            {material?.name} <span onClick={() => dispatch(filterActions.setMaterial(null))} class="badge text-bg-secondary">X</span>
                                        </button>
                                    </div>
                                }

                                {
                                    color &&
                                    <div className="d-inline">
                                        <button type="button" class="btn btn-primary">
                                            {color?.name} <span onClick={() => dispatch(filterActions.setColor(null))} class="badge text-bg-secondary">X</span>
                                        </button>
                                    </div>
                                }

                            </div>
                            {
                                currentPosts?.filter(product => (!material && !color) ? product : (product.materialId === material?.id || product.colorId === color?.id) && product).map((product, index) => (
                                    <div className="col-4" key={index}>
                                        <ProductCard
                                            product={product}
                                            buttonTitle="Add to cart"
                                            handleClick={addToCart}
                                            variant="primary"
                                        />
                                    </div>

                                ))
                            }
                        </div>

                        {
                            currentPosts?.filter(product => (!material?.id && !color?.id) ? product : (product.materialId === material?.id || product.colorId === color?.id) && product)?.length > 0 &&
                            <ul className="pagination justify-content-center">
                                {
                                    pages?.map((page, index) => (
                                        <li className={`page-item ${page === currentPage ? 'active' : ''}`} key={index}><button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button></li>
                                    ))
                                }
                            </ul>
                        }

                    </div>
                </div>


            </div>

        </>
    )
}

export default Products