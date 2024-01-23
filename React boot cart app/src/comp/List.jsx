import React, { useEffect, useState } from 'react';
import "./list.css";
import { useDispatch, useSelector } from 'react-redux';
import { Emptone, Empty, IncQty, DecQty } from '../cart-Reducer/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const List = () => {
  const [tprice,setTprice]=useState(0);

  const total = () => {
    let totprice = 0;
    cart.map((e,i)=>{
      return(
      totprice =  e.price*e.qnty+totprice
      )
    })
    setTprice(totprice)
  }
  useEffect(()=>{
    total();
  },[total])
  const dispatch= useDispatch();
  const Inc = (e) => {
    dispatch(IncQty(e))
    } 
    const Dec = (e) => {
      dispatch(DecQty(e))
      } 
  const {cart} = useSelector((state)=>state.myCart);
  // const [count,setCount]=useState(cart);
  const emt = ()=>{
dispatch(Empty())
toast.error("Cart is emptied !",{
  position:"top-left"
},);
  }
  const delone = (e) => {
    dispatch(Emptone(e))
    toast.error("Item is deleted !",{
      position:"top-left"
    },);
  }
// console.log(cart);

  return (
    <>
    <ToastContainer/>
   <div className="out">
   <div className="card list-cart ">
    <div className="list-top">
      <div className="list-left">Cart Calculation</div>
      {/* <div className="Delete"><div className="btn btn-danger">R</div></div> */}
    </div>
    
    
    {/* toogle */}
    {
      cart.length!=0?
      <div className="t-data table-responsive">
      
      <table className='table table-responsive t-class'>
            <thead>
              <tr>
                <th>Action</th>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total Amount</th>
              </tr>
              </thead>


      {
        cart.map((e,i)=>{
          return(
           
              <tbody key={i}>
                <tr>
                  <td className='take' onClick={()=>delone(e)}> <div className="d-awe"> <i className='fa-solid fa-trash-can'>  </i></div> </td>
                  <td> <img src={e.imgdata} alt="" className='t-img'/> </td>
                  <td className='t-name'>{e.dish}</td>
                  <td className='price'>Rs.{e.price}</td>
                  <td> <div className="qty">
                    <div className="min" onClick={()=>Dec(e)}>-</div>
                    <div className="num">{e.qnty}</div>
                    <div className="plus" onClick={()=>Inc(e)}>+</div>
                    </div></td>
                    <td className='t-price'>Rs.{e.price*e.qnty}</td>
                </tr>
              </tbody>
              
             
          )
        })
      }
     </table>



        <div className="bot">
        <div className="gt-price">
          <div className='gt-1'>
            Total Price : &nbsp; </div>
          <div className='gt-2'> {tprice}</div>
          </div>
          <button className="btn btn-danger" onClick={emt}><i className='fa-solid fa-trash-can'>  </i> EmptyCart</button>
        </div>
     </div>
      :<div className="f-toogle">
      <div className='c-symb'><i className="fa-solid fa-cart-shopping"></i></div>
      <div className='c-text'>Your Cart is empty !!</div>
    </div>
    }
    {/* toogle */}

     {/* toogle */} 
     
     {/* toogle */}
   </div>
   </div>
    
    </>
  )
}

export default List











// <div className="t-data">
//      <table className='table table-bordered table-responsive text-center'>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Class</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Amit</td>
//           <td>1st</td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Hero</td>
          
//         </tr>
//         <tr>
//           <td>Ankit</td>
//           <td>2nd</td>
//         </tr>
//         <tr>
//           <td>Ankit</td>
//           <td>2nd</td>
//         </tr>
//         <tr>
//           <td>Ankit</td>
//           <td>2nd</td>
//         </tr>
//         <tr>
//           <td rowSpan={2} className='v-a'>Hero yaar lhkj jhk gjl jlkg ljkhg ljh </td>
//           <td>2nd</td>
//         </tr>
//         <tr>
//           {/* <td>Ankit</td> */}
//           <td>3rd</td>
//         </tr>
//         <tr>
//           <td>Ankit</td>
//           <td>2nd</td>
//         </tr>
//         <tr>
//           <td>Ankit</td>
//           <td>2nd</td>
//         </tr>
//         <tr>
//           <td>Ankit</td>
//           <td>2nd</td>
//         </tr>
//         <tr>
//           <td>Ankit</td>
//           <td>2nd</td>
//         </tr>
//       </tbody>
//      </table>
//      </div>