import React from "react";
import { useDispatch } from "react-redux";
import { Button } from 'reactstrap';
import { Delete } from "../redux/actions";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(Delete(product.id));
  }

  return (
    <div className="product__card">
      <div className="card-wrap">
        <img src={product.imageURL} />
        <div className="card__body">
          <h3 className="card__title">{product.name}</h3>
          <span className="card__item">Count: {product.count};</span>
          <span className="card__item">Width: {product.size.width};</span>
          <span className="card__item">Height: {product.size.height};</span>
          <span className="card__item">Weight: {product.weight}.</span>
        </div>
      </div>
      <div>
        <Button className="card__btn" color="warning">Edit</Button>
        <Button onClick={removeProduct} className="card__btn" color="danger">Delete</Button>
      </div>
    </div>
  );
}