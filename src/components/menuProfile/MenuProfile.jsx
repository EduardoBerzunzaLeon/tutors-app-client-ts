import React, { useState } from 'react';

import classNames from 'classnames';

import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import { signOutStart } from '../../redux/auth/auth.actions';
import { selectCurrentUser } from '../../redux/auth/auth.selectors';
import { uiCloseSider } from '../../redux/ui/ui.actions';

export const MenuProfile = () => {
  const [expanded, setExpanded] = useState(false);
  const { name, image } = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const onClick = (event) => {
    setExpanded((prevState) => !prevState);
    event.preventDefault();
  };

  const handleLogout = () => {
    dispatch(uiCloseSider());
    dispatch(signOutStart());
  };

  return (
    <div className="layout-sidebar-dark">
      <div className="layout-profile">
        <div>
          <img
            src={`assets/layout/images/${!!image || 'profile.png'}`}
            alt="Profile"
          />
        </div>
        <button className="p-link layout-profile-link" onClick={onClick}>
          <span className="username">{name.first}</span>
          <i className="pi pi-fw pi-cog" />
        </button>
        <CSSTransition
          classNames="p-toggleable-content"
          timeout={{ enter: 1000, exit: 450 }}
          in={expanded}
          unmountOnExit
        >
          <ul className={classNames({ 'layout-profile-expanded': expanded })}>
            <li>
              <button type="button" className="p-link">
                <i className="pi pi-fw pi-user" />
                <span>Account</span>
              </button>
            </li>
            <li>
              <button type="button" className="p-link">
                <i className="pi pi-fw pi-inbox" />
                <span>Notifications</span>
                <span className="menuitem-badge">2</span>
              </button>
            </li>
            <li>
              <button onClick={handleLogout} type="button" className="p-link">
                <i className="pi pi-fw pi-power-off" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </CSSTransition>
      </div>
    </div>
  );
};
