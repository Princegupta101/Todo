import React from 'react';

const SummarySidebar = ({ summary, onSummarize, isLoading }) => {
  return (
    <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded-lg h-fit">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="ml-2 text-gray-600">Generating summary...</span>
        </div>
      ) : summary ? (
        <p className="text-gray-700">{summary}</p>
      ) : (
        <p className="text-gray-500 italic">No summary available. </p>
      )}
      <button
        onClick={onSummarize}
        className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? 'Summarizing...' : 'Summarize and Send to Slack'}
      </button>
    </div>
  );
};

export default SummarySidebar;