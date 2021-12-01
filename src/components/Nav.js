const Nav = ({ fetchQuotes }) => {
  return (
    <div className="flex justify-between align-center py-6">
      <h1 className="text-lg font-decca font-medium capitalize italic lg:text-2xl align-middle">
        random quotes
      </h1>
      <button
        className="px-3 py-1 bg-gray-600 rounded-md shadow-lg text-white lg:px-6 lg:py-2"
        onClick={fetchQuotes}
      >
        Generate
      </button>
    </div>
  );
};

export default Nav;
