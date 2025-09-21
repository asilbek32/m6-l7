import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../../componenets/card/card";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products));
  }, []);
 

  return (
    <>
      <main className="flex overflow-x:auto px-[7px]  md:px-[40px] lg:mx-[70px] xl:mx-[139px] mb-[20px] flow rouded">
        <img
          src="https://images.uzum.uz/d34kujt2llnd6jumpft0/main_page_banner.jpg"
          alt=""
        />
        <img
          src="https://images.uzum.uz/d33pucj4eu2up0auf680/main_page_banner.jpg"
          alt=""
        />
        <img
          src="https://images.uzum.uz/d34kujt2llnd6jumpft0/main_page_banner.jpg"
          alt=""
        />
        <img
          src="https://images.uzum.uz/d33pucj4eu2up0auf680/main_page_banner.jpg"
          alt=""
        />
      </main>

      <section className="grid grid-cols-4 gap-2  px-[7px] md:px-[40px] lg:mx-[70px] xl:mx-[139px] mb-[20px]">
        <div className="flex items-center justify-center gap-2 py-[8px] px-[10px] bg-[#EFEFEF] rounded-[8px] ">
          <div className="w-[40px]">
            <img
              src="https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b"
              alt=""
            />
          </div>
          <p>Onalar va bolalar uchun</p>
        </div>
        <div className="flex items-center justify-center gap-2 py-[8px] px-[10px] bg-[#EFEFEF] rounded-[8px] ">
          <div className="w-[40px]">
            <img
              src="https://static.uzum.uz/static/promo_images/a266cae1-db3a-4b40-a984-cf9220d9b2e8"
              alt=""
            />
          </div>
          <p>Arzon narxlar kafolati</p>
        </div>
        <div className="flex items-center justify-center gap-2 py-[8px] px-[10px] bg-[#EFEFEF] rounded-[8px] ">
          <div className="w-[40px]">
            <img
              src="	https://static.uzum.uz/static/promo_images/a64b835e-8bc5-4ada-9f56-aa7f0c96d792"
              alt=""
            />
          </div>
          <p>Zamonaviy bozor</p>
        </div>
        <div className="flex items-center justify-center gap-2 py-[8px] px-[10px] bg-[#EFEFEF] rounded-[8px] ">
          <div className="w-[40px]">
            <img
              src="	https://static.uzum.uz/static/promo_images/82fbe195-8d13-4bcc-b709-c8c1eac63e13"
              alt=""
            />
          </div>
          <p>Hamrox</p>
        </div>
      </section>

      <section className=" px-[7px] md:px-[40px] lg:mx-[70px] xl:mx-[139px] mb-[20px]">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-[28px] text-[#1F2026] font-bold">Mashhur</h2>
          <svg
            data-v-638ef030=""
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ui-icon  title-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
              fill="black"
            ></path>
          </svg>
        </div>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
       {data.map((product) => (
          <Card key={product.id} product={product}/>
        ))}
       </div>
      </section>
    </>
  );
}

export default Home;
