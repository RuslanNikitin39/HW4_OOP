import Character  from "../character";
import Daemon from "../daemon";

test("testing Character levelUp function", () => {
    const testDumy = new Daemon('Balrog', 'Daemon');
    testDumy.levelUp();
    expect(testDumy).toEqual({
        name: 'Balrog',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    });
});

test("testing dead Character levelUp function error", () => {
    expect(() => {
        const testDummy = new Daemon('Balrog', 'Daemon');
    testDummy.health = 0;
    testDummy.levelUp();
    }).toThrowError("Нельзя повысить левел умершего")
});
