import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // State to store users and items data
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);

  // Fetch users and items data on component mount
  useEffect(() => {
    fetchUsers();
    fetchItems();
  }, []);

  // Function to fetch users data (you can replace this with your actual API call)
  const fetchUsers = () => {
    // Replace this with your API call to fetch users data
    // Example: fetch("/api/users").then((response) => response.json()).then((data) => setUsers(data));
    // For this example, I'll provide some mock data
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      // Add more users as needed
    ];
    setUsers(mockUsers);
  };

  // Function to fetch items data (you can replace this with your actual API call)
  const fetchItems = () => {
    // Replace this with your API call to fetch items data
    // Example: fetch("/api/items").then((response) => response.json()).then((data) => setItems(data));
    // For this example, I'll provide some mock data
    const mockItems = [
      { id: 1, name: "Item 1", price: 100 },
      { id: 2, name: "Item 2", price: 200 },
      // Add more items as needed
    ];
    setItems(mockItems);
  };

  // Function to delete a user (you can implement this as needed)
  const deleteUser = (userId) => {
    // Implement your logic to delete the user with the given userId
    // Example: fetch(`/api/users/${userId}`, { method: "DELETE" }).then(() => fetchUsers());
  };

  // Function to delete an item (you can implement this as needed)
  const deleteItem = (itemId) => {
    // Implement your logic to delete the item with the given itemId
    // Example: fetch(`/api/items/${itemId}`, { method: "DELETE" }).then(() => fetchItems());
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <div>
        <h3>Users</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Items</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {/* Add code for adding items, editing items, and showing messages here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
