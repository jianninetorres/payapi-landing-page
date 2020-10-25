import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import logo from "../assets/images/logo.svg"
import menu from "../assets/images/menu.svg"

const NavStyles = styled.nav`
  background-color: var(--light-grey);
  padding: var(--base-size);
  position: fixed;
  width: 100%;

  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .list-container {
    display: none;
  }

  .list-container--visible {
    display: flex;
    flex-direction: column;
  }

  .list-container__item {
    margin: 16px 0;
    font-weight: 500;
  }

  .logo {
    background: url(${logo}) no-repeat center center;
    width: 100%;
    max-width: 140px;
    height: 50px;
    padding: 16px 0;
    flex-basis: 300px;
    flex: 1 1 auto;
  }

  .menu-burger {
    background: url(${menu}) no-repeat center center;
    width: 100%;
    max-width: 50px;
    height: 50px;
    flex-basis: 50px;
    flex: 1 1 auto;

    &:hover,
    &:focus {
      border: 1px dotted var(--blue-grey);
    }
  }

  a {
    color: var(--blue-grey);
    text-decoration: none;
    width: 100%;

    &:hover,
    &:focus {
      color: var(--blue-black);
    }
  }
`

const Nav = () => {
  const [toggleNav, setToggleNav] = useState("list-container")

  const onClickNav = () => {
    return toggleNav === "list-container"
      ? setToggleNav("list-container--visible")
      : setToggleNav("list-container")
  }

  const onEnter = e => {
    if (e.keyCode === 13) {
      onClickNav()
    }
  }

  return (
    <NavStyles>
      <div className="nav-container">
        <Link to="/">
          <div
            className="logo"
            role="button"
            aria-label="home"
            tabIndex={0}
          ></div>
        </Link>
        <div
          className="menu-burger"
          onClick={onClickNav}
          onKeyUp={onEnter}
          role="button"
          aria-label="menu"
          tabIndex={0}
        ></div>
      </div>
      <ul className={toggleNav}>
        <li className="list-container__item">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="list-container__item">
          <Link to="/about">About</Link>
        </li>
        <li className="list-container__item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-container__item">
          <Link to="/demo">Schedule a Demo</Link>
        </li>
      </ul>
    </NavStyles>
  )
}

export default Nav
