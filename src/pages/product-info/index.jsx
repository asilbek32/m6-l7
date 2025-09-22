import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setActiveImg(res.data.images[0]); // birinchi rasmni asosiy qilib olamiz
      });
  }, [id]);

  return (
    <div>
      <Link to={"/"}>
        <div className="px-[7px] md:px-[40px] lg:mx-[70px] xl:mx-[139px] mb-[20px] flex items-center">
          <p className="text-[14px] text-[#7E818C]">Bosh sahifa</p>
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ui-icon title-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </Link>

      <div className="px-[7px] md:px-[40px] lg:mx-[70px] xl:mx-[139px]">
        {activeImg && <img src={activeImg} alt="active product" className="w-[400px] rounded" />}
        <h3>{product.title}</h3>
      </div>

     
      <div className="flex flex-col gap-2">
        {product.images?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="product"
            className={`w-16 h-16 border cursor-pointer rounded ${
              activeImg === img ? "border-purple-500" : "border-gray-300"
            }`}
            onClick={() => setActiveImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductInfo;
