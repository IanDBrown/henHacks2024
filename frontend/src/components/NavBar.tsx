import { Link } from "react-router-dom";
import nav_css from "../css/navbar.module.css";

export default function NavBar() {
	return (
		<nav className={nav_css.navbar}>
			<Link to="/" className={nav_css.navItem}>
				Home
			</Link>
			<Link to="/homework-helper" className={nav_css.navItem}>
				Homework Helper
			</Link>
			<Link to="/about" className={nav_css.navItem}>
				About
			</Link>
		</nav>
	);
}