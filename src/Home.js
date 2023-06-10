import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
  const users = useSelector((state) => state.users);

  const [records, setRecords] = useState(users);

  const dispatch = useDispatch();
  useEffect(() => {
    setRecords(users);
  }, [users]);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  const filter = (e) => {
    setRecords(
      users.filter((f) => f.product_name.toLowerCase().includes(e.target.value))
    );
  };

  return (
    <div className="container">
      <h2>Task 2: CRUD Operation</h2>
      <Link to="/create" className="btn btn-primary my-3">
        Add New Product
      </Link>
      <div>
        <input
          className="search-box"
          placeholder="Search by product name"
          onChange={filter}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Created By</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((user, index) => (
            <tr key={index}>
              <td>{user.product_name}</td>
              <td>{user.category_name}</td>
              <td>{user.description}</td>
              <td>{user.created_by}</td>
              <td>{user.status}</td>
              <td>{user.created_at}</td>
              <td>{user.updated_at}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-success btn-mode"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2 btn-mode"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
