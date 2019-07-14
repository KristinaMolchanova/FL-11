const maxMinutes = 60;
const maxHours = 24;

let days;
let hours;

function formatTime(minutes) {
    if (minutes >= maxMinutes) {
        hours = Math.floor(minutes / maxMinutes);
        if (hours >= maxHours) {
            days = Math.floor(hours / maxHours);
            hours = Math.floor(hours % maxHours);
        } else {
            days = 0;
        }
        minutes = minutes % maxMinutes;
    } else {
        hours = 0;
    }
    return console.log(`${days} day(s) ${hours} hour(s) ${minutes} minute(s).`);
}

formatTime(120);
formatTime(59);
formatTime(3601);