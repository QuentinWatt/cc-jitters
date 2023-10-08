import React, { useEffect, useRef } from "react";

interface ClickOutsideProps {
  children: string | JSX.Element | JSX.Element[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickOutside: any;
}

const ClickOutside: React.FC<ClickOutsideProps> = ({
  children,
  onClickOutside,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};

export default ClickOutside;
