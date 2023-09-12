import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oh no!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}