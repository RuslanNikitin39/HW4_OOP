import Bowman from "../bowman";

test("testing Bowman class", () => {
    const testBowman = new Bowman('Legolas');
    expect(testBowman).toEqual({
        name: 'Legolas',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
});
