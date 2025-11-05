import '../utility/extensions';
import { test, describe, expect } from 'vitest'
import { readTestData } from '../utility/fileHelper';
import { addition, calculateOpCorner, cycle, division, grid, multiply, part3, shouldBeEngraved } from './day2';

describe(`day 2`, () => {

    test('sample', () => {
        expect(multiply({x:1,y:1}, {x:2,y:2})).toStrictEqual({x:0, y:4})
        expect(multiply({x:2,y:5}, {x:3,y:7})).toStrictEqual({x:-29, y:29})
        expect(multiply({x:-2,y:5}, {x:10,y:-1})).toStrictEqual({x:-15, y:52})
        expect(multiply({x:-1,y:-2}, {x:-3,y:-4})).toStrictEqual({x:-5, y:10})

        expect(addition({x:1,y:1}, {x:2,y:2})).toStrictEqual({x:3, y:3})
        expect(addition({x:2,y:5}, {x:3,y:7})).toStrictEqual({x:5, y:12})
        
        expect(addition({x:-2,y:5}, {x:10,y:-1})).toStrictEqual({x:8, y:4})
        expect(addition({x:-1,y:-2}, {x:-3,y:-4})).toStrictEqual({x:-4, y:-6})
        

        expect(division({x:10,y:12}, {x:2,y:2})).toStrictEqual({x:5, y:6})
        expect(division({x:10,y:12}, {x:3,y:5})).toStrictEqual({x:3, y:2})
        expect(division({x:-10,y:-12}, {x:2,y:2})).toStrictEqual({x:-5, y:-6})
        expect(division({x:-11,y:-12}, {x:3,y:5})).toStrictEqual({x:-3, y:-2})

        var a={x:25,y:9}
        var val = cycle({x:0, y:0}, a)
        console.log(val)
        var val = cycle(val, a)
        console.log(val)
        var val = cycle(val, a)
        console.log(val)
        
    })


    test('part - 1', () => {
        var a={x:149,y:54}
        var val = {x:0, y:0};
        var val = cycle(val, a)
        console.log(val)
        val = cycle(val, a)
        console.log(val)
        val = cycle(val, a)
        console.log(`[${val.x},${val.y}]`)
    })

    test('part - 2', () => {
        expect(calculateOpCorner({x:35300, y:-64910})).toStrictEqual({x:36300, y: -63910})
        grid({x:35300, y:-64910}, {x:36300, y: -63910})

        expect(shouldBeEngraved({x:35630, y: -64880})).toBe(true)
        expect(shouldBeEngraved({x:35460, y: -64910})).toBe(false)

        var start = {x:-3314,y:68783}
        expect(calculateOpCorner(start)).toStrictEqual({x:-2314, y: 69783})

        expect(grid(start, calculateOpCorner(start))).toBe(565)
        
    })

    test('part - 3', () => {
        var a= {x:35300,y:-64910}
        expect(part3({x:35300, y:-64910}, {x:36300, y: -63910})).toBe(406954)

        var start = {x:-3314,y:68783}
        expect(part3(start, calculateOpCorner(start))).toBe(53482)
    })
})
