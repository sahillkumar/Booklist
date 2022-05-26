import React,{useContext} from 'react';
import {BookContext} from '../contexts/bookcontext';

const Navbar = () => {
    const {books} = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>BOOKS TO READ</h1>
            <p>{books.length} books left to go through</p>
        </div>
     );
}
 
export default Navbar;