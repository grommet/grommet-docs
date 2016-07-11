import { createHistory, createMemoryHistory } from 'history';

var history;
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  history = createMemoryHistory();
} else {
  history = createHistory();
}

export default history;
