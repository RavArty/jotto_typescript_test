import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testUtils/testUtils';
import GuessedWords from './GuessedWords';
import { IGuessedWordsProps } from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props: IGuessedWordsProps = { ...defaultProps }) => {
  return shallow(<GuessedWords {...props} />);
};

test('does not throw warning with expected props', () => {});

describe('if there are no words guessed', () => {
  test('renders without error', () => {});
  test('renders instructions to guess a word', () => {});
});

describe('if there are words guessed', () => {
  test('renders without error', () => {});
  test('renders "guessed words" section', () => {});
  test('correct number of guessed words', () => {});
});
