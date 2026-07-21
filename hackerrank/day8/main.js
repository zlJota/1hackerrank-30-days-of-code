function processData(input) {
    //Enter your code here
    const lines = input.split('\n');
    const n = parseInt(lines[0].trim(), 10);

    const phoneBook = {};

    for (let i = 1; i <= n; i++) {
        const [name, number] = lines[i].trim().split(' ');
        phoneBook[name] = number;
    }

    const output = [];
    for (let i = n + 1; i < lines.length; i++) {
        const query = lines[i].trim();
        if (query) {
            if (phoneBook.hasOwnProperty(query)) {
                output.push(`${query}=${phoneBook[query]}`);
            } else {
                output.push('Not found');
            }
        }
    }

    console.log(output.join('\n'));
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