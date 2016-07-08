const DEFAULT_TITLE = 'Grommet';

export function updatePageTitle (title) {
  if (document) {
    if (title) {
      document.title = `${title} | Grommet`;
    } else {
      document.title = DEFAULT_TITLE;
    }
  }
};

export default {updatePageTitle};
