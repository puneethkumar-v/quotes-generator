const Content = ({ content, author }) => {
  return (
    <div className="w-full flex justify-center align-center m-auto">
      <div className="bg-card py-10 px-6 w-auto max-w-3xl relative rounded-lg shadow-xl">
        <h1
          id="content"
          className=" text-xl font-decca font-semibold md:text-2xl lg:text-3xl "
        >
          {content}
        </h1>
        <p className="text-right font-decca text-lg mt-3 md:text-xl lg:text-2xl">
          -{author}
        </p>
      </div>
    </div>
  );
};

export default Content;
