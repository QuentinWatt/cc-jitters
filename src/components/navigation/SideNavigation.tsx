import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isOpenSelector } from "../../store/menuSlice/selectors";
import { closeMenu } from "../../store/menuSlice/menu";
import ClickOutside from "../shared/clickOutside";
import "./SideNavigation.css";
import { Link } from "react-router-dom";

const SideNavigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(isOpenSelector);

  return (
    <ClickOutside onClickOutside={() => dispatch(closeMenu())}>
      <nav className={`navigation-panel ${isOpen ? "open" : null}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </ClickOutside>
  );
};

export default SideNavigation;
