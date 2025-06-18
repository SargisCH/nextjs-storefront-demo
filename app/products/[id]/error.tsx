"use client";

import { useEffect, useState } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    console.error("Product Page Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-700 max-w-xl">
        We couldn’t load the product you were looking for. It might have been
        removed or there was a technical issue.
      </p>

      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Try Again
      </button>

      <details className="mt-6 text-left bg-white shadow rounded p-4 max-w-xl w-full text-sm text-gray-700">
        <summary
          className="cursor-pointer font-semibold text-gray-900"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? "Hide technical details" : "Show technical details"}
        </summary>
        <pre className="mt-2 whitespace-pre-wrap">{error.message}</pre>
        {error.digest && (
          <p className="mt-2 text-gray-500">Digest: {error.digest}</p>
        )}
      </details>
    </div>
  );
}
