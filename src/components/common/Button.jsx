import React from "react";

export const Button = ({ title, leftSvg, rightSvg, onClick }) => {
  return (
    <div
      className="bg-[#050824] min-w-[240px] max-w-[240px] h-[50px] flex items-center justify-center gap-[6px] rounded-full mt-[50px] cursor-pointer hover:opacity-90"
      onClick={onClick}
    >
      <link rel="stylesheet" href="" />
      <div>{leftSvg}</div>
      <div className="text-[#FFFFFF] font-medium">{title}</div>
      <div>{rightSvg}</div>
    </div>
  );
};
