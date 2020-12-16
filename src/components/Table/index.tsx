import React from 'react';
import TableItem from './Item';

const index = () => {
  return (
    <table className="table">
      <tr>
        <th className="table__title  keep-mobile">Personagem</th>
        <th className="table__title">Séries</th>
        <th className="table__title">Eventos</th>
      </tr>
      <tbody>
        <TableItem />
        <TableItem />
      </tbody>
    </table>
  );
};

export default index;
