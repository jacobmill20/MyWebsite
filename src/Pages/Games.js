export default function Games() {
	const gameIDs = [ 1945289, 2045097, 1985147, 2037385, 2180454, 2461114 ];
	
	return (
		<ul>
			{gameIDs.map(num =>
				<GameCard key={num} num={num}/>
			)}
		</ul>
		)
}

function GameCard( props ){
	return (
			<div>
				<iframe title={props.num} src={`https://itch.io/embed/${props.num}?linkback=true`} className="game-widget">
				</iframe>
			</div>
		)
}