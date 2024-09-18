import { Favorites } from "../_components/favorites";
import FavoriteServices from "../_components/favoriteServices";

export default function Page() {
  return (
    <div className="rounded-xl border-2 border-gray-600 p-4">
      <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Company <span className="m-5 text-[hsl(280,100%,70%)]">page</span>
      </h1>
      <div className="flex w-full justify-end">
        <div className="relative h-[50px] w-[50px]">
          <Favorites />
        </div>

        {/* <FavoriteServices /> */}
      </div>
    </div>
  );
}
