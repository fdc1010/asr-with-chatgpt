import React from "react";

const sizeClasses = {
  txtDMSansBold28: "font-bold font-dmsans",
  txtFrauncesSemiBold271: "font-fraunces font-semibold",
  txtDMSansRegular14Bluegray800: "font-dmsans font-normal",
  txtDMSansBold11: "font-bold font-dmsans",
  txtFrauncesSemiBold36: "font-fraunces font-semibold",
  txtInterBold128: "font-bold font-inter",
  txtFrauncesSemiBold48: "font-fraunces font-semibold",
  txtDMSansRegular10: "font-dmsans font-normal",
  txtFrauncesLight16: "font-fraunces font-light",
  txtFrauncesSemiBold30: "font-fraunces font-semibold",
  txtInterBold72: "font-bold font-inter",
  txtFrauncesSemiBold3221: "font-fraunces font-semibold",
  txtDMSansMedium16: "font-dmsans font-medium",
  txtDMSansItalic27: "font-dmsans font-normal italic",
  txtDMSansRegular16Gray10090: "font-dmsans font-normal",
  txtDMSansRegular1717: "font-dmsans font-normal",
  txtDMSansRegular22: "font-dmsans font-normal",
  txtDMSansRegular14: "font-dmsans font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtDMSansRegular16: "font-dmsans font-normal",
  txtDMSansRegular17: "font-dmsans font-normal",
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
