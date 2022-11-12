import React from 'react'

export const initialState = {
    total :0,
    products:[]
}

const shopReducer = (state,action) => {
  const {type,payload} = action;
  
  switch (type){
    case "ADD_CART":
      console.log("ADD_CART",payload);
      return{
        ...state,
        products:payload.products
      };
    case "REMOVE_CART":
      console.log("REMOVE_CART",payload);
      return{
        ...state,
        products:payload.products
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE",payload);
      return{
        ...state,
        product:payload.total
      };
      default:
        throw new Error(`no case for type ${type} found in shopReducer.`);
  }
};


export default shopReducer;