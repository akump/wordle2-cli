import fetch from 'node-fetch';
const [word] = process.argv.slice(2);

console.log(word)
const wordle = async function(){
    const res = await fetch(` https://api.memecenter.org/words/verify/${word}`);
    const data = await res.json();
    console.log(data)
}

wordle();