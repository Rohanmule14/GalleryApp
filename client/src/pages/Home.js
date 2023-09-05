import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  getSingleImage,
} from "../redux/reducers/gallerySlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, []);
  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id));
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "cadetblue" }}>
        <div className="text-center">
          <button
            onClick={() => {
              dispatch(getAllImages());
            }}
            className="btn btn-outline-warning me-2 mt-3"
            data-filter="all"
          >
            All
          </button>
          {categories &&
            categories.map((item) => {
              return (
                <button
                  className="btn btn-outline-warning mx-2 mt-3"
                  onClick={() => handleCategories(item._id)}
                  data-filter="hdpe"
                >
                  {item.name}
                </button>
              );
            })}
        </div>
        <br />
        <div className="row">
          {images &&
            images.map((item) => {
              return (
                <div className="col-lg-4 mb-4">
                  <img
                    src={`http://localhost:5000/${item.name}`}
                    className="img-fluid rounded"
                    style={{ width: "400px", height: "250px" }}
                    alt=".."
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
