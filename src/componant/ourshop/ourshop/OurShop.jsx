import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import bottole1 from '../../../images/bottle1.jpg'
import bottole2 from '../../../images/bottle2.jpg'
import bottole3 from '../../../images/bottle3.jpg'
import bottole4 from '../../../images/bottle4.jpg'
import teshirt from "../../../images/t-shirt.jfif";
import teshirt2 from "../../../images/t-shirt2.jfif";
import teshirt3 from "../../../images/t-shirt3.jfif";
import teshirt4 from "../../../images/t-shirt4.jfif";
import hat from "../../../images/hat.jfif";
import hat2 from "../../../images/hat1.jfif";
import hat3 from "../../../images/hat3.jfif";
import hat4 from "../../../images/hat4.jfif";
import dumble from "../../../images/dambel.jfif";
import dumble1 from "../../../images/dumbul1.jfif";
import dumble2 from "../../../images/dumbul2.jfif";
import dumble3 from "../../../images/dumbul3.jfif";


import protein from "../../../images/Protein.jfif";
import protein1 from "../../../images/Protein1.jfif";
import protein2 from "../../../images/Protein2.jfif";
import protein3 from "../../../images/Protein3.jfif";
import shoes from "../../../images/s.jfif";
import shoes2 from "../../../images/shoes.jfif";
import shoes3 from "../../../images/shoes2.jfif";
import shoes4 from "../../../images/shoes3.jfif";
import "./ourshop.css";
import Pagination from "./pagination";
import Homecard from "../../pagethree/COACHES-HOME/homecard";



const data = [
  {
    quantity: 1,
    id: 1,
    name: "T-shirt",
    price: 55,
    discountprice: 45,
    image: teshirt,
  },

  {
    quantity: 1,
    id: 213,
    name: "Hat",
    price: 40,
    discountprice: 35,
    image: hat,
  },
  {
    quantity: 1,
    id: 2,
    name: "Dumble",
    price: 75,
    discountprice: 60,
    image: dumble,
  },

  {
    quantity: 1,
    id: 5,
    name: "Protein",
    price: 100,
    discountprice: 80,
    image: protein,
  },
  {
    quantity: 1,
    id: 6,
    name: "shoes",
    price: 55,
    discountprice: 43,
    image: shoes,
  },
  {
    quantity: 1,
    id: 2,
    name: "bottole",
    price: 75,
    discountprice: 60,
    image: bottole4,
  },
  {
    quantity: 1,
    id: 1,
    name: "T-shirt",
    price: 55,
    discountprice: 45,
    image: teshirt2,
  },

  {
    quantity: 1,
    id: 213,
    name: "Hat",
    price: 40,
    discountprice: 35,
    image: hat2,
  },
  {
    quantity: 1,
    id: 2,
    name: "Dumble",
    price: 75,
    discountprice: 60,
    image: dumble1,
  },
  
  {
    quantity: 1,
    id: 5,
    name: "Protein",
    price: 100,
    discountprice: 80,
    image: protein2,
  },
  {
    quantity: 1,
    id: 6,
    name: "shoes",
    price: 55,
    discountprice: 43,
    image: shoes2,
  },
  {
    quantity: 1,
    id: 2,
    name: "bottole",
    price: 75,
    discountprice: 60,
    image: bottole1,
  },
  {
    quantity: 1,
    id: 1,
    name: "T-shirt",
    price: 55,
    discountprice: 45,
    image: teshirt3,
  },

  {
    quantity: 1,
    id: 213,
    name: "Hat",
    price: 40,
    discountprice: 35,
    image: hat3,
  },
  {
    quantity: 1,
    id: 2,
    name: "Dumble",
    price: 75,
    discountprice: 60,
    image: dumble2,
  },
 

  {
    quantity: 1,
    id: 2,
    name: "bottole",
    price: 75,
    discountprice: 60,
    image: bottole3,
  },

  {
    quantity: 1,
    id: 5,
    name: "Protein",
    price: 100,
    discountprice: 80,
    image: protein3,
  },
  {
    quantity: 1,
    id: 6,
    name: "shoes",
    price: 55,
    discountprice: 43,
    image: shoes3,
  },
  {
    quantity: 1,
    id: 7,
    name: "T-shirt",
    price: 53,
    discountprice: 45,
    image: teshirt4,
  },

  {
    quantity: 1,
    id: 15,
    name: "Hat",
    price: 41,
    discountprice: 33,
    image: hat4,
  },
  {
    quantity: 1,
    id: 8,
    name: "Dumble",
    price: 90,
    discountprice: 77,
    image: dumble3,
  },
  {
    quantity: 1,
    id: 2,
    name: "bottole",
    price: 75,
    discountprice: 60,
    image: bottole2,
  },
  {
    quantity: 1,
    id: 10,
    name: "Protein",
    price: 93,
    discountprice: 75,
    image: protein1,
  },
  {
    quantity: 1,
    id: 11,
    name: "shoes",
    price: 66,
    discountprice: 53,
    image: shoes4,
  },
];

export default function OurShop() {

  const ref =useRef()
  const [categories, setcategories] = useState(data);
  const [filterdItems, setFilterdItems] = useState([]);

  const searchfoucs=()=>{
    ref.current.focus()
  }

  const itemNumbers = 8;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(categories.length / itemNumbers)
  );
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    if (filterdItems.length > 0) {
      setcategories(filterdItems.slice((curPage - 1) * 8, curPage * 8));
    } else {
      setcategories(data.slice((curPage - 1) * 8, curPage * 8));
    }
  }, [curPage,filterdItems]);

  const filterbyname = (e) => {
    const usertext = e.target.value.trim().toLowerCase();
    console.log(usertext);

    const newItems = data.filter((categoriename) =>
      categoriename.name.toLowerCase().includes(usertext)
    );
    setTotalPages(Math.ceil(newItems.length / 8));
    setCurPage(1);
    setFilterdItems(newItems);

    console.log(newItems);
  };

  // const nPages = Math.ceil(categories.length / recordsPerPage);

  const [card, setcard] = useState([]);
 
  const addcard = (item) => {
    console.log('hjashkj');
    if (
      card.some((card) => {
        return card.id === item.id;
      })
    ) {
      const ourcard = [...card];
      const index = ourcard.findIndex((carditem) => carditem.id === item.id);

      ourcard[index].quantity += 1;

      setcard(ourcard);
    } else {
      setcard((prev) => [...prev, item]);
     
    }

  };

  const [showcard, setshowcard] = useState(false);

  const showcards = () => {
    if (showcard === false) {
      setshowcard(true);
    } else {
      setshowcard(false);
    }
  };

  const remove = (cardele) => {
    const ourcard = [...card];
    const index = ourcard.findIndex((carditem) => carditem.id === cardele.id);

    if (cardele.quantity > 1) {
      ourcard[index].quantity -= 1;
      setcard(ourcard);
    } else {
      ourcard.splice(index, 1);
      setcard(ourcard);
    }
  };

  return (
    <div >
  
      <div className="d-flex justify-content-around flex-wrap mt-5 mb-5 componant-padding ">
        <div>
          <button className="cardbtn" onClick={showcards}>
            <FaShoppingCart/>
          </button>
          {showcard ? (
            card.map((card) => (
              <div key={Math.random()} className="text-center d-flex align-items-center justify-content-between mb-3  ">
                <div>
                {card.name}
                </div>
                <div className="">{card.quantity}</div>
                <button className="removebtn"
                  onClick={() => {
                    remove(card);
                  }}
                >
                  remove
                </button>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>

        <div className="filter">
          <input
          ref={ref}
            onChange={filterbyname}
            type="text"
            placeholder='search by name'
          />
        <FaSearch className="ms-3 fs-3 binkcolor" onClick={searchfoucs}/>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-wrap ">
      {
        
           categories.map((item) => (
              <div key={Math.random()} className="side-width ">
                <div className="shopcard ">
                  <img src={item.image} alt=" " />
                  <div className="detailsoftybe">
                    <h6 className="pt-3">{item.name}</h6>
                    <div className="pt-1 pb-2">
                      <span className="opacity-50">${item.price}</span>{" "}
                      <span>${item.discountprice}</span>
                    </div>
                    <button
                      onClick={() => {
                        addcard(item);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))

}
      </div>
      <div></div>

      <Pagination
        nPages={totalPages}
        currentPage={curPage}
        setCurrentPage={setCurPage}
      />



    </div>
  );
}
