export default class Character {
  constructor(cell) {
    this._cell = cell;
    this._attack = 100;
  }

  get attack() {
    const distanceFactor = 1 - (this._cell - 1) * 0.1;
    let attack = this._attack * distanceFactor;

    if (this._stoned) {
      const stonedModifier = Math.log2(this._cell) * 5;
      attack = Math.max(attack - stonedModifier, 0);
    }

    return Math.round(Math.max(attack, 0));
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}
