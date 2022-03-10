import { StatsReducer } from '../redux/Reducers';

const baseUrl = 'covid/GET_STATS';
describe('test the reducer function', () => {
  test('reducer returns new state', () => {
    const Fake = ['a', 'b', 'c'];
    const result = StatsReducer(undefined, { type: baseUrl, payload: Fake });
    expect(result).toEqual(Fake);
  });

  test('reducer to return empty array if action is undefined', () => {
    const newState = [];
    const result = StatsReducer(undefined, { type: undefined, payload: undefined });
    expect(result).toEqual(newState);
  });
});
