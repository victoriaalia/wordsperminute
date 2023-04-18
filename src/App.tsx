import { ReactElement, useEffect, useState } from "react"; 

const WORDS = [ 
    'abacus',
    'abdomen',
    'abdominal',
    'abide',
    'ablaze',
    'able',
    'abode',
    'abrasion',
    'abrasive',
    'abrasively',
    'abrupt',
    'abruptly',
    'absence',
    'absent',
    'absentee',
    'absenteeism',
    'absenteeist',
    'abruptness',
    'absence',
    
];

export default function WordsPerMinute() {
    const [word, setWord] = useState(() => WORDS[Math.random() * WORDS.length | 0]);
    const [characterCount, setCharacterCount] = useState(0);
    const [buffer, setBuffer] = useState("");
    const [time, setTime] = useState(0);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();


    if (buffer === word) {
      setWord(WORDS[Math.random() * WORDS.length | 0]);
      setCharacterCount((characterCount) => characterCount + word.length);
      setBuffer("");}
    }

    useEffect(() => {
      if (time != 0) {
        const timeout = setTimeout(() => setTime(time - 1), 1000);


        return () => clearTimeout(timeout);
      }
    }, [time])
    

    return (
    <div style={{display: "flex", flexDirection: "column", gap: 12, textAlign: "center"}}> 
      <h1>WORDS PER MINUTE</h1>
      {Boolean(time) && <h2 style={{fontSize: 48}}>{word}</h2>}
      <h3> Characters typed: {characterCount}</h3>
      <h4> Remaining time: {time}</h4>
      {time ? (
        <form onSubmit={handleSubmit}>
        <input autoFocus type="text" value={buffer} onChange={(e) => setBuffer(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      ) : (
        <button onClick={() => setTime(60)}> PLAY </button>
      )}
      </div>
    ); 
}