import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import {HomeImg} from '../assets/Images'
import { useAppContext } from '../Context/ContextProvider';
import toast from "react-hot-toast";
// const user = "null";



const products = [
  {
    name: "Apple Iphone 15 Pro",
    benefit: "Luxury and Class",
    spec: {
      processor: "Octa-core 3.1GHz",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP quad-camera",
      battery: "5000mAh",
      operating_system: "XOS 14.1",
    },
    price: 960000,
    image:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/0390262/1.jpg?0127",
    rating: 4,
    id: "1",
  },
  {
    name: "Apple IPhone 14 Pro",
    benefit: "Luxury and Status",
    spec: {
      processor: "Octa-core 3.1GHz",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP quad-camera",
      battery: "5000mAh",
      operating_system: "XOS 14.1",
    },
    price: 450000,
    image:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/1326212/1.jpg?8191",
    rating: 4,
    id: "2",
  },
  {
    name: "Apple Iphone XR",
    benefit: "Status",
    spec: {
      processor: "Octa-core 3.1GHz",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP quad-camera",
      battery: "5000mAh",
      operating_system: "XOS 14.1",
    },
    price: 350000,
    image:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/0516721/1.jpg?4556",
    rating: 4,
    id: "3",
  },
];

const Home = () => {
const [productss, setProductss] = useState([]);
const {user,dispatch}= useAppContext()

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
    toast.success(`${product.name} added to cart`);
  }

  async function fetchProducts(url){
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProductss(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts("https://664f05f9fafad45dfae1f2d3.mockapi.io/api/v1/products/products");
  }, [])
  
 
  
  return (
    <div className='home'>
        <img src={HomeImg} alt="" style={{width:'100%'}}  />
        <section className="product" style={{padding:'2rem'}}>
          <h1 className='headings'>Products Overview</h1>
          <ul className="product-container" >
            {
              !user? productss.slice(0,3).map((product) => (
                <li key={product.id}>
                  <div className="p-image" style={{background:'wheat',height:''}}>
                    <img src={product.image} alt="" width={200}/>
                  </div>
                  <h3 className="p-name">{product.name}</h3>
                  <p className="p-use">{product.benefit}</p>
                  <div className="price-cart" style={{display:'flex',alignItems:'center'}}>
                    <p className="p-price">₦{product.price}</p>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                  </div>
                </li>
              )):productss.map((product) => (
                <li key={product.id}>
                  <div className="p-image" style={{background:'wheat',height:''}}>
                    <img src={product.image} alt="" width={200}/>
                  </div>
                  <h3 className="p-name">{product.name}</h3>
                  <p className="p-use">{product.benefit}</p>
                  <div className="price-cart" style={{display:'flex'}}>
                    <p className="p-price">₦{product.price}</p>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                  </div>
                </li>
              ))
            }
            
            {/* <li>
              <div className="p-image" style={{background:'wheat'}}>
                <img src="https://cdn-img.oraimo.com/fit-in/600x600/NG/album/oeb-e04d/oeb-e04d.png" alt="" width={200}/>
              </div>
              <h3 className="p-name">Product Name</h3>
              <p className="p-use">For calling</p>
              <div className="price-cart" style={{display:'flex'}}>
                <p className="p-price">$100</p>
                <button>Add to Cart</button>
              </div>
            </li>
           
            <li>
              <div className="p-image" style={{background:'wheat'}}>
                <img src="https://cdn-img.oraimo.com/fit-in/600x600/NG/album/oeb-e04d/oeb-e04d.png" alt="" width={200}/>
              </div>
              <h3 className="p-name">Product Name</h3>
              <p className="p-use">For calling</p>
              <div className="price-cart" style={{display:'flex'}}>
                <p className="p-price">$100</p>
                <button>Add to Cart</button>
              </div>
            </li>
            
            <li>
              <div className="p-image" style={{background:'wheat'}}>
                <img src="https://cdn-img.oraimo.com/fit-in/600x600/NG/album/oeb-e04d/oeb-e04d.png" alt="" width={200}/>
              </div>
              <h3 className="p-name">Product Name</h3>
              <p className="p-use">For calling</p>
              <div className="price-cart" style={{display:'flex'}}>
                <p className="p-price">$100</p>
                <button>Add to Cart</button>
              </div>
            </li> */}
            
          </ul>
        </section>
    </div>
  )
}

export default Home