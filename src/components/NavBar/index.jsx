import React from "react";

const NavBar = () => {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav__brand">
					<a className="nav__link" href="/">
						MiMarca
					</a>
				</div>
				<ul className="nav__list">
					<li>
						<a className="nav__link" href="/categoria/films">
							Películas
						</a>
					</li>
					<li>
						<a className="nav__link" href="/categoria/series">
							Series
						</a>
					</li>
					<li>
						<a className="nav__link" href="cart">
							carrito
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;