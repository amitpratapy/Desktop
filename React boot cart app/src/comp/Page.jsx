
import React from 'react';
import "./Page.css";
import Cardsdata from './cardsdata';
import { useDispatch } from 'react-redux';
import { inc } from '../cart-Reducer/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    
    const dispatch = useDispatch();
    const increase = (e) => {
        dispatch(inc(e));
        toast.success("Added To Cart !",{
          position:"top-left"
        });
    }
  return (
    <>
    <div className="head card">
        Purvanchal Restaurant Open Now in Lucknow
    </div>
    
      <div className="container-fluid card mt-2 pt-2">
     <div className="row">
        {/* <div className="col-sm-12 col-md-6"> */}
     {
              Cardsdata.map((e,i)=>{
                  return(
                    <div className="mb-2 card s-card col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={i}>
                        <img className='img-cart' src={e.imgdata} alt="Cart" />
                           <div className="name">
                             <div className="c-name">{e.dish}</div>
                            <div className="r-name">{e.rating}</div>
                         </div>
                             <div className="place">
                            <div className="c-place">{e.address}</div>
                             <div className="r-place">Rs.{e.price}</div>
                         </div>
                         <div className="line"></div>
                         <ToastContainer className="foo"/>
                         <div className="logos">
                          <div className="l-logo"><img src={e.arrimg} alt="l-logo" /></div>
                           <button onClick={()=>increase(e)} className="c-btn btn btn-success">Add To Cart</button>
                             <div className="r-logo"><img src={e.delimg} alt="r-logo" /></div>
                        </div>
                    </div>
                  )
              }
              )
            }
  {/* </div> */}
  </div>
  </div>
    </>
  )
}

export default Page