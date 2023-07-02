import Swordsman from "../swordsman";

test("testing Swordsman class", () => {
    const testSwordsman = new Swordsman('Boromir');
    expect(testSwordsman).toEqual({
        name: 'Boromir',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});
