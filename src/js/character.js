export default class Character {
    constructor(name, type) {
        const types = ["Bowman", "Daemon", "Magician", "Swordsman", "Undead", "Zombie"];
        if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Проверте название персонажа');
        }
        if (!types.includes(type)) {
            throw new Error('Не правильный тип персонажа');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        }
}