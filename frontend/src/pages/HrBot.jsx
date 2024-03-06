import React, { useEffect, useState } from "react";
import talkingVideo from "../assets/talking.mp4";
import stillVideo from "../assets/still.mp4";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
function HrBot() {
	const [isTalking, setIsTalking] = React.useState(false);
	const texts = [
		"Hello",
		"Tell me something about yourself",
		"Why do you think we should hire you?",
		"If there would be a conflict between you and your team member, how would you resolve it?",
	];
	const [textIndex, setTextIndex] = React.useState(0);

	useEffect(() => {
		setTimeout(() => {
			setIsTalking(!isTalking);
		}, 1000);
	}, [isTalking]);

	return (
		<div className="flex h-screen bg-gray-200 AppGlass">
			<Sidebar />
			<div className="flex flex-col w-full overflow-auto">
				<ProfileHeader title={"Mock HR Interview"} />
				{/* <div className="p-10">
					<MainDash />
				</div> */}

				<TextToSpeech text={texts[textIndex]} isPaused={!isTalking} />
			</div>
		</div>
	);
}

export default HrBot;

const TextToSpeech = ({ text, isPaused }) => {
	const [utterance, setUtterance] = useState(null);
	const [voice, setVoice] = useState(window.speechSynthesis.getVoices()[2]);
	const [pitch, setPitch] = useState(1);
	const [rate, setRate] = useState(1);
	const [volume, setVolume] = useState(1);

	useEffect(() => {
		const synth = window.speechSynthesis;
		const u = new SpeechSynthesisUtterance(text);
		setUtterance(u);

		// Add an event listener to the speechSynthesis object to listen for the voiceschanged event
		synth.addEventListener("voiceschanged", () => {
			const voices = synth.getVoices();
			setVoice(voices[0]);
		});

		return () => {
			synth.cancel();
			synth.removeEventListener("voiceschanged", () => {
				setVoice(null);
			});
		};
	}, [text]);

	const handlePlay = () => {
		const synth = window.speechSynthesis;

		if (isPaused) {
			synth.resume();
		} else {
			utterance.voice = voice;
			utterance.pitch = pitch;
			utterance.rate = rate;
			utterance.volume = volume;
			synth.speak(utterance);
		}
	};

	const handlePause = () => {
		const synth = window.speechSynthesis;
		synth.pause();
	};

	const handleStop = () => {
		const synth = window.speechSynthesis;
		//setIsPaused(false);
		synth.cancel();
	};

	return (
		<div>
			<div className="rounded-[100%]">
				<video
					autoPlay
					loop
					muted
					key={isPaused ? 1 : 0}
					width={500}
					height={500}
					style={{ transition: "opacity 0.5s ease-in-out" }} // Added transition style
					className="rounded-[100%]"
				>
					<source src={isPaused ? stillVideo : talkingVideo} type="video/mp4" />
				</video>
			</div>
			{/* <label>
				Voice:
				<select value={voice?.name} onChange={handleVoiceChange}>
                {window.speechSynthesis.getVoices().map((voice) => (
						<option key={voice.name} value={voice.name}>
							{voice.name}
						</option>
					))}
				</select>
			</label> */}

			<br />

			{/* <label>
				Pitch:
				<input
					type="range"
					min="0.5"
					max="2"
					step="0.1"
					value={pitch}
					onChange={handlePitchChange}
				/>
			</label>

			<br />

			<label>
				Speed:
				<input
					type="range"
					min="0.5"
					max="2"
					step="0.1"
					value={rate}
					onChange={handleRateChange}
				/>
			</label>
			<br />
			<label>
				Volume:
				<input
					type="range"
					min="0"
					max="1"
					step="0.1"
					value={volume}
					onChange={handleVolumeChange}
				/>
			</label>

			<br /> */}

			{/* <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
			<button onClick={handlePause}>Pause</button>
			<button onClick={handleStop}>Stop</button> */}
		</div>
	);
};
