import React from "react";
import BookContextProvider from "./contexts/bookcontext";
import Navbar from "./components/navbar";
import BookList from "./components/booklist";
import BookForm from "./components/bookform";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
