import ReactGA from 'react-ga';
import config from './config';

export default function initialize() {
  const { trackerId, ...configObject } = config;
  ReactGA.initialize(trackerId, {
    ...configObject
  });
}
