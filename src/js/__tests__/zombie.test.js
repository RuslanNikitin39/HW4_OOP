import Zombie from "../zombie";

test("testing Zombie class", () => {
    const testZombie = new Zombie('Goblin');
    expect(testZombie).toEqual({
        name: 'Goblin',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});
