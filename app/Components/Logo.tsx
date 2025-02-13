import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex gap-3 items-center">
      <Image
        src={"/logo-dark.svg"}
        width={40}
        height={40}
        alt="Logo"
        className="hidden dark:block"
      />
      <Image
        src={"/logo.svg"}
        width={40}
        height={40}
        alt="Logo"
        className="dark:hidden"
      />
      <h1 className="font-bold text-black dark:text-white">Jotion</h1>
    </div>
  );
};

export default Logo;
