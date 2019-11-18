import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import { IInputProps, IInputeState } from './Input';
import { findByTestAttr, storeFactory } from '../../testUtils/testUtils';
import { StoreCreator } from 'redux';
import { Input, _Input } from './Input';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const mockDispatchfn = jest.fn();

// const props: any = {
//   correctGuess: false
//   // guessWord: jest.fn()
// };

// let wrapper: any = mount(
//   <Provider store={mockStore()}>
//     <Input />
//   </Provider>
// );
// console.log('wrapper is', wrapper.debug());

// const setup = (initialState = {}) => {
//   const store = storeFactory(initialState);
//   const wrapper = shallow(<Input store={store} />);
//   console.log(wrapper.debug);
// };

//setup();
const setup = (
  props: IInputProps = { correctGuess: false, guessWord: jest.fn() }
) => {
  return shallow(<_Input {...props} />);
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      const initialState = { correctGuess: true, guessWord: jest.fn() };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not render submit button', () => {
      const submit = findByTestAttr(wrapper, 'submit-button');
      expect(submit.length).toBe(0);
    });
  });
});
