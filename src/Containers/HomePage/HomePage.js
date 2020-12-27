import React, { useState, useEffect } from "react";
import "./HomePage.css";
function HomePage() {
  const [orderList, setOrderList] = useState({ data: [] });
  const [showNew, setShowNew] = useState(true);
  const [showPacked, setShowPacked] = useState(true);
  const [showInTransit, setShowInTransit] = useState(true);
  const [showDelivered, setShowDelivered] = useState(true);

  const fetchOrders = async () => {
    const response = await fetch(
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
    );
    const json = await response.json();
    setOrderList({ data: json });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const onFilterCheckboxClick = (type, value) => {
    if (type == "New") {
      setShowNew(!showNew);
    } else if (type == "Packed") {
      setShowPacked(!showPacked);
    } else if (type == "Intransit") {
      setShowInTransit(!showInTransit);
    } else {
      setShowDelivered(!showDelivered);
    }
    if (!value) {
      const ItemsList = orderList;
      const items = ItemsList.data.filter((row) => {
        return row.orderStatus.toLowerCase() !== type.toLowerCase();
      });
      console.log(items);
      setOrderList({ data: items });
    } else {
      console.log(orderList);
    }
  };

  return (
    <div className="page_wrapper">
      <h1 className="order_heading">Orders</h1>
      <div className="orders_wrapper">
        <div className="filter_div">
          <h3>Filters</h3>
          <p>Count:</p>
          <label htmlFor="" className="filter_checkbox">
            <input
              onChange={(e) => onFilterCheckboxClick("New", e.target.checked)}
              type="checkbox"
              checked={showNew}
              type="checkbox"
              name="orders-new"
            />
            New
          </label>
          <label htmlFor="" className="filter_checkbox">
            <input
              onChange={(e) =>
                onFilterCheckboxClick("Packed", e.target.checked)
              }
              type="checkbox"
              checked={showPacked}
              type="checkbox"
              name="orders-packed"
            />
            Packed
          </label>
          <label htmlFor="" className="filter_checkbox">
            <input
              onChange={(e) =>
                onFilterCheckboxClick("Intransit", e.target.checked)
              }
              type="checkbox"
              checked={showInTransit}
              type="checkbox"
              name="orders-transit"
            />
            InTransit
          </label>
          <label htmlFor="" className="filter_checkbox">
            <input
              onChange={(e) =>
                onFilterCheckboxClick("Delivered", e.target.checked)
              }
              type="checkbox"
              checked={showDelivered}
              type="checkbox"
              name="orders-delivered"
            />
            Delivered
          </label>
        </div>
        <div className="order-table-wrapper">
          <div className="order-table">
            <div className="table-header">
              <div>
                <h4>ID</h4>
              </div>
              <div>
                <h4>Customer</h4>
              </div>
              <div>
                <h4>Date</h4>
              </div>
              <div>
                <h4>Amount</h4>
              </div>
              <div>
                <h4>Status</h4>
              </div>
            </div>
          </div>
          <div className="all-data-wrapper">
            {orderList.data.map((item) => {
              const {
                id,
                customerName,
                orderDate,
                orderTime,
                amount,
                orderStatus,
              } = item;
              return (
                <div className="table-data" key={id}>
                  <div className="id">{id}</div>
                  <div className="customer_name">{customerName}</div>
                  <div className="customer_name">
                    {orderDate}
                    <br />
                    <span>{orderTime}</span>
                  </div>
                  <div className="customer_name">{amount}</div>
                  <div className="customer_name">{orderStatus}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
