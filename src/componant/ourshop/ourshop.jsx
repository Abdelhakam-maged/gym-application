import React from 'react';
import Aboutus from '../aboutus';
import OurShop from '../ourshop/ourshop/OurShop';
import Homecard from '../pagethree/COACHES-HOME/homecard';
import Footer from '../footer/footer'
const OurShopS = () => {
  return (
    <div className="pagethree ">
          <Homecard
        bgimg={"bg-homeshop"}
        head={"OUR SHOP"}
        text={"Pages-shop"}
        nav={false}
      />
      <OurShop/>
      <Footer/>
    </div>
  );
}

export default OurShopS;
