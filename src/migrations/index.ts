import * as migration_20250129_190005 from './20250129_190005';

export const migrations = [
  {
    up: migration_20250129_190005.up,
    down: migration_20250129_190005.down,
    name: '20250129_190005'
  },
];
