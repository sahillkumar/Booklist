import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookcontext';

const BookForm = () => {
    const {dispatch}= useContext(BookContext);
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_BOOK',book:{
            title,author
        }});
        settitle('');
        setauthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title} onChange={(e)=>settitle(e.target.value)} required/>
            <input type="text" placeholder="Book Author" value={author} onChange={(e)=>setauthor(e.target.value)} required/>
            <button type="submit">Add Book</button>
        </form>
     );
}
 
export default BookForm;