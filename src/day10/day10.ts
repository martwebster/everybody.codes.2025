export const exampleFunction = (line: string): number | undefined => {
	return Number(line);
};

export const isGood = (pos: Pos, maxX: number, maxY: number): boolean => {
	if (pos.x < 0 || pos.y < 0) {
		return false;
	}
	if (pos.x >= maxX || pos.y >= maxY) {
		return false;
	}
	return true;
};

export const getDragonMoves = (pos: Pos, max: Pos): Array<Pos> => {
	var nextPositions: Array<Pos> = [];
	nextPositions.push(pos);
	nextPositions.push({ x: pos.x + 1, y: pos.y + 2 });
	nextPositions.push({ x: pos.x + 2, y: pos.y + 1 });

	nextPositions.push({ x: pos.x + 1, y: pos.y - 2 });
	nextPositions.push({ x: pos.x + 2, y: pos.y - 1 });

	nextPositions.push({ x: pos.x - 1, y: pos.y + 2 });
	nextPositions.push({ x: pos.x - 2, y: pos.y + 1 });

	nextPositions.push({ x: pos.x - 1, y: pos.y - 2 });
	nextPositions.push({ x: pos.x - 2, y: pos.y - 1 });
	return nextPositions.filter((it) => isGood(it, max.x, max.y));
};

export const move = (pos: Pos, max: Pos, steps: number): Array<Pos> => {
	var dragons: Array<Pos> = [];
	dragons.push(pos);

	for (var step = 0; step < steps; step++) {
		dragons = dragons.flatMap((it) => getDragonMoves(it, max));
		dragons.removeDuplicates();
		displayDragonPositions(dragons, max);
		console.log("----------");
	}
	return dragons;
};

export const displayDragonPositions = (pos: Array<Pos>, max: Pos) => {
	for (var y = 0; y < max.y; y++) {
		var line = "";
		for (var x = 0; x < max.x; x++) {
			var found = pos.find((item) => item.x === x && item.y === y);
			if (found) {
				line = `${line}X`;
			} else {
				line = `${line}.`;
			}
		}
		console.log(line);
	}
};

export const countSheep = (data: string[], moves: number): number => {
	const max = { x: data[0].length, y: data.length };

	const dragonStart = data.scan((item) => item === "D");
	const sheepPositions = data.scan((item) => item === "S");

	const dragonMoves = move(dragonStart[0], max, moves);

	return sheepPositions.filter((sheep) =>
		dragonMoves.some((dragon) => dragon.x === sheep.x && dragon.y === sheep.y),
	).length;
};
