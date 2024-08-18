import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "홈",
      icon: HiHome,
    },
    {
      name: "검색",
      icon: HiMagnifyingGlass,
    },
    {
      name: "관심 콘텐츠",
      icon: HiPlus,
    },
    {
      name: "영화",
      icon: HiPlayCircle,
    },
    {
      name: "시리즈",
      icon: HiTv,
    },
    {
      name: "오리지널",
      icon: HiStar,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] 
        md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="data:image/jpeg;base64,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"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
