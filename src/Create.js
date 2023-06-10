import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const [product_name, setName] = useState("");
  const [category_name, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [created_by, setcreatedBy] = useState("");
  const [status, setStatus] = useState("In stock");
  const [created_at, setcreatedAt] = useState("");
  const [updated_at, setupdatedAt] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 60,
        product_name,
        category_name,
        description,
        created_by,
        status,
        created_at,
        updated_at,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="product_name">Name:</label>
            <input
              type="text"
              name="product_name"
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="category_name">Category:</label>
            <input
              type="text"
              name="category_name"
              className="form-control"
              placeholder="Enter category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="created_by">Created By:</label>
            <input
              type="text"
              name="created_by"
              className="form-control"
              onChange={(e) => setcreatedBy(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="status">Status:</label>
            {/* <input
              type="text"
              name="status"
              className="form-control"
              placeholder="Enter status"
              onChange={(e) => setStatus(e.target.value)}
            /> */}

            <select
              value={status}
              className="form-control"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="In stock">In Stock</option>
              <option value="Out off stock">Out of Stock</option>
              <option value="Limited Available">Limited Available</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="created_at">Created At:</label>
            <input
              type="text"
              name="created_at"
              className="form-control"
              placeholder="yyyy/mm/dd"
              onChange={(e) => setcreatedAt(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="updated_at">Updated At:</label>
            <input
              type="text"
              name="updated_at"
              className="form-control"
              placeholder="yyyy/mm/dd"
              onChange={(e) => setupdatedAt(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
