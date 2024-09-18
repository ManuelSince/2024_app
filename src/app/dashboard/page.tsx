import { TimeLine } from "../_components/timeline";
import { center } from "../_components/timeline/ressources";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Dashboard <span className="m-5 text-[hsl(280,100%,70%)]">page</span>
        </h1>
      </div>

      <TimeLine {...{ center }} />
    </div>
  );
}
