export function getLetterMatchCount(
  guessedWord: string,
  secretWord: string
): number {
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
}
