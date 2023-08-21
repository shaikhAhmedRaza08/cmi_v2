import React from 'react'

function FilterPlaceHolder() {
    return (
        Array.from({ length: 6 }, (_, index) => (
            <ul className="d-flex flex-column ps-0">
                <p className="placeholder-glow">
                    <span className="placeholder" style={{ width: "30%" }}></span>
                </p>
            </ul>
        ))
    )
}

export default FilterPlaceHolder