import React from 'react'

function Data({ count, transaction }) {

    const {  category, date, description, amount } = transaction


  return (
    <tr className="transData">
        <td>{count}</td>
        <td>{category}</td>
        <td>{date}</td>
        <td>{description}</td>
        <td>{amount}</td>
    </tr>
)

}

export default Data