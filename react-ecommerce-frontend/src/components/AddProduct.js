import Header from "./Header";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async () => {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);

    const res = await fetch("http://localhost:8000/api/addProduct", {
      method: "POST",
      body: formData,
    });
    alert("Product added!");
  };

  return (
    <>
      <Header />
      <h1>Add Product</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          placeholder="Photo"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </>
  );
};

export default AddProduct;
