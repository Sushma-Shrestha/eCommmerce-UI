import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100:
    "bg-white_A700 border-[1px] border-bluegray_100 border-solid",
};
const shapes = { RoundedBorder8: "rounded-[8px]" };
const sizes = { sm: "pb-[35px] pl-[8px] pt-[12px]" };

const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            sizes[size] || ""
          } ${variants[variant] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineBluegray100"]),
  size: PropTypes.oneOf(["sm"]),
};

TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder8",
  variant: "OutlineBluegray100",
  size: "sm",
};
export { TextArea };
