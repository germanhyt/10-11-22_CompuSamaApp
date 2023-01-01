module.exports = (current, previous) => {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return 'Hace ' + Math.round(elapsed/1000) + ' segundos';
    }

    else if (elapsed < msPerHour) {
        return 'Hace ' + Math.round(elapsed/msPerMinute) + ' minutos';
    }

    else if (elapsed < msPerDay ) {
        return 'Hace ' + Math.round(elapsed/msPerHour ) + ' horas';
    }

    else if (elapsed < msPerMonth) {
        return 'Aproximadamente ' + Math.round(elapsed/msPerDay) + ' dias';
    }

    else if (elapsed < msPerYear) {
        return 'Aproximadamente ' + Math.round(elapsed/msPerMonth) + ' meses';
    }

    else {
        return 'Aproximadamente ' + Math.round(elapsed/msPerYear ) + ' años';
    }
}