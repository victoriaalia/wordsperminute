import { useState } from "react"; 

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
];

export default function WordsPerMinute() {
    const [characterCount, setCharacterCount] = useState(0);

    return <div> Characters typed: {characterCount}</div>; 
}