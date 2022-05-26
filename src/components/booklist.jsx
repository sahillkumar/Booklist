import React,{useContext} from 'react';
import { BookContext } from '../contexts/bookcontext';


const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return ( 
        <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 

const BookList = () => {
    const {books} = useContext(BookContext);
    return books.length? ( 
        <div className="booklist">
            <ul>
                {books.map(book=>(
                    <BookDetails book={book} key={book.id}/>
                ))}
            </ul>
        </div>
        
     ):(
         <div className="empty">No books !! HURRAY</div>
     );
}
 
export default BookList;