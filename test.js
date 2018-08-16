import test from 'ava';
import main from './index';

test('Test main', (t) => {
  t.is(main(), 'Yea boi');
});

test('1 != 2', (t) => {
  t.not(1, 2);
});
