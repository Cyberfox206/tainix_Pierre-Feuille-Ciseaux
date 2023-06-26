const coups = 'PFPPFFFPPFCPPPPPFFCCP';
let newstr = "";

for (let i = 0; i < coups.length; i++) {
    if (coups[i] === "P") {
        newstr += "F";
    } else if (coups[i] === "F") {
        newstr += "C";
    } else {
        newstr += "P";
    }
}

console.log(newstr);