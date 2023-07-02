import Daemon from "../daemon";

test("testing Character damage function", () => {
    const testDummy = new Daemon('Balrog', 'Daemon');
    testDummy.damage(20);
    expect(testDummy.health).toEqual(88);
});

test("testing Character damage error function", () => {
    expect(() => {
        const testDummy = new Daemon('Balrog', 'Daemon');
        testDummy.health = 0;
        testDummy.damage(5);
    }).toThrowError('Персонаж уже мертв');
});