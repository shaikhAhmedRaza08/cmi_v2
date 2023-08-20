import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function RootLayout() {
    return (
        <>
            <Provider store={store}>
                <NavBar />
                <main>
                    <div className='row'>
                        <div className='col-2'>
                            <aside>
                                <h4>Filter</h4>
                                <div className="d-flex flex-column">
                                    <div>Materials</div>
                                    <div>Color</div>
                                </div>
                            </aside>
                        </div>
                        <div className='col-10'>
                            <Outlet />
                        </div>
                    </div>
                </main>
                <Footer />
            </Provider>
        </>
    )
}

export default RootLayout