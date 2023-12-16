import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[30px]" };
const variants = {
  fill: {
    light_blue_800: "bg-light_blue-800 text-white-A700",
    light_green_900: "bg-light_green-900 text-white-A700",
    blue_300: "bg-blue-300 text-white-A700",
    white_A700: "bg-white-A700",
    red_A100_a5: "bg-red-A100_a5 text-black-900",
    light_green_A100: "bg-light_green-A100 text-black-900",
    deep_purple_200_01: "bg-deep_purple-200_01 text-white-A700_a2",
    light_blue_900: "bg-light_blue-900 text-white-A700",
    deep_purple_A200: "bg-deep_purple-A200",
    blue_A100: "bg-blue-A100",
    purple_800: "bg-purple-800",
    gray_500: "bg-gray-500 text-white-A700",
    orange_50_a5: "bg-orange-50_a5 text-black-900",
    teal_900: "bg-teal-900 text-white-A700",
    blue_700: "bg-blue-700 text-white-A700",
    green_900: "bg-green-900 text-white-A700",
    lime_800_01: "bg-lime-800_01 text-white-A700",
    blue_800: "bg-blue-800 text-white-A700",
    yellow_800: "bg-yellow-800 text-white-A700",
    blue_300_c9: "bg-blue-300_c9 text-white-A700",
    purple_700: "bg-purple-700 text-white-A700",
    purple_500: "bg-purple-500 text-white-A700",
    teal_600: "bg-teal-600 text-white-A700",
    yellow_800_a5: "bg-yellow-800_a5 text-black-900",
    red_800: "bg-red-800",
    deep_purple_A200_01: "bg-deep_purple-A200_01 text-white-A700",
    yellow_900: "bg-yellow-900 text-white-A700",
    lime_800_02: "bg-lime-800_02 text-white-A700",
    teal_300: "bg-teal-300 text-white-A700",
    light_green_700: "bg-light_green-700 shadow-bs text-white-A700",
    deep_purple_200: "bg-deep_purple-200 text-black-900",
    gray_600: "bg-gray-600 text-white-A700_a2",
    green_800_01: "bg-green-800_01 text-white-A700_a2",
    green_800: "bg-green-800 text-white-A700_a2",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[9px]",
  md: "p-[18px]",
  lg: "p-[30px] sm:px-5",
  xl: "p-[35px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "light_blue_800",
    "light_green_900",
    "blue_300",
    "white_A700",
    "red_A100_a5",
    "light_green_A100",
    "deep_purple_200_01",
    "light_blue_900",
    "deep_purple_A200",
    "blue_A100",
    "purple_800",
    "gray_500",
    "orange_50_a5",
    "teal_900",
    "blue_700",
    "green_900",
    "lime_800_01",
    "blue_800",
    "yellow_800",
    "blue_300_c9",
    "purple_700",
    "purple_500",
    "teal_600",
    "yellow_800_a5",
    "red_800",
    "deep_purple_A200_01",
    "yellow_900",
    "lime_800_02",
    "teal_300",
    "light_green_700",
    "deep_purple_200",
    "gray_600",
    "green_800_01",
    "green_800",
  ]),
};

export { Button };
