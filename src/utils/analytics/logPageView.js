import ReactGa from 'react-ga';

export default function logPageView() {
  if (typeof window !== undefined) {
    ReactGa.set({
      page: window.location.pathname
    });
    ReactGa.pageview(window.location.pathname);
  }
}
