function getCompleted(part, total) {
    //Finding GCD
    const gcd = (a, b) =>  {
        if (!b) return a;
        return gcd(b, a % b)
    }

    part = part.split(":")
    total = total.split(":")

    let partSeconds = +part[0] * 3600 + +part[1] * 60 + +part[2]
    let totalSeconds = +total[0] * 3600 + +total[1] * 60 + +total[2]
    const gcdResult = gcd(partSeconds, totalSeconds);
    
    const partSecondsFinal = partSeconds / gcdResult;
    const totalSecondsFinal = totalSeconds / gcdResult;

    return partSecondsFinal + '/' + totalSecondsFinal;
}

getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5