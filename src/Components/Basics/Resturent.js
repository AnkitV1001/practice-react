import React,  {useState}  from 'react'
import './style.css';
import Menu from './menuApi.js';
 import Menucard from './Menucard.js';

const Resturent = () => {
    const [menuData,setMenuData]= useState(Menu);
    // console.log(menuData)
    return (
        <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item'>Breakfast</button>
                <button className='btn-group__item'>Lunch</button>
                <button className='btn-group__item'>Evening</button>
                <button className='btn-group__item'>Dinner</button>
                <button className='btn-group__item'>All</button>
                
            </div>

        </nav>
         <Menucard menuData={menuData}/>
         {/* <Menu></Menu> */}
        </>
    );
};
export default Resturent
                        






