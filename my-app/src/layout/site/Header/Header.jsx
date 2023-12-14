import React from 'react'

function Header() {
  return (
    <>
    <div className='header__middle'> 
     <div className="header__img"><img src="https://htmldemo.net/pustok/pustok/image/logo.png" alt="" /></div>
     <div className="ip">
     <div className='icon'><i class="fa-solid fa-headphones-simple"></i></div>Free Support 24/7 <br />
         +01-202-555-0181
  </div>
     <div className="spb">
     <h3>HOME <i style={{fontSize:'10px'}} class="fa-solid fa-chevron-down"></i></h3>
     <h3>SHOP <i style={{fontSize:'10px'}} class="fa-solid fa-chevron-down"></i></h3>
     <h3>PAGES <i style={{fontSize:'10px'}} class="fa-solid fa-chevron-down"></i></h3>
     <h3>BLOG <i style={{fontSize:'10px'}} class="fa-solid fa-chevron-down"></i></h3>
       <h3>CONTACT <i style={{fontSize:'10px'}} class="fa-solid fa-chevron-down"></i></h3>
     </div> 
      <br />
      
    </div>
    
     <div>
     <div className="header__around">
   <div className='around'> <i style={{marginLeft:'35px', marginTop:'15px'}} class="fa-solid fa-bars"></i> Browse categories <i style={{fontSize:'10px'}} class="fa-solid fa-chevron-down"></i></div>
   <div className='inp__btn'> <input style={{height:'50px', width:'350px'}} placeholder='Search entire store here' type="text" /><button style={{height:'50px', width:'120px', backgroundColor:'#62ab00', border:'none', color:'white'}}>Search</button> </div>
   <div className='middle'>Login <br /> or Register<i style={{fontSize:'30px', color:'#62ab00'}} class="fa-solid fa-cart-arrow-down"></i> Shopping Cart
    </div> <div className="sa"><p style={{color:'#62ab00'}}>£0.00</p> <i style={{fontSize:'10px'}} class="fa-solid fa-chevron-down"></i>
    <div className="sircle">1</div>
 </div> 
 

</div>

     </div>
    
    </>
    

  )
}

export default Header