import React from "react";
import Book from "./Book"; // Assuming Book is another component that renders individual book details

function Booklist(props) {
  return (
    props.bookList.length > 0 ? (
      <div>
        {props.bookList.map((book, index) => (
          <Book
            key={index}
            name={book.bname}
            price={book.price}
            quantity={book.quantity}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            index={index}
            removeItem={props.removeItem}
          />
        ))}
      </div>
    ) : (
      <h1>No products exist in the cart</h1>
    )
  );
}

export default Booklist;
