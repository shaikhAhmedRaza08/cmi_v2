import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
// import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
// import { store } from '../redux/store'
import Filters from './Filters'
import { fetchProducts } from '../redux/productSlice'

function RootLayout() {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.products);

    useEffect(() => {
        if (data?.length === 0) {
            dispatch(fetchProducts());
        }
    }, [data, dispatch]);
    return (
        <>
            <NavBar />
            <main>
                <div className='row'>
                    <div className='col-2'>
                        <Filters />
                    </div>
                    <div className='col-10'>
                        <Outlet />
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default RootLayout