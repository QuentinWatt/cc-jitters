import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isOpenSelector } from "../../store/menuSlice/selectors";
import { closeMenu } from "../../store/menuSlice/menu";
import { Link, useLocation } from "react-router-dom";
import ClickOutside from "../shared/ClickOutside";
import "./SideNavigation.css";

const SideNavigation: React.FC = () => {
  const ref = useRef(0);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isOpen = useAppSelector(isOpenSelector);

  useEffect(() => {
    if (ref.current > 1) {
      dispatch(closeMenu());
    }
    ref.current++;
  }, [location, dispatch]);

  return (
    <ClickOutside onClickOutside={() => dispatch(closeMenu())}>
      <nav className={`navigation-panel ${isOpen ? "open" : null}`}>
        <div className="py-2 border-b border-b-coffee-brown-600 text-center">
          <span className="font-bold text-2xl text-white">CC Jitters</span>
        </div>
        <ul>
          <li>
            <Link to="/" className="navigation-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="navigation-link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/orders" className="navigation-link">
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </ClickOutside>
  );
};

export default SideNavigation;
