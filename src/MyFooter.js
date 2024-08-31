import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';

export default function MyFooter() {
	
	
	return (
		<footer>
			<div className='footer-icons'>
				<ul>
					<FooterIcon to="https://www.linkedin.com/in/jacob-miller-software" icon={faLinkedin}/>
					<FooterIcon to="https://www.linkedin.com/in/jacob-miller-software" icon={faGithub}/>
					<FooterIcon to="https://jacobmill.itch.io" icon={faItchIo}/>
				</ul>
			</div>
			<p>&copy;This is where I would put my copyright if I had one. </p>
		</footer>
	);
}

function FooterIcon({ to, icon}) {
	return (
		<li>
			<Link to={to}>
						<FontAwesomeIcon className="icons" icon={icon} />
			</Link>
		</li>
	);
}