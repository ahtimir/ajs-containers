/* eslint-disable linebreak-style */

import Character from '../Character';
import Team from '../Team';

test('Team creation test', () => {
  const team = new Team('TestDummies');
  const result = { name: 'TestDummies', members: new Set() };
  expect(team).toEqual(result);
});

test('add method test', () => {
  const team = new Team('TestDummies');
  const joe = new Character('Dummy');
  team.add(joe);
  const result = {
    name: 'TestDummies',
    members: new Set([{
      name: 'Dummy',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Doubles error test', () => {
  const team = new Team('TestDummies');
  const joe = new Character('Dummy');
  team.add(joe);
  expect(() => team.add(joe)).toThrow();
});

test('addAll method test', () => {
  const team = new Team('TestDummies');
  const joe = new Character('Dummy');
  const shmoe = new Character('Blockhead');
  const doe = new Character('Puppet');
  team.addAll(joe, shmoe, doe);
  const result = {
    name: 'TestDummies',
    members: new Set([{
      name: 'Dummy',
      level: 1,
      health: 100,
    },
    {
      name: 'Blockhead',
      level: 1,
      health: 100,
    },
    {
      name: 'Puppet',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('array conversion test', () => {
  const team = new Team('TestDummies');
  const joe = new Character('Dummy');
  const shmoe = new Character('Blockhead');
  const doe = new Character('Puppet');
  team.addAll(joe, shmoe, doe);
  const result = [
    {
      name: 'Dummy',
      level: 1,
      health: 100,
    },
    {
      name: 'Blockhead',
      level: 1,
      health: 100,
    },
    {
      name: 'Puppet',
      level: 1,
      health: 100,
    }];
  expect(team.toArray()).toEqual(result);
});
