import { TYPES } from "./types";


const initialState = {
  products:[
    {
      id: 1,
      imageURL: "https://picsum.photos/200/200?",
      name: "Somename",
      count: 4,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [
        {
          id: 1,
          productID: 1,
          description: "some text",
          date: "22:00 23.08.2021"
        }
      ]
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/200/200?random=1",
      name: "Somename",
      count: 3,
      size: {
        width: 100,
        height: 250,
      },
      weight: "112g",
      comments: [
        {
          id: 1,
          productID: 2,
          description: "some text",
          date: "14:00 23.08.2021"
        }
      ]
    }
  ]
}

export const productReducer = (state = initialState , action) => {
  switch (action.type) {
    case TYPES.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      }
    case TYPES.DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter(prod => prod.id !== action.id)]
      }
    default: 
      return state;
  }
}