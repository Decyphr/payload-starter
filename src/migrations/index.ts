import * as migration_20250129_190005 from './20250129_190005';
import * as migration_20250304_220800 from './20250304_220800';
import * as migration_20250305_183904 from './20250305_183904';
import * as migration_20250308_194102 from './20250308_194102';
import * as migration_20250314_184329 from './20250314_184329';
import * as migration_20250325_235337 from './20250325_235337';

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
    name: '20250305_183904',
  },
  {
    up: migration_20250308_194102.up,
    down: migration_20250308_194102.down,
    name: '20250308_194102',
  },
  {
    up: migration_20250314_184329.up,
    down: migration_20250314_184329.down,
    name: '20250314_184329',
  },
  {
    up: migration_20250325_235337.up,
    down: migration_20250325_235337.down,
    name: '20250325_235337'
  },
];
