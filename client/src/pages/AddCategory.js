import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewCategory,
  getAllCategories,
} from "../redux/reducers/gallerySlice";
import { Link, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addNewCategory(input));
    dispatch(getAllCategories());
    navigate("/add-image");
  };
  return (
    <>
      <div className="container my-4 w-50 text-white bg-dark rounded-3 fs-4">
        <div align="center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="mt-2">
                Category:
              </label>
              <input
                name="name"
                type="text"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="form-control mt-2 w-75"
                placeholder="Enter Category"
              />
            </div>

            <button type="submit" className="btn btn-outline-success mt-3">
              Add Category
            </button>
          </form>
          <Link to="/">
            <button className="btn btn-outline-warning mt-2">Go to Home</button>
          </Link>
        </div>

        <br />
      </div>
    </>
  );
};

export default AddCategory;
