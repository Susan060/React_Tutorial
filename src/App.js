import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Booklist from "./Components/Booklist";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";
import React, { useState } from "react";

function App() {
  const initialbookList = [
    {
      price: 999,
      bname: "Python",
      quantity: 0,
    },
    {
      price: 922,
      bname: "DSA",
      quantity: 0,
    },
  ];
  let [bookList, setBookList] = useState(initialbookList);
  let [totalAmount, setToatlAmount] = useState(0);

  let incrementQuantity = (index) => {
    let newBookList = [...bookList];
    let newtotalAmount = totalAmount;
    newBookList[index].quantity++;
    newtotalAmount += newBookList[index].price;
    setBookList(newBookList);
    setToatlAmount(newtotalAmount);
  };
  let decrementQuantity = (index) => {
    let newBookList = [...bookList];
    let newtotalAmount = totalAmount;
    if (newBookList[index].quantity > 0) {
      newBookList[index].quantity--;
      newtotalAmount -= newBookList[index].price;
    }
    setToatlAmount(newtotalAmount);
    setBookList(newBookList);
  };
  let resetQuantity = () => {
    let newBookList = [...bookList];
    newBookList.map((books) => {
      books.quantity = 0;
    });
    setBookList(newBookList);
    setToatlAmount(0);
  };
  let removeItem = (index) => {
    let newBookList = [...bookList];
    let newtotalAmount = totalAmount;
    newtotalAmount = newBookList[index].quantity * newBookList[index].price;
    newBookList.splice(index, 1);
    setBookList(newBookList);
    setToatlAmount(newtotalAmount);
  };

  let additem=(bname,price)=>{
    let newBookList=[...bookList]
    newBookList.push({
      bname:bname,
      price:price,
      quantity:0,
    });
    setBookList(newBookList);
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem additem={additem}/>
        <Booklist
          bookList={bookList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
