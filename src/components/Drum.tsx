import { useState } from "react";
import Display from "./Display";
import Pad from "./Pad"
import RangeInput from "./RangeInput";
import SwitchButton from "./SwitchButton";

const keys: string[] = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const audios: string[] = [
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
]

const clipDes: string[] = ["Heater 1", "Heater 2", "Heater 3", "Heater 4", "Clap", "Open HH", "Kick n' Hat", "Kick", "Closed HH"];

function Drum() {

    const [volume, setVolume]   = useState<number>(100);
    const [display, setDisplay] = useState<string>("");
    const [powerOn, setPowerOn] = useState<boolean>(true);

    const handleVolume = (newValue: number) => {
        setVolume(newValue);
        setDisplay(`Volume: ${newValue}`);
        window.setTimeout(() => {
            if (display.includes("Volume")) {
                setDisplay("");
            }
        }, 1000);
    }

  return (
    <div id="drum-machine" className="w-[400px] md:w-[650px] border-4 border-yellow-500 py-2 pb-6 px-6 bg-gray-300">
        <div className="text-black font-bold text-end text-2xl italic">FCC</div>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 grid grid-cols-3 gap-2 mb-10 md:mb-0">
                {
                    keys.map((key, index) => {
                        return <Pad value={key} id={key} src={audios[index]} volume={volume} isPowerOn={powerOn} setDisplay={setDisplay} clipDes={clipDes[index]} key={index} />
                    })
                }
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-evenly items-center space-y-4">
                <SwitchButton label="Power" isActive={powerOn} setIsActive={setPowerOn}/>
                <Display value={display}/>
                <RangeInput min={0} max={100} step={1} value={volume} onChange={handleVolume}/>
            </div>
        </div>
    </div>
  )
}

export default Drum