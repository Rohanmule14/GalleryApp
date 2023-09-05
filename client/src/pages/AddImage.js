import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewImage, getAllCategories } from "../redux/reducers/gallerySlice";
import { Link, useNavigate } from "react-router-dom";

const AddImage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const formdata = new FormData();
  formdata.append("image", file);
  formdata.append("category", category);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const { categories } = useSelector((state) => state.gallery);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addNewImage(formdata));
    navigate("/");
  };
  return (
    <>
      <div className="container bg-dark text-white mt-5 rounded-3 fs-4 w-50">
        <div className="row">
          <div align="center">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail" className="mb-2">
                  Image:
                </label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="form-control w-75"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail" className="mb-2">
                  Category:
                </label>
                <select
                  className="form-control w-75 custom-select"
                  onChange={(e) => setCategory(e.target.value)}
                  name="category"
                >
                  <option value="">Please select</option>
                  {categories &&
                    categories.map((item) => {
                      return <option value={item._id}>{item.name}</option>;
                    })}
                </select>
              </div>
              <button type="submit" className="btn btn-outline-success mt-3">
                Upload
              </button>
            </form>
            <Link to="/">
              <button className="btn btn-outline-primary mt-2 mb-3">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImage;
