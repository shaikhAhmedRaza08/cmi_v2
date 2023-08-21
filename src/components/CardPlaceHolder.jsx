import React from 'react'

function CardPlaceHolder() {
    return (
        <>
            {
                Array.from({ length: 6 }, (_, index) => (
                    <div className="col-4" key={index}>
                        <div className="card my-3 mx-2" aria-hidden="true" style={{ width: "18rem" }}>
                            <div className="card-img-top" style={{ width: '100%', height: '300px', backgroundColor: "gray" }} />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                <button className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></button>
                            </div>
                        </div>
                    </div>

                ))

            }
        </>
    )
}

export default CardPlaceHolder