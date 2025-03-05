import * as migration_20250129_190005 from './20250129_190005';
import * as migration_20250304_220800 from './20250304_220800';
import * as migration_20250305_183904 from './20250305_183904';

export const migrations = [
  {
    up: migration_20250129_190005.up,
    down: migration_20250129_190005.down,
    name: '20250129_190005',
  },
  {
    up: migration_20250304_220800.up,
    down: migration_20250304_220800.down,
    name: '20250304_220800',
  },
  {
    up: migration_20250305_183904.up,
    down: migration_20250305_183904.down,
    name: '20250305_183904'
  },
];
