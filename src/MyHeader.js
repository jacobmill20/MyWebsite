import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function MyHeader() {
	return (
		<header>
			<h1 className="site-title">
				<Link to="/">Jacob Miller's Interactive Résumé</Link> 
			</h1>
			<nav className="nav">
				<ul>
					<CustomLink to="/about">About Me</CustomLink>
					<CustomLink to="/projects">Projects</CustomLink>
					<CustomLink to="/games">Games</CustomLink>
				</ul>
			</nav>
		</header>
	);
}

function CustomLink({ to, children, ...props }){
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true})
	
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{ children }
			</Link>
		</li>
	)
}
