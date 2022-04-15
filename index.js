function shout(string) {
    return string.toUpperCase();;
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
    let toRoommate;
    if (string === string.toLowerCase()) {
        toRoommate = "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        toRoommate = "YES INDEED!";
    } else if (string === "Let\'s have dinner together!") {
        toRoommate = "I would love to!";
    }
    return toRoommate;
}