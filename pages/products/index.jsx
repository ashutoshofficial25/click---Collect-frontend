import Head from "next/head";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    brand: "Roadster",
    price: "399",
    product: "Twill Casual Shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/products%2Fshirts%2Fblack-shirt.webp?alt=media&token=35d53f60-2dd6-4638-bf7f-6812ee5e3e44",
  },
  {
    id: 2,
    brand: "Dennis Lingo",
    price: "699",
    product: "Men Slim Fit Casual Shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/products%2Fshirts%2Fpink-shirt.webp?alt=media&token=7fc81118-2c0d-4126-8301-6f8d10e75aa2",
  },
  {
    id: 3,
    brand: "Worgon",
    price: "1299",
    product: "Slim fit Casual Shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/products%2Fshirts%2Fblue-shirt.webp?alt=media&token=68b8bae2-ddb2-4a90-8d05-2d1fb8845124",
  },
  {
    id: 4,
    brand: "Tommy Hilfiger",
    price: "699",
    product: "Men Slim Fit Casual Shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/products%2Fshirts%2Fpink-shirt.webp?alt=media&token=7fc81118-2c0d-4126-8301-6f8d10e75aa2",
  },
];

const Products = () => {
  return (
    <div>
      <Head>
        <title>Products </title>
      </Head>

      <div className="text-basic my-5 ml-5">
        <span className="font-bold ">Shirts</span> -{" "}
        <span className="text-gray-500">{products.length} Items </span>
      </div>
      <div className="flex w-full">
        <div className="left-section w-64">
          <p className="text-basic font-bold">FILTERS</p>

          <hr className="my-5" />

          <ul>
            <input type="radio" name="filter" id="Men" />
            <label htmlFor="Men">Men</label>

            <br />

            <input type="radio" name="filter" id="Women" />
            <label htmlFor="Women">Women</label>
            <br />

            <input type="radio" name="filter" id="Boys" />
            <label htmlFor="Boys">Boys</label>
            <br />

            <input type="radio" name="filter" id="Girls" />
            <label htmlFor="Girls">Girls</label>
          </ul>

          <hr className="my-5" />

          <p>BRANDS</p>
        </div>
        <div className="right-section w-full">
          <div>Filters categories defined later</div>

          <hr className="my-5" />

          <div className="flex flex-wrap justify-between p-7 ml-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="card border border-gray-300 w-fit hover:shadow-md cursor-pointer mb-2"
              >
                <Image
                  height={300}
                  width={225}
                  src={product.img}
                  alt="shirts"
                />
                <div className="pl-3 py-1">
                  <p className="font-bold text-sm">{product.brand}</p>
                  <p className="text-gray-500 text-sm">{product.product}</p>
                  <p className="font-bold text-sm">Rs: {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
