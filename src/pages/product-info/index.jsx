import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
      setActiveImg(res.data.images[0]); // birinchi rasmni asosiy qilib olamiz
    });
  }, [id]);

  return (
    <div className="px-[7px] md:px-[40px] lg:mx-[70px] xl:mx-[139px]">
      <Link to={"/"}>
        <div className=" mb-[20px] flex items-center">
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

      <div className="flex justify-between">
        <div>
          <div className="flex flex-col gap-2 mb-5">
            <h3 className="text-[24px] text-[#1F2026] font-bold">
              {product.title}
            </h3>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[16px] "
                  data-test-id="img__star-rating"
                  data-v-63395425=""
                >
                  <path d="M11.259 2.522c.245-.701 1.237-.701 1.482 0l2.102 6.009 6.386.129c.746.015 1.052.963.457 1.412l-5.087 3.832 1.851 6.08c.217.711-.586 1.297-1.197.874L12 17.225l-5.253 3.633c-.611.423-1.414-.163-1.197-.875l1.85-6.079-5.086-3.832c-.595-.449-.289-1.397.457-1.412l6.386-.13 2.102-6.008Z"></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[16px] "
                  data-test-id="img__star-rating"
                  data-v-63395425=""
                >
                  <path d="M11.259 2.522c.245-.701 1.237-.701 1.482 0l2.102 6.009 6.386.129c.746.015 1.052.963.457 1.412l-5.087 3.832 1.851 6.08c.217.711-.586 1.297-1.197.874L12 17.225l-5.253 3.633c-.611.423-1.414-.163-1.197-.875l1.85-6.079-5.086-3.832c-.595-.449-.289-1.397.457-1.412l6.386-.13 2.102-6.008Z"></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[16px] "
                  data-test-id="img__star-rating"
                  data-v-63395425=""
                >
                  <path d="M11.259 2.522c.245-.701 1.237-.701 1.482 0l2.102 6.009 6.386.129c.746.015 1.052.963.457 1.412l-5.087 3.832 1.851 6.08c.217.711-.586 1.297-1.197.874L12 17.225l-5.253 3.633c-.611.423-1.414-.163-1.197-.875l1.85-6.079-5.086-3.832c-.595-.449-.289-1.397.457-1.412l6.386-.13 2.102-6.008Z"></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[16px] "
                  data-test-id="img__star-rating"
                  data-v-63395425=""
                >
                  <path d="M11.259 2.522c.245-.701 1.237-.701 1.482 0l2.102 6.009 6.386.129c.746.015 1.052.963.457 1.412l-5.087 3.832 1.851 6.08c.217.711-.586 1.297-1.197.874L12 17.225l-5.253 3.633c-.611.423-1.414-.163-1.197-.875l1.85-6.079-5.086-3.832c-.595-.449-.289-1.397.457-1.412l6.386-.13 2.102-6.008Z"></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[16px] "
                  data-test-id="img__star-rating"
                  data-v-63395425=""
                >
                  <path d="M11.259 2.522c.245-.701 1.237-.701 1.482 0l2.102 6.009 6.386.129c.746.015 1.052.963.457 1.412l-5.087 3.832 1.851 6.08c.217.711-.586 1.297-1.197.874L12 17.225l-5.253 3.633c-.611.423-1.414-.163-1.197-.875l1.85-6.079-5.086-3.832c-.595-.449-.289-1.397.457-1.412l6.386-.13 2.102-6.008Z"></path>
                </svg>
              </div>
              <p className="text-[14px] text-[#8b8e99]">{product.rating}</p>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div >
              {activeImg && (
                <img
                  src={activeImg}
                  alt="active product"
                  className="w-[400px] rounded"
                />
              )}
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
        </div>
        <div>
          <div className="px-[20px] py-[24px] border-1 border-solid border-gray-300 rounded-[10px] flex flex-col gap-2">
            <div className="px-[16px] py-[12px] bg-[#ffe100] rounded-xl flex items-center gap-3">
              <p className="text-[14px] font-semibold">Kuz yarmirkasi 🔥</p>
              <div className="flex bg-white rounded-3xl p-1">
                <p>⌚</p>
                <p>196:21:05</p>
              </div>
            </div>
            <div>
              <span className="text-[32px] text-[#7F4Dff] font-medium">
                {product.discountPercentage}$
              </span>
              <p className="text-[16px] text-[1f2026]">
                uzum kartasiz {product.price}$
              </p>
            </div>
            <div className="bg-[#f0f2f5] rounded-[10px] p-3 ">
              <div className="flex justify-between items-center bg-[#dcdfe4] rounded-2xl px-[5px] mb-5">
                <p className="text-[#7e818c] hover:bg-white rounded cursor-pointer">
                  24 oy
                </p>
                <p className="text-[#7e818c] hover:bg-white rounded cursor-pointer">
                  12 oy
                </p>
                <p className="text-[#7e818c] hover:bg-white rounded cursor-pointer">
                  6 oy
                </p>
                <p className="text-[#7e818c] hover:bg-white rounded cursor-pointer">
                  3 oy
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="bg-amber-300 text-black p-1 rounded-[8px]">
                  3 500 so'm{" "}
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
