import Magician from "../magician";

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
