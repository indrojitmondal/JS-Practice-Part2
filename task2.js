// find the friend with the smallest name.
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let mn= names[0].length;
let stoName;
for (const name of names) {
    
    if(name.length<mn){
        mn=name.length;
        stoName=name;
    }
}
console.log(stoName);