export const calculatePart3 = (data: string[]): number => {

    var start = Number(data[0]);
    var end = Number(data.last());

    var gears = data.filter (it => it.indexOf("|")> -1);
    var currentGear = start;
    var total = 1;
    for (var gear of gears){
        var gearValue = Number(gear.substringBefore("|"));

        total = total * (currentGear/gearValue)

        var currentGear = Number(gear.substringAfter("|"));
    }
    total = total * (currentGear/end)
    return Math.trunc(total * 100)
    
}
