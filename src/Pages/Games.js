import { Fade } from "react-awesome-reveal";

export default function Games() {
	const gameIDs = [ 1945289, 2045097, 1985147, 2037385, 2180454, 2461114 ];
	
	return (
		<Fade cascade delay={1} damping={0.2}>
			<div className="game-button-div">
				<a href="https://jacobmill.itch.io/" class="button">
					<h1>Visit my itch.io page!</h1>
				</a>
			</div>
			<ul>
				{gameIDs.map(num =>
					<GameCard key={num} num={num}/>
				)}
			</ul>
		</Fade>
		)
}

function GameCard( props ){
	return (
			<div>
				<iframe title={props.num} frameborder="0" src={`https://itch.io/embed/${props.num}?linkback=true&amp;border_width=2&amp;link_color=8a152f&amp;border_color=8a152f`} className="game-widget">
				</iframe>
			</div>
		)
}