import Character  from "../character";

test("testing Character error type", () => {
    expect(() => {
        const testError = new Character('Sam', 'zombi');
    }).toThrowError('Неправильный тип персонажа');
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
