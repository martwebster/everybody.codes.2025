import "../utility/extensions";
import { describe, expect, test } from "vitest";
import { readTestData } from "../utility/fileHelper";
import { countSheep, exampleFunction } from "./day10";

describe(`day 10`, () => {
	test("sample", () => {
		const data = readTestData(`./src/day10/sample.txt`);

		expect(countSheep(data, 3)).toBe(27);
	});

	test("part - 1", () => {
		const data = readTestData(`./src/day10/notes1.txt`);

		expect(countSheep(data, 4)).toBe(140);
	});

	test("part - 2", () => {
		const data = readTestData(`./src/day10/notes2.txt`);
		const sum = data.map((line) => exampleFunction(line)).sum();
		expect(sum).toBe(6);
	});

	test("part - 3", () => {
		const data = readTestData(`./src/day10/notes3.txt`);
		const sum = data.map((line) => exampleFunction(line)).sum();
		expect(sum).toBe(6);
	});
});
