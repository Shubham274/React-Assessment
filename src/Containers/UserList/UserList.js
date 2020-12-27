import React, { useState, useEffect } from "react";
import "./UserListPage.css";
function UserListPage() {
  const [orderList, setOrderList] = useState({ data: [] });
  const [name, setName] = useState("");
  const fetchOrders = async () => {
    const response = await fetch(
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
    );
    const json = await response.json();
    setOrderList({ data: json });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 2) {
      alert("Please enter atleast 2 characters");
    } else {
      const items = orderList.data.filter((row) => {
        return row.fullName.toLowerCase().includes(name.toLowerCase());
      });
      setOrderList({ data: items });
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      fetchOrders();
    }
  };

  const clearValue = () => {
    setName("");
    fetchOrders();
  };

  return (
    <div className="page_wrapper">
      <h1 className="order_heading">Users</h1>
      <form className="filter_wrapper" onSubmit={handleSubmit}>
        <input
          className="search_box"
          type="text"
          value={name}
          placeholder="Search by Name"
          onChange={changeName}
        />
        <input
          className="reset_btn"
          type="button"
          value="Reset"
          onClick={clearValue}
        />
      </form>
      <div className="orders_wrapper">
        <div className="order-table-wrapper">
          <div className="order-table">
            <div className="table-header">
              <div>
                <h4>ID</h4>
              </div>
              <div>
                <h4>User Avatar</h4>
              </div>
              <div>
                <h4>Full Name </h4>
              </div>
              <div>
                <h4>DoB</h4>
              </div>
              <div>
                <h4>Gender</h4>
              </div>
              <div>
                <h4>Current Location</h4>
              </div>
            </div>
          </div>
          <div className="all-data-wrapper">
            {orderList.data.map((item) => {
              const {
                id,
                profilePic,
                fullName,
                dob,
                gender,
                currentCity,
                currentCountry,
              } = item;
              return (
                <div className="table-data" key={id}>
                  <div className="id">{id}</div>
                  <div className="customer_name">
                    <img src={profilePic} alt="profilepic" />
                  </div>
                  <div className="customer_name">{fullName}</div>
                  <div className="customer_name">{dob}</div>
                  <div className="customer_name">{gender}</div>
                  <div className="customer_name">{`${currentCity},${currentCountry}`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserListPage;
