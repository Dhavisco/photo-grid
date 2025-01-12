import sea from "../assets/sea.webp";
import chun from "../assets/chun-li.webp";
import vis from "../assets/var.webp";
import rest from "../assets/restaurant.webp";
import astro from "../assets/astronaut.webp";
import baddie from "../assets/var-baddie.webp";
import dark from "../assets/dark-mannequin.webp";
import room from "../assets/bedroom.webp";

const Index = () => {
  return (
    <div className="m-10 flex flex-col gap-4">
      <ul className="grid grid-cols-4 gap-4">
        <li className="col-span-1 border-1 rounded-3xl bg-red-500 h-96">
          <img
            src={sea}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-square"
          />
        </li>
        <li className="col-span-2 border-1 rounded-3xl bg-green-500 h-96">
          <img
            src={chun}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-[4/3]"
          />
        </li>
        <li className="col-span-1 border-1 rounded-3xl bg-blue-500 h-96">
          <img
            src={vis}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-square"
          />
        </li>
      </ul>
      <ul className="grid grid-cols-4 gap-4">
        <li className="flex flex-col gap-2 justify-between col-span-1 border-1 rounded-3xl h-96">
          <div className="border-1 rounded-3xl bg-pink-700 h-48">
            <img
              src={rest}
              alt="sea"
              className="rounded-3xl object-cover w-full h-full aspect-square"
            />
          </div>
          <div className="border-1 rounded-3xl bg-violet-700 h-48">
            <img
              src={baddie}
              alt="sea"
              className="rounded-3xl object-cover w-full h-full aspect-square"
            />
          </div>
        </li>
        <li className="col-span-1 border-1 rounded-3xl bg-gray-700 h-96">
          <img
            src={astro}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-square"
          />
        </li>
        <li className="flex flex-col gap-2 justify-between col-span-2 border-1 rounded-3xl h-96">
          <div className="border-1 rounded-3xl bg-orange-700 h-48">
            <img
              src={room}
              alt="sea"
              className="rounded-3xl object-cover w-full h-full aspect-square"
            />
          </div>
          <div className="border-1 rounded-3xl bg-red-500 h-48">
            <img
              src={dark}
              alt="sea"
              className="rounded-3xl object-cover w-full h-full aspect-square"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Index;
