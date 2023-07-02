import Undead from "../undead";

test("testing Undead class", () => {
    const testUndead = new Undead('Sauron', 'Undead');
    expect(testUndead).toEqual({
        name: 'Sauron',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
});
