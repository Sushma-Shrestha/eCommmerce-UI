import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-[6px]",
  icbRoundedBorder12: "rounded-[12px]",
  icbCircleBorder25: "rounded-[25px]",
  icbRoundedBorder4: "rounded-[4px]",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  FillGreen600: "bg-green_600 text-gray_50",
  FillBlue50: "bg-blue_50 text-gray_901",
  OutlineBlueA700: "border-[1px] border-blue_A700 border-solid text-blue_A700",
  FillBluegray100: "bg-bluegray_100 text-black_902",
  OutlineBluegray400:
    "border-[1px] border-bluegray_400 border-solid text-black_902",
  icbOutlineBluegray101: "border-[1px] border-bluegray_101 border-solid",
  icbOutlineBlueA700:
    "bg-white_A700 border-[1px] border-blue_A700 border-solid shadow-bs",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
  icbOutlineBluegray100: "border-[1px] border-bluegray_100 border-solid",
};
const sizes = {
  sm: "p-[4px]",
  md: "pr-[8px] py-[8px]",
  lg: "p-[12px]",
  xl: "p-[17px]",
  smIcn: "p-[10px]",
  mdIcn: "p-[13px]",
  lgIcn: "p-[16px]",
  xlIcn: "p-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "icbRoundedBorder12",
    "icbCircleBorder25",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "FillGreen600",
    "FillBlue50",
    "OutlineBlueA700",
    "FillBluegray100",
    "OutlineBluegray400",
    "icbOutlineBluegray101",
    "icbOutlineBlueA700",
    "icbOutlineBlack9000c",
    "icbOutlineBluegray100",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
  ]),
};

Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBlueA700",
  size: "xl",
};
export { Button };
