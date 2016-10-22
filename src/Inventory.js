import React from 'react';
import InventoryRow from './InventoryRow.js';

class Inventory extends React.Component {
  constructor() {
    super();
    this.state = { items: null };
  }
  componentDidMount() {
    fetch('/api/inventory') 
    .then((res) => res.json())
    .then((resJSON) => {
      this.setState({items: resJSON.data});
      console.log(resJSON.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    if (this.state.items !== null) {
      let rows = [];
      this.state.items.forEach((item) => {
        rows.push(<InventoryRow data={item} />);
      });
      return (
        <div className="inventory">
          <h4>Inventory</h4>
          <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></a>
          <table className="striped">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Retail Price</th>
                  <th>Wholesale Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Inventory;