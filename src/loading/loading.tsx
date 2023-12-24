import { LoadingProps } from "./loading.types";

export const Loading: React.FC<LoadingProps> = ({ theme = "blue" }) => {
  return (
    <div className="flex justify-center h-full items-center mx-auto">
      <div
        className={`inline-block text-${theme}-400 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
