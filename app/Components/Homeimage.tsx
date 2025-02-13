const Homeimage = () => {
  return (
    <div className="flex my-16 overflow-hidden">
      <>
        <img
          src="/documents-dark.png"
          alt="document-dark"
          className="w-full max-w-[400px] hidden dark:block"
        />
        <img
          src="/reading-dark.png"
          alt="reading-dark"
          className="w-full max-w-[400px] hidden md:dark:block"
        />
        <img
          src="/documents.png"
          alt="document-light"
          className="w-full max-w-[400px] dark:hidden"
        />
        <img
          src="/reading.png"
          alt="reading-light"
          className="hidden md:block w-full max-w-[400px] dark:hidden"
        />
      </>
    </div>
  );
};

export default Homeimage;
