
const base = '║                                                   ║';

const formatLog = (message) => {
    const maxLength = 54;
    const remainingSpaces = maxLength - message.length - 2;
    const halfSpaceLength = Math.floor(remainingSpaces / 2)
    const leftSpaces = ' '.repeat(halfSpaceLength);
    const rightSpaces = (message.length % 2 === 0) ? ' '.repeat(halfSpaceLength - 1) : leftSpaces;
    const formattedMessage = `║${leftSpaces}${message}${rightSpaces}║`;
    return formattedMessage;
}


const logBlankPillars = () => {
    console.log(base);
}


const log = ({ startBars, endBars, route, logRoute }, message) => {
    const startMessage = '╔══════════════════════ < * > ══════════════════════╗';
    const endMessage =   '╚═══════════════════════════════════════════════════╝';
    const formattedRouteMessage = (logRoute) ? formatLog(route) : null;
    let formattedMessage = '';
    const middle = (message);
    if (middle) formattedMessage = message.length <= 51 ? formatLog(message) : message;
    if (startBars && middle && endBars) {
        console.log(startMessage);
        logBlankPillars();
        if (formattedRouteMessage) { 
            console.log(formattedRouteMessage);
            logBlankPillars();
        }
        console.log(formattedMessage);
        logBlankPillars();
        console.log(endMessage);
    } 
    else if (startBars && middle && !endBars) {
        console.log(startMessage);
        logBlankPillars();
        if (formattedRouteMessage) {
            console.log(formattedRouteMessage);
            logBlankPillars();
        }
        console.log(formattedMessage);
        logBlankPillars();
    }
    else if (startBars && !middle && !endBars) {
        console.log(startMessage);
        logBlankPillars();
        if (formattedRouteMessage) {
            console.log(formattedRouteMessage);
            logBlankPillars();
        }
    } else if (!startBars && !middle && endBars) {
        if (formattedRouteMessage) console.log(formattedRouteMessage);
        console.log(endMessage);
    } else if (startBars && !middle && endBars) {
        console.log(startMessage);
        logBlankPillars();
        if (formattedRouteMessage) {
            console.log(formattedRouteMessage);
        }
        logBlankPillars();
        console.log(endMessage);
    } else if (!startBars && middle && endBars) {
        console.log(formattedMessage);
        logBlankPillars();
        if (formattedRouteMessage) console.log(formattedRouteMessage);
        console.log(endMessage)
    }
    else if (middle) {
        if (formattedRouteMessage) console.log(formattedRouteMessage);
        console.log(formattedMessage);
        logBlankPillars();
    }
}


module.exports = { log };