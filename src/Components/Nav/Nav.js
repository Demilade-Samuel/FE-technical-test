import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade, Slide } from "react-awesome-reveal";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

const Nav = () => {
	const [isToggled, setToggled] = useState(false);

	const handleToggleClick = () => {
		setToggled(!isToggled);
	};

	const [isFixed, setIsFixed] = useState(false);

	const scrollThreshold = 140; // Adjust this value based on when you want the navbar to become fixed

	const handleScroll = () => {
		if (window.scrollY > scrollThreshold) {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`   ${isToggled ? "navbg" : ""} ${
				isFixed ? "navbar navbar-expand-lg navv" : " navbar navbar-expand-lg  "
			}`}
		>
			<div className="container ">
				<Slide direction="left">
					<a className="navbar-brand" href="#hero">
						Herox
					</a>
				</Slide>
				<button
					className={`navbar-toggler ${isToggled ? "collapsed" : ""}`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded={isToggled ? "true" : "false"}
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon
						icon={isToggled ? faTimes : faBars}
						onClick={handleToggleClick}
						className="hamburger"
					/>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-4 mb-lg-0 ">
						<Slide direction="down" duration={600}>
							<li
								class="nav-item mb-lg-0 mb-4 mt-4 mt-lg-0"
								onClick={handleToggleClick}
							>
								<a class="nav-link" href="#">
									Services
								</a>
							</li>
							<li class="nav-item mb-lg-0 mb-4">
								<a class="nav-link" href="#">
									Portfolio
								</a>
							</li>
							<li class="nav-item mb-lg-0 mb-4">
								<a class="nav-link" href="#">
									Contact Us
								</a>
							</li>
							<li class="nav-item mb-lg-0 mb-4">
								<a class="nav-link" href="#">
									About Us
								</a>
							</li>
						</Slide>
					</ul>
					<Fade direction="in" duration={1500}>
						<form class="d-flex" role="" action="/register.js">
							<button class="btn loginBTN" type="submit">
								Register / Login
							</button>
						</form>
					</Fade>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
