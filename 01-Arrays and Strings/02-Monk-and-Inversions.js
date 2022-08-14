process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function countInversions(M, N) {
    let count = 0;
    for (let x1 = 1; x1 <= N; x1++) {
        for (let y1 = 1; y1 <= N; y1++) {
            for (let x2 = x1; x2 <= N; x2++) {
                for (let y2 = y1; y2 <= N; y2++) {
                    if (M[x1][y1] > M[x2][y2]) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

function main(input) {
    let stdout_output = '';
    let inputArr = input.split('\n');
    let T = parseInt(inputArr[0]);
    for (let i = 1; T > 0; i += N + 1) {
        N = parseInt(inputArr[i]);
        let M = [];
        for (let j = 1; j <= N; j++) {
            M[j] = [null, ...inputArr[i + j].split(' ').map(Number)];
        }
        stdout_output += countInversions(M, N) + '\n';
        T--;
    }
    process.stdout.write(stdout_output);
}