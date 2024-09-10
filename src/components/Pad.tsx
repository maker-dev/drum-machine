import { useEffect, useRef } from "react";

interface PadProps {
    value: string;
    id: string;
    src: string;
    volume: number;
    isPowerOn: boolean;
    setDisplay: (message: string) => void;
    clipDes: string;
}

function Pad({value, id, src, volume, isPowerOn, setDisplay, clipDes}: PadProps) {

  const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (id.toUpperCase() === e.key.toUpperCase() && isPowerOn) {
        audioRef.current?.play();
        setDisplay(clipDes)
      }
    };

    // Adding the keypress event listener
    window.addEventListener('keypress', handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
    }, [clipDes, id, isPowerOn, setDisplay])

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = volume / 100;
      }
    }, [volume])

  const playAudio = () => {
    if (audioRef.current && isPowerOn) {
      audioRef.current?.play();
      setDisplay(clipDes)
    }
  }

  return (
    <div onClick={playAudio} id={id} className="drum-pad bg-gray-600 h-20 rounded flex justify-center items-center font-bold cursor-pointer shadow-xl" style={{boxShadow: "black 3px 3px 5px"}}>
        {value}
        <audio ref={audioRef} className="clip" id={id} src={src}>
        </audio>
    </div>
  )
}

export default Pad