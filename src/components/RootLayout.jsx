import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout