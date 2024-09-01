const colorCodes = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};

const coloryourtext = {
    red: (text) => console.log(colorCodes.red + text + colorCodes.reset),
    green: (text) => console.log(colorCodes.green + text + colorCodes.reset),
    yellow: (text) => console.log(colorCodes.yellow + text + colorCodes.reset),
    blue: (text) => console.log(colorCodes.blue + text + colorCodes.reset),
    magenta: (text) => console.log(colorCodes.magenta + text + colorCodes.reset),
    cyan: (text) => console.log(colorCodes.cyan + text + colorCodes.reset),
    white: (text) => console.log(colorCodes.white + text + colorCodes.reset)
};

export default coloryourtext
