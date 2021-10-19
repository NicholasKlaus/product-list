import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { ROUTES } from '../constants/routes';
import { AddNewProduct } from "../redux/actions";

export const NewProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [comment, setComment] = useState('');

  const onCreate = () =>{
    const product = {
      productID: Date.now(),
      name,
      imageURL,
      count,
      size: {
        width,
        height
      },
      weight,
      comment: {
        id: Date.now(),
        description: comment
      }
    }
    dispatch(AddNewProduct(product));
  }
  
  return (
    <div className="form">
      <h2>Add Product</h2>
      <input className="form__input" type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
      <input className="form__input" type="text" placeholder="ImageURL" onChange={(e) => setImageURL(e.target.value)}/>
      <input className="form__input" type="number" min="0" placeholder="Count" required onChange={(e) => setCount(e.target.value)}/>
      <input className="form__input" type="number" min="0" placeholder="Width"required onChange={(e) => setWidth(e.target.value)}/>
      <input className="form__input" type="number" min="0" placeholder="Height"required onChange={(e) => setHeight(e.target.value)}/>
      <input className="form__input" type="number" min="0" placeholder="Weight"required onChange={(e) => setWeight(e.target.value)}/>
      <textarea className="form__input input-area" placeholder="Comment"  onChange={(e) => setComment(e.target.value)}/>
      <div className="btn-wrap">
        <Link to={ROUTES.HOME}><Button onClick={onCreate} className="form__btn" color="success">Confirm</Button></Link>
        <Link to={ROUTES.HOME}><Button className="form__btn" color="danger">Cancel</Button></Link>
      </div>
    </div>
  );
}