import React from 'react';

class InventoryRow extends React.Component {
  render() {
    let data = this.props.data;
    return(
      <tr>
        <td>{data.name}</td>
        <td>{data.quantity}</td>
        <td>{data.retail_price}</td>
        <td>{data.wholesale_price}</td>
      </tr>
    )
  }
}

export default InventoryRow;