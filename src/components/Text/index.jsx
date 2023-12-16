import React from "react";

const sizeClasses = {
  txtInterRegular80: "font-inter font-normal",
  txtInterSemiBold50Black90002: "font-inter font-semibold",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular64: "font-inter font-normal",
  txtInterRegular30Black900: "font-inter font-normal",
  txtInterBlack50: "font-black font-inter",
  txtInterBlack70: "font-black font-inter",
  txtInterSemiBold50: "font-inter font-semibold",
  txtInterBold40: "font-bold font-inter",
  txtInterMedium30: "font-inter font-medium",
  txtInterBold80: "font-bold font-inter",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterBold60: "font-bold font-inter",
  txtInterSemiBold50Black900: "font-inter font-semibold",
  txtInterExtraBold70: "font-extrabold font-inter",
  txtInterSemiBold50Cyan900: "font-inter font-semibold",
  txtInterRegular50: "font-inter font-normal",
  txtInterSemiBold30Black900: "font-inter font-semibold",
  txtInterRegular30: "font-inter font-normal",
  txtInterRegular50Black900: "font-inter font-normal",
  txtInterRegular50Purple50001: "font-inter font-normal",
  txtInterMedium60: "font-inter font-medium",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterSemiBold60: "font-inter font-semibold",
  txtInterExtraBold40: "font-extrabold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
