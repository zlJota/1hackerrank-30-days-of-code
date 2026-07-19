function processData(input) {
    //Enter your code here
    const lines = input.split("\n");
    const t = parseInt(lines[0].trim());
    const result = [];
    
    for (let i = 1; i <= t; i++) {
        const s = lines[i].trim();
        let even = "";
        let odd = "";
        for (let j = 0; j < s.length; j++) {
            if (j % 2 === 0) {
                even += s[j];
            } else {
                odd += s[j];
            }
        }
        result.push(even + " " + odd);
    }
    
    console.log(result.join("\n"));

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
