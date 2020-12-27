import React, { useState, useEffect } from "react";
import "./ProductsListPage.css";
function ProductsListPage() {
  const [orderList, setOrderList] = useState({ data: [] });

  const fetchOrders = async () => {
    const response = await fetch(
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
    );
    const json = await response.json();
    setOrderList({ data: json });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="page_wrapper">
      <h1 className="order_heading">Products</h1>
      <div className="orders_wrapper">
        <div className="filter_div">
          <h3>Filters</h3>
          <p>Count:</p>
          <label htmlFor="" className="filter_checkbox">
            <input type="checkbox" className="checks" value="new" checked />
            Expired
          </label>
          <label htmlFor="" className="filter_checkbox">
            <input type="checkbox" className="checks" value="new" checked />
            Low Stock
          </label>
        </div>
        <div className="order-table-wrapper">
          <div className="order-table">
            <div className="table-header">
              <div>
                <h4>ID</h4>
              </div>
              <div>
                <h4>Product Name</h4>
              </div>
              <div>
                <h4>Product Brand</h4>
              </div>
              <div>
                <h4>Expiry Date</h4>
              </div>
              <div>
                <h4>Unit Price</h4>
              </div>
              <div>
                <h4>Stock</h4>
              </div>
            </div>
          </div>
          <div className="all-data-wrapper">
            {orderList.data.map((item) => {
              const {
                id,
                medicineName,
                medicineBrand,
                expiryDate,
                unitPrice,
                stock,
              } = item;
              return (
                <div className="table-data" key={id}>
                  <div className="id">{id}</div>
                  <div className="customer_name">{medicineName}</div>
                  <div className="customer_name">{medicineBrand}</div>
                  <div className="customer_name">{expiryDate}</div>
                  <div className="customer_name">{unitPrice}</div>
                  <div className="customer_name">{stock}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsListPage;
