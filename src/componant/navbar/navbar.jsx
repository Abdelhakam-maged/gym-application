import React from 'react';

import Navbarsection1 from './navbarsection1';
import Navbarsectiontwo from './navbarsectiontwo';
import Navbarresponsive from './navbarresponsive';
const Navbar = () => {
  return (
  <div className='fix' >
      <div className='m-auto w-100     p-0'>
  
<Navbarsection1/>
<Navbarsectiontwo bgcontainer={"navsec2container"} bglinks={"bg-dark"} />
<Navbarresponsive bg={"bg-dark"}/>
      </div>
      </div>
  );
}

export default Navbar;
