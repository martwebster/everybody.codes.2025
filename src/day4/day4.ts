export const calculatePart3 = (data: string[]): number => {
    const start = parseInt(data.first()!);
    const end = parseInt(data.last()!);

    const gears = data.filter(line => line.includes("|"));
    let previousGear = start;
    let total = 1;

    for (const gear of gears) {
        const [leftGear, rightGear] = gear.split("|").toNumbers();
        total *= previousGear / leftGear;
        previousGear = rightGear;
    }

    total *= previousGear / end;
    return Math.trunc(total * 100);   
}
