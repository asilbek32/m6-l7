import React from "react";
import { Link } from "react-router-dom";
function Card({ product }) {
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className="flex flex-col gap-1">
          <div>
            <img src={product.thumbnail} alt="" />
          </div>
          <span className="text-[14px] text-[#7F4DFF]">
            {product.discountPercentage}$
          </span>
          <p className="text-[#7E818C] text-[12px]">{product.price}$</p>
          <p className="text-[F12026] text-[14px]">{product.title}</p>
          <p className="text-[#7E818C]">{product.rating}</p>
          <button className="bg-[#7000FF] text-white rounded-[6px] w-full py-[8px]">
            add
          </button>
        </div>
      </Link>

    </>
  );
}

export default Card;
