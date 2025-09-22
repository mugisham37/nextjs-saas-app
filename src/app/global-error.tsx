"use client";

// import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Sentry.captureException(error);
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
            <p className="text-gray-600 mb-4">An error has occurred. Please try again later.</p>
            <button 
              onClick={() => reset()} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}