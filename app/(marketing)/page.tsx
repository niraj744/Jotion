import { Button } from "@/components/ui/button";
import Header from "../Components/Header";
import Homeimage from "../Components/Homeimage";
import Logo from "../Components/Logo";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="h-screen p-6">
        <div className="flex flex-col gap-3 md:gap-6 mt-10 items-center text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-[770px]">
            Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
            <span className="underline">Jotion</span>
          </h1>
          <h2 className="sm:text-xl md:text-2xl w-[330px] sm:w-[500px]">
            Jotion is the connected workspace where better, faster work happens
          </h2>
          <Button asChild>
            <RegisterLink>Get Jotion Free -&gt;</RegisterLink>
          </Button>
          <Homeimage />
        </div>
        <footer className="flex justify-between items-center py-6">
          <Logo />
          <div className="flex w-full md:w-fit gap-3 justify-between">
            <Button variant={"ghost"} className="text-gray-400">
              Privacy Policy
            </Button>
            <Button variant={"ghost"} className="text-gray-400">
              Terms & Conditions
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
