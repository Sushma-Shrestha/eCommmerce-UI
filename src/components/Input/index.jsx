import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineBluegray300:
    "bg-white_A700 border-[1px] border-bluegray_300 border-solid",
  OutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid",
  UnderLineBluegray100: "border-b-[1px] border-bluegray_100",
};
const shapes = {
  srcRoundedBorder6: "rounded-[6px]",
  RoundedBorder6: "rounded-[6px]",
};
const sizes = {
  smSrc: "pr-[13px] py-[13px]",
  mdSrc: "pr-[17px] py-[17px]",
  sm: "pb-[22px] pl-[12px] pt-[13px]",
  md: "pl-[12px] pr-[17px] py-[17px]",
  lg: "pb-[13px] pt-[18px] px-[12px]",
  xl: "sm:pr-[20px] pr-[31px] py-[31px]",
  "2xl": "pb-[17px]",
  "3xl": "pb-[33px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder6", "RoundedBorder6"]),
  variant: PropTypes.oneOf([
    "srcOutlineBluegray300",
    "OutlineBluegray100",
    "UnderLineBluegray100",
  ]),
  size: PropTypes.oneOf([
    "smSrc",
    "mdSrc",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "srcOutlineBluegray300",
  size: "mdSrc",
};

export { Input };
