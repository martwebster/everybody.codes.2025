export const findName = (names: string, directions: string): string => {

    const allNamnes = names.split(",")
    const allDirections = directions.split(",")
    var index = 0;
    for (var direction of allDirections){
        var left = direction.startsWith("L")
        var duration = Number(direction.substring(1));
        if (left){
            index = Math.max(0, index - duration)
        } else{
            index = Math.min(allNamnes.length-1, index + duration )
        }
    }
    return allNamnes[index];
}

class LinkedNode {
    name: string;
    previous?: LinkedNode;
    next?: LinkedNode;

    constructor(name: string) {
        this.name = name;
    }
}

const buildLinkedList = (names: string) : Array<LinkedNode> =>{
    const allNamnes = names.split(",")

    var previous: LinkedNode| undefined;
    const linkedNames: Array<LinkedNode>= [];
    for (var name of allNamnes){
        var linkedName = new LinkedNode(name);
        linkedName.previous = previous;
        linkedNames.push(linkedName)
        if (previous){
            previous.next = linkedName;
        }
        previous = linkedName;
    }
    linkedNames.last()!.next = linkedNames.first();
    linkedNames.first()!.previous = linkedNames.last();
    return linkedNames;
}

export const findCircleName = (names: string, directions: string): string => {
    
    var linkedNames = buildLinkedList(names);
    
    var currentName = linkedNames[0];
    for (var direction of directions.split(",")){
        var left = direction.startsWith("L")
        var duration = Number(direction.substring(1));
        
        for (var index = 0; index< duration; index++){
            if (left){
                currentName = currentName.previous!;
            } else{
                currentName = currentName.next!;
            }
        }
        console.log(currentName.name);
    }
    return currentName.name;
}



export const swapCircleName = (names: string, directions: string): string => {
    
    var linkedNames = buildLinkedList(names);

    const allDirections = directions.split(",")

    for (var direction of allDirections){
        var currentName = linkedNames[0];
        var startName = currentName;

        var left = direction.startsWith("L")
        var duration = Number(direction.substring(1));
        
        for (var index = 0; index< duration; index++){
            if (left){
                currentName = currentName.previous!;
            } else{
                currentName = currentName.next!;
            }
        }
        var endName= currentName;
        console.log("Swapping", startName.name, endName.name)
        var tempName = startName.name;
        startName.name = endName.name;
        endName.name = tempName;
    }
    return linkedNames[0].name;
}