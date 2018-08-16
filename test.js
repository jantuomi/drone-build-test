import test from 'ava';
import main from './index';

test('Test main', (t) => {
  t.is(main(), 'Yea boi');
});
