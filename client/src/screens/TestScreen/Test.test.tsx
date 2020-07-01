import * as React from 'react';
import * as enzyme from 'enzyme';
import Test from './Test';

it('renders the correct text when no enthusiasm level is given', () => {
    const test = enzyme.shallow(<Test name='Daniel' />);
    expect(test.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Test name='Daniel' enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Test name='Daniel' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Test name='Daniel' enthusiasmLevel={0} />);
    })
    // .toThrow();
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Test name='Daniel' enthusiasmLevel={-1} />);
    })
    // .toThrow();
});