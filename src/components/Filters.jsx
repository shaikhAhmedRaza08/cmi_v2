import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchColors, fetchMaterials, filterActions } from '../redux/filterSlice';
import FilterPlaceHolder from './FilterPlaceHolder.jsx';

function Filters() {
    const dispatch = useDispatch();
    const materials = useSelector(state => state.filters.materials);
    const colors = useSelector(state => state.filters.colors);
    useEffect(() => {
        if (materials?.length === 0) {
            dispatch(fetchMaterials());
        }
        if (colors?.length === 0) {
            dispatch(fetchColors());
        }
    }, [colors, dispatch, materials]);

    return (
        <aside>
            <div className="d-flex flex-column">
                <div className='container'>
                    <h4 className='mb-4'>Filter</h4>
                    <h4>Materials</h4>
                    {
                        materials.length === 0 &&
                        <FilterPlaceHolder />
                    }
                    <ul className='d-flex flex-column ps-0'>
                        {
                            materials?.map(material => (
                                <button type='button' className='btn text-start mb-2' onClick={() => dispatch(filterActions.setMaterial(material))}>{material.name}</button>
                            ))
                        }
                    </ul>
                </div>
                <div className="container">
                    <h4>Color</h4>
                    {
                        colors.length === 0 &&
                        <FilterPlaceHolder />
                    }
                    <ul className='d-flex flex-column ps-0'>
                        {
                            colors?.map(color => (
                                <button type='button' className='btn text-start' onClick={() => dispatch(filterActions.setColor(color))}>{color.name}</button>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Filters