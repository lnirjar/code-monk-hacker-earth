process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    let stdout_output = '';
    const inputArr = input.split(/\n/);
    const T = parseInt(inputArr[0]);
    for (let i = 1; i < T * 2; i += 2) {
        let [N, K] = inputArr[i].split(' ').map(Number);
        let arr = inputArr[i + 1].split(' ');

        let index = N - (K % N);

        for (let j = index; j < N; j++) {
            stdout_output += arr[j] + ' ';
        }
        for (let j = 0; j < index; j++) {
            stdout_output += arr[j] + ' ';
        }
        stdout_output = stdout_output.trim();
        stdout_output += '\n';
    }

    process.stdout.write(stdout_output);
}