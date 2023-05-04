import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test 1', () => {
        expect(classNames('a', {}, [])).toBe('a');
    });

    test('test 2', () => {
        expect(classNames('a', { throwable: true }, ['fucked', 'bitched']))
            .toBe('a fucked bitched throwable');
    });

    test('test 3', () => {
        expect(classNames('a', {}, ['fucked', 'bitched']))
            .toBe('a fucked bitched');
    });
});
