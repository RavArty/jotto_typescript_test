import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { guessWord } from '../../redux/actions/actions';

export interface IInputProps {
  correctGuess: boolean;
  guessWord: Function;
}
export interface IInputeState {
  currentGuess: string;
}
// interface DispatchFromProps {
//   guessWord: (guessedWord: string) => string;
// }
// interface IStoreState {
//   correctGuess: boolean;
// }

export class _Input extends Component<IInputProps, IInputeState> {
  constructor(props: IInputProps) {
    super(props);

    this.state = {
      currentGuess: ''
    };
  }

  submitGuessedWord = (evt: React.MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  };

  render() {
    const contents = this.props.correctGuess ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          value={this.state.currentGuess}
          onChange={evt => this.setState({ currentGuess: evt.target.value })}
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          onClick={evt => this.submitGuessedWord(evt)}
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({
  correctGuess
}: IInputProps): { correctGuess: boolean } => {
  return { correctGuess };
};

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
//   guessWord: guessedWord => dispatch(guessWord(guessedWord))
// });

export const Input = connect(mapStateToProps, { guessWord })(_Input);
