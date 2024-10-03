import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawMoney, depositMoney } from "../state/index";

const Shop = () => {
  const balance = useSelector((state) => state.amount); // state.amount should give you the correct amount
  const dispatch = useDispatch();

  return (
    <div className="py-3">
      <h3>Deposit/Withdraw Money</h3>
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch(withdrawMoney(100))} // Dispatch action
      >
        -
      </button>
      Update Balance Rs. ( {balance} )
      <button
        className="btn btn-secondary mx-1"
        onClick={() => dispatch(depositMoney(100))} // Dispatch action
      >
        +
      </button>
    </div>
  );
};

export default Shop;
