import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const {
    product_name,
    category_name,
    description,
    created_by,
    status,
    created_at,
    updated_at,
  } = existingUser[0];
  const [uproduct_name, setName] = useState(product_name);
  const [ucategory_name, setCategory] = useState(category_name);
  const [udescription, setDescription] = useState(description);
  const [ucreated_by, setcreatedBy] = useState(created_by);
  const [ustatus, setStatus] = useState(status);
  const [ucreated_at, setcreatedAt] = useState(created_at);
  const [uupdated_at, setupdatedAt] = useState(updated_at);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        product_name: uproduct_name,
        category_name: ucategory_name,
        description: udescription,
        created_by: ucreated_by,
        status: ustatus,
        created_at: ucreated_at,
        updated_at: uupdated_at,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Edit the Product</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="product_name">Name:</label>
            <input
              type="text"
              name="product_name"
              className="form-control"
              placeholder="Enter name"
              value={uproduct_name}
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
              value={ucategory_name}
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
              value={udescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="created_by">Created By:</label>
            <input
              type="text"
              name="created_by"
              className="form-control"
              value={ucreated_by}
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
              value={ustatus}
              onChange={(e) => setStatus(e.target.value)}
            /> */}
            <select
              value={ustatus}
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
              placeholder="yyyy/mm/dd"
              className="form-control"
              value={ucreated_at}
              onChange={(e) => setcreatedAt(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="updated_at">Updated At:</label>
            <input
              type="text"
              placeholder="yyyy/mm/dd"
              name="updated_at"
              className="form-control"
              value={uupdated_at}
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

export default Update;
