import Magician from '../Character';
import Daemon from '../Character';
describe('Check error', () => {
  test('checker case', () => {
    Magician.stoned = true;
    Daemon.stoned = true;
    const result = [
      new Magician(1).attack,
      new Daemon(2).attack,
      new Magician(3).attack,
      new Daemon(4).attack,
      new Magician(5).attack,
      new Daemon(6).attack,
    ];
    
    expect(result).toEqual([100, 85, 72, 60, 48, 37]);
  });

  test('checker case2', () => {
    Magician.stoned = false;
    Daemon.stoned = false;
    const result = [
      new Magician(1).attack,
      new Daemon(2).attack,
      new Magician(3).attack,
      new Daemon(4).attack,
      new Magician(5).attack,
      new Daemon(6).attack,
    ];
    
    expect(result).toEqual([100, 90, 80, 70, 60, 50]);
  });
})