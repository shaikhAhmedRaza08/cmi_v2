import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProducts } from '../redux/featuredProductSlice';
import ProductCard from './ProductCard';
import { cartActions } from '../redux/cartSlice';

function FeaturedProducts() {
    const dispatch = useDispatch();
    const { data: products } = useSelector(state => state.products);
    const { data: featuredProducts } = useSelector(state => state.featuredProducts);

    useEffect(() => {
        if (featuredProducts?.length === 0) {
            dispatch(fetchFeaturedProducts());
        }
    }, [dispatch, featuredProducts]);

    let featured = [];

    featuredProducts?.forEach(item => {
        let foundItem = products.find(product => product.id === item.productId);
        if (foundItem) {
            featured.push(foundItem);
        }
    });

    const addToCart = (product) => dispatch(cartActions.add(product));
    console.log("featuredProducts: ", featuredProducts)
    return (
        <div className="row">
            {
                featured?.map(product => (
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

    )
}

export default FeaturedProducts