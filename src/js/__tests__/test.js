import Character  from "../character";
import Bowman from "../bowman";
import Daemon from "../daemon";
import Magician from "../magician";
import Swordsman from "../swordsman";
import Undead from "../undead";
import Zombie from "../zombie";

test("testing Character error type", () => {
    expect(() => {
        const testError = new Character('Sam', 'zombi');
    }).toThrowError('Не правильный тип персонажа');
});

test("testing Character name sring", () => {
    expect(() => {
        const testError = new Character(100, "Zombie");
    }).toThrowError('Проверте название персонажа');
});

test("testing Character long name", () => {
    expect(() => {
        const testError = new Character('ZombieZombieZombie', "Zombie");
    }).toThrowError('Проверте название персонажа');
});

test("testing Character short name error", () => {
    expect(() => {
        const testError = new Character('D', 'Daemon');
    }).toThrowError('Проверте название персонажа');
});

test("testing Bowman class", () => {
    const testBowman = new Bowman('Legolas', 'Bowman');
    expect(testBowman).toEqual({
        name: 'Legolas',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
});

test("testing Daemon class", () => {
    const testDeamon = new Daemon('Balrog', 'Daemon');
    expect(testDeamon).toEqual({
        name: 'Balrog',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
});

test("testing Magician class", () => {
    const testMagician = new Magician('Gandalf', 'Magician');
    expect(testMagician).toEqual({
        name: 'Gandalf',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
});

test("testing Swordsman class", () => {
    const testSwordsman = new Swordsman('Boromir', 'Swordsman');
    expect(testSwordsman).toEqual({
        name: 'Boromir',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});

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

test("testing Zombie class", () => {
    const testZombie = new Zombie('Goblin', 'Zombie');
    expect(testZombie).toEqual({
        name: 'Goblin',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});