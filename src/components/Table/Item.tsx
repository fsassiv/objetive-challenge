import React from 'react';

const TableItem = () => {
  return (
    <tr className="table__row">
      <td className="table__data keep-mobile">
        <div className="table__data-info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKAgRlawOSwBw-FWF1Tg_ZGEHTdsHuEbAkZrnYyIPsVWmsPjp9WkdK-oXyOE8n1UNW87_o0mQ&usqp=CAc"
            alt=""
            className="table__data-avatar"
          />
          <p className="table__data-name">Test</p>
        </div>
      </td>
      <td className="table__data">oi</td>
      <td className="table__data">oi</td>
    </tr>
  );
};

export default TableItem;
