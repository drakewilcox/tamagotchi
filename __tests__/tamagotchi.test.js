import { Tamagotchi } from '../src/tamagotchi.js';

describe('Tamagotchi', () => {
  jest.useFakeTimers();
  let tamagotchi;

  beforeEach(function() {
    tamagotchi = new Tamagotchi();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should create new object with 100% food, happiness, and sleep level', () => {
    expect(tamagotchi.name).toEqual("");
    expect(tamagotchi.sleep).toBe(100);
    expect(tamagotchi.happiness).toBe(100);
    expect(tamagotchi.foodLevel).toBe(100)
  });
  test('should check that food levels decrease every second', () => {
    tamagotchi.getHungry();
    jest.advanceTimersByTime(1000 + 1);
    expect(tamagotchi.foodLevel).toBe(90)
  });
  test('should check that sleep levels decrease every second', () => {
    tamagotchi.getTired();
    jest.advanceTimersByTime(1000 + 1);
    expect(tamagotchi.sleep).toBe(90)
  });
  test('should check that happiness levels decrease every second', () => {
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000 + 1);
    expect(tamagotchi.happiness).toBe(90)
  });
  test('should refill food level', () => {
    tamagotchi.getHungry();
    jest.advanceTimersByTime(1000 + 1);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toBe(100);
  });
  test('timer should stay busy for 4 seconds after feeding', () => {
    tamagotchi.feed();
    expect(tamagotchi.busy).toBe(true)
    jest.advanceTimersByTime(1000 *4 + 1);
    expect(tamagotchi.busy).toBe(false)
  });
  test('should refill sleep level', () => {
    tamagotchi.getTired();
    jest.advanceTimersByTime(1000 + 1);
    tamagotchi.bedTime();
    expect(tamagotchi.sleep).toBe(100);
  });
  test('timer should stay busy for 4 seconds after sleeping', () => {
    tamagotchi.bedTime();
    expect(tamagotchi.busy).toBe(true);
    jest.advanceTimersByTime(1000 *4 +1);
    expect(tamagotchi.busy).toBe(false);
  });
  test('should refill happiness level', () => {
    tamagotchi.getSad();
    jest.advanceTimersByTime(1000 + 1);
    tamagotchi.play();
    expect(tamagotchi.happiness).toBe(100);
  });
  test('timer should stay busy for 4 seconds after playing', () => {
    tamagotchi.play();
    expect(tamagotchi.busy).toBe(true);
    jest.advanceTimersByTime(1000 * 4 +1);
    expect(tamagotchi.busy).toBe(false);
  });
  



});
