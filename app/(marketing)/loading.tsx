import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black/50 flex justify-center items-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default Loading;
