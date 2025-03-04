import * as migration_20250129_190005 from './20250129_190005';
import * as migration_20250304_220800 from './20250304_220800';

export const migrations = [
  {
    up: migration_20250129_190005.up,
    down: migration_20250129_190005.down,
    name: '20250129_190005',
  },
  {
    up: migration_20250304_220800.up,
    down: migration_20250304_220800.down,
    name: '20250304_220800'
  },
];
