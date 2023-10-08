import React from "react";
import IconProps from "./IconProps";

const CartIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className = "",
  onClick = () => {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className} fill-current`}
      onClick={(e) => onClick(e)}
      viewBox="0 0 24 24"
    >
      <path d="M11.476 8.853c-.469-.288-.616-.903-.328-1.372l3.004-5.004c.191-.312.517-.477.849-.477.776 0 1.259.855.851 1.519l-3.005 5.005c-.294.479-.91.611-1.371.329zm3.426.147l-.351.569c-.548.896-1.503 1.431-2.553 1.431-1.202 0-2.359-.72-2.812-2h-9.186v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2h-9.098zm-5.902 9c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm4 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm4 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4z" />
    </svg>
  );
};

export default CartIcon;
