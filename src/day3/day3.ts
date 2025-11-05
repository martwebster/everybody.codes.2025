export const findContainers = (line: string): number | undefined => {

    var numbers =  line.split(",").toNumbers().sortDescending();

    var total = 0;
    var last = 0;
    for (var value of numbers){
        if (value === last){
            continue;
        }
        total = total + value;
        last = value;
    }
    return total;
}


export const findLowestContainer = (line: string): number | undefined => {

    var numbers =  line.split(",").toNumbers().sortAscending();

    var total = 0;
    var last = 0;
    var count = 0;

    for (var value of numbers){
        if (value === last){
            continue;
        }
        total = total + value;
        last = value;
        count++;
        if (count ==20){
            break;
        }
    }
    return total;
}

export const packCreates = (line: string): number | undefined => {

    var numbers =  line.split(",").toNumbers().sortDescending();

    var groups = numbers.groupByCount();

    var sortedGroups = Array.from(groups.entries()).sort((a, b) => b[1] - a[1]);
    
    return sortedGroups.first()?.[1]
}
