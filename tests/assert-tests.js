import { assert } from '../src';

for (const value of [
    '',
    "test",
    12,
    'true',
]) {
    assert(() => ['true', 'false'].some(x => x === value));
}