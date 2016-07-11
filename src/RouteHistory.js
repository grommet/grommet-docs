import { createHistory, createMemoryHistory } from 'history';

let history;
if (typeof document !== 'undefined') {
  history = createHistory();
} else {
  history = createMemoryHistory();
}

export default history;
