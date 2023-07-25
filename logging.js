
const base = '║                                                   ║';

function formatLog(message) {
    const maxLength = 54;
    const remainingSpace = maxLength - message.length - 2;
    const leftSpaces = ' '.repeat(Math.floor(remainingSpace / 2));
    const rightSpaces = ' '.repeat(Math.floor(remainingSpace / 2));
    const formattedMessage = `║${leftSpaces}${message}${rightSpaces}║`;
    return formattedMessage;
}


function logBlankPillars() {
    console.log(base);
}


function log(route, message, start, middle, end, logRoute) {
    const startMessage = '╔══════════════════════ < * > ══════════════════════╗';
    const endMessage =   '╚═══════════════════════════════════════════════════╝'
    const formattedRouteMessage = formatLog(route);
    let formattedMessage = message
    try {
        formattedMessage = formatLog(message);
    } catch (err) {

    }
    if (start && middle && end) {
        console.log(startMessage);
        logBlankPillars();
        if (logRoute) { 
            console.log(formattedRouteMessage);
            logBlankPillars();
        }
        console.log(formattedMessage);
        logBlankPillars();
        console.log(endMessage);
    } 
    else if (start && middle && !end) {
        console.log(startMessage);
        logBlankPillars();
        if (logRoute) {
            console.log(formattedRouteMessage);
            logBlankPillars();
        }
        console.log(formattedMessage);
        logBlankPillars();
    }
    else if (start && !middle && !end) {
        console.log(startMessage);
        logBlankPillars();
        if (logRoute) {
            console.log(formattedRouteMessage);
            logBlankPillars();
        }
    } else if (!start && !middle && end) {
        if (logRoute) console.log(formattedRouteMessage);
        console.log(endMessage);
    } else if (start && !middle && end) {
        logBlankPillars();
        console.log(startMessage);
        logBlankPillars();
        console.log(endMessage);
    } else if (!start && middle && end) {
        console.log(formattedMessage);
        logBlankPillars();
        if (logRoute) console.log(formattedRouteMessage);
        console.log(endMessage)
    }
    else if (middle) {
        if (logRoute) console.log(formattedRouteMessage);
        console.log(formattedMessage);
        logBlankPillars();
    }
}


module.exports = { log };