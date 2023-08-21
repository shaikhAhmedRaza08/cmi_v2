import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/cartSlice';
import ProductCard from './ProductCard';

function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const removeCart = (product) => dispatch(cartActions.remove(product.id));

    return (
        <>
            {
                cart.length === 0 &&
                <div className="container text-center">
                    <h1>Your Cart is Empty</h1>
                    <h3 className='text-secondary'>Add items to your cart to continue shopping.</h3>
                </div>
            }
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