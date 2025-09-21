import React from "react";
import { Link } from "react-router-dom";
import s from "../../assets/s.png";
import like from "../../assets/like.png";
import frame from "../../assets/Frame.png";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import logo1 from "../../assets/logo1.svg";
import arrowdawn from "../../assets/arrowdawn.svg";

function Header() {
  return (
    <nav className="px-[7px] md:px-[40px] lg:px-[70px] xl:px-[139px] mb-[20px]">
      <div className="lg:flex justify-between items-center mb-[10px] hidden">
        <img src={logo} alt="" />
        <button className="flex justify-center items-center gap-x-[8px] w-[120px] h-[40px] rounded-sm bg-[#F0F0FF] text-[#7000FF]">
          <img src={logo1} alt="" />
          Katalog
        </button>
        <div className="flex items-center justify-between w-[40%] h-[40px] border border-solid border-[#36364033] px-[10px] rounded-sm">
          <input
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
            className="outline-none pl-[16px]"
          />
          <button className="bg-[#F2F4F7] h-full w-[79px] flex items-center justify-center">
            <img src={search} alt="" />
          </button>
        </div>
        <div className="flex gap-x-[12px]">
          <div className="flex items-center gap-x-[8px]">
            <img src={frame} alt="" />
            <button className="cursor-pointer">Kirish</button>
          </div>
          <div className="flex items-center gap-x-[8px]">
            <img src={like} alt="" />
            <p>Saralangan</p>
          </div>
          <div className="flex items-center gap-x-[8px]">
            <img src={s} alt="" />
            <p>Savat</p>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between items-center hidden mb-[30px]">
        <img src="./assets/Item_margin.png" alt="" />
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Elektronika
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Maishiy texnika
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Kiyim
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Poyabzallar
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Aksessuarlar
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Goʻzallik va parvarish
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Salomatlik
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Uy-roʻzgʻor buyumlari
        </p>
        <p className="text-sm text-[#595B66] font-normal cursor-pointer">
          Qurilish va taʼmirlash
        </p>
        <div className="flex gap-x-[5px]">
          <p>Yana</p>
          <img src={arrowdawn} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
