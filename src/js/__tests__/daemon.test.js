import Daemon from "../daemon";

test("testing Daemon class", () => {
    const testDeamon = new Daemon('Balrog');
    expect(testDeamon).toEqual({
        name: 'Balrog',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
});
