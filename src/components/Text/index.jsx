import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "sm:text-[28px] md:text-[30px] text-[32px]",
  h4: "sm:text-[24px] md:text-[26px] text-[28px]",
  h5: "sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "font-medium text-[20px]",
  body1: "text-[18px]",
  body2: "text-[16px]",
  body3: "font-medium text-[15px]",
  body4: "text-[14px]",
  body5: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
