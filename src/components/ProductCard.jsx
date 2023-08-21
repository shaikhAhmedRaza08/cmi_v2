import React from 'react'

function ProductCard(props) {
    return (
        <div className="card my-3 mx-2" style={{ width: "18rem" }}>
            <img loading='lazy' src={props?.product.image} style={{ width: 'cover', height: 'fit-content' }} className="card-img-top" alt="A muscular model man" />
            <div className="card-body">
                <h5 className="card-title">{props?.product.name}</h5>
                <p className="card-text">INR {props.product.price}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className={`btn btn-${props.variant}`} onClick={() => props.handleClick(props.product)}>{props.buttonTitle}</button>
            </div>
        </div>
    )
}

export default ProductCard