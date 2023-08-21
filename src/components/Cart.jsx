import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/cartSlice';
import ProductCard from './ProductCard';

function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    console.log("cart", cart)
    const removeCart = (product) => dispatch(cartActions.remove(product.id));

    return (
        <>
            <div className="row">
                {
                    cart?.map(product => (
                        <div className="col-4">
                            <ProductCard
                                key={product.id}
                                product={product}
                                buttonTitle="Remove item"
                                handleClick={removeCart}
                                variant="danger"
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart