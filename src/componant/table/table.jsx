import React from 'react';
import './table.css'
const Table = () => {
  return (
    <div className='componant-padding' >
          <div className='componantheader m-auto text-center  mt-5'>
    <div className=' textcolor fw-bold'><span className='headerspace' ></span> TIME TABLE</div>

    <h3  className='fs-2'>PROFESSIONAL WEEKLY SCHEDULE </h3>
    </div>
    <div className='res'>
    <table className=' m-auto mb-5  timetable '>
      <thead >
      <tr className=''>
        <th className=''></th>
        <th  className=''>MONDAY</th>
        <th className=''>TUESDAY</th>
        <th className=''>WEDNISDAY</th>
        <th className=''>THURSDAY</th>
        <th className=''>FRIDAY</th>
        <th className=''>SATURDAY</th>
        <th className=''>SUNDAY</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>8:00am</th>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td> <span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <th>10:00am</th>
        <td></td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td></td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
      </tr>
      <tr>
        <th>4:00pm</th>
        <td></td>
        <td>
        </td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td></td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
      </tr>
      <tr>
        <th>6:00pm</th>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td></td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>2:00pm</th>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
        <td></td>
        <td><span className='d-block'>CROSSFIT</span>TOMAS JANE</td>
        <td></td>
      </tr>
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default Table;
