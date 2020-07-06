
export function getGlancableCode(snippet: string) {
  const errorPattern = 'if err != nil {';
  const positions = getMatchedPostions(snippet, errorPattern);

  if (positions.length === 0) {
    return snippet;
  }

  let editedSnippet = '';
  let snippetLength = snippet.length, snippetIndex = 0;
  let currentMatchingIndex: number | undefined = positions[0];

  while ((snippetIndex < snippetLength) && currentMatchingIndex !== undefined) {

    if (snippetIndex < currentMatchingIndex) {
      editedSnippet += snippet[snippetIndex];
      snippetIndex++;
    }

    else if (snippetIndex > currentMatchingIndex) {
      currentMatchingIndex = positions.shift();
    }

    else {
      snippetIndex += errorPattern.length;
      snippetIndex = getEndOfErrorBlock(snippetIndex, snippet);
      currentMatchingIndex = positions.shift();
    }

  }

  editedSnippet += snippet.slice(snippetIndex);
  return editedSnippet;
}

function getMatchedPostions(str: string, txt: string): number[] {

  if (str.length === 0 || txt.length === 0) {
    return [];
  }

  let currentIndex = 0;
  let matchedPositions: number[] = [];
  let matchedIndex: number;

  while ((matchedIndex = str.indexOf(txt, currentIndex)) > -1) {
    matchedPositions.push(matchedIndex);
    currentIndex = matchedIndex + txt.length;
  }

  return matchedPositions;
}

// Detecting the closing Bracket of the Error Block
function getEndOfErrorBlock(index: number, snippet: string) {

  let count = 1; // Keeps count of active opening brackets

  while (count !== 0 && index < snippet.length) {
    if (snippet[index] === '{') {
      count++;
    }
    else if (snippet[index] === '}') {
      count--;
      if (count === 0) {
        index++;
        break;
      }
    }
    index++;
  }

  return index;
}