import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-zinc-100 py-12 rounded-lg flex items-center justify-center h-screen">
      <div className="text-center">
        <h1>Oops! 404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="py-2 px-4 bg-slate-400 mt-5 rounded-3xl hover:text-white duration-300">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
