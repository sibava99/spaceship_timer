import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{Button} from 'antd'
import 'antd/dist/antd.css'
import Handle from 'rc-slider/lib/Handles/Handle';
import Youtube from 'react-youtube'
import { url } from 'inspector';
import axios from 'axios'

const MovieWindow = ({ url }: { url: string }) => {
	return (
		<Youtube videoId='https://youtu.be/J442-ti-Dhg'></Youtube>
	);
}
type MissionData = {
	id: string
	mission: string
	rocket: string
}


const Home: React.VFC = () => {
	const [isVisibleYoutube, setIsVisibleYoutube] = useState<boolean>(false)
	const [id, setId] = useState<string>("")
	const [mission, setMission] = useState<string>("")
	const [rocket, setRocket] = useState<string>("")

	const dummy = {
		id: "https://youtu.be/J442-ti-Dhg"
	};

	// const createMoviewindow = ({ id, mission, rocket}: MissionData) => {
	// 	return (
	// 		<div>
	// 			<h2>{missionName}</h2>
	// 			<h2>{rocketName}</h2>
	// 			<Youtube videoId={videoId} />
	// 		</div>
	// 	);
	// }
	
	// const getData = () => {
	// 	axios
	// 	  .get("https://api.spacexdata.com/v3/missions")
	// 	  .then(response => {
	// 		console.log("res", response.data);
	// 		setMissions(response.data);
	// 	  })
	// 	  .catch(error => {
	// 		console.log("Error: ", error);
	// 		setError(error);
	// 		setIsFetchingData(false);
	// 	  });
	//   };
	

	const onClick = () => {
		setIsVisibleYoutube(!isVisibleYoutube)
		setId("J442-ti-Dhg")
		setMission("Starlink-15 (v1.0)")
		setRocket("Falcon 9")
	}

	return (
		<div>
			<h1>Spaceship Timer</h1>
			<Button type="primary" onClick={() => onClick()}
			>Receive a Mission!!</Button>
			{isVisibleYoutube && <Youtube videoId='J442-ti-Dhg' />}
			{id && <>{id}</>}
			{mission && <>{mission}</>}
			{rocket && <>{ rocket }</>}
		</div>
	);
}

ReactDOM.render(
	<Home />,
	document.getElementById('root')
);

