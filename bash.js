process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    if(data.toString().trim() === 'pwd') {
        console.log(`${process.cwd()}`);
    }
    // const cmd = data.toString().trim();
    
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');
})