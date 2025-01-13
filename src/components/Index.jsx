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
    <div className="m-4 flex flex-col gap-2 sm:gap-4 ">
      <ul className="grid grid-cols-4 gap-2 sm:gap-4 ">
        <li className="col-span-1 h-52 sm:h-72 lg:h-[34rem]">
          <img
            src={sea}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-square"
          />
        </li>
        <li className="col-span-2 h-52 sm:h-72 lg:h-[34rem]">
          <img
            src={chun}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-[4/3]"
          />
        </li>
        <li className="col-span-1 h-52 sm:h-72 lg:h-[34rem]">
          <img
            src={vis}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-square"
          />
        </li>
      </ul>
      <ul className="grid grid-cols-4 gap-2 sm:gap-4 ">
        <li className="flex flex-col gap-2 justify-between col-span-1 h-52 sm:h-72 lg:h-[34rem]">
          <div className=" h-24 sm:h-36 lg:h-[16.5rem]">
            <img
              src={rest}
              alt="sea"
              className="rounded-3xl object-cover w-full h-full aspect-square"
            />
          </div>
          <div className=" h-24 sm:h-36 lg:h-[16.5rem]">
            <img
              src={baddie}
              alt="sea"
              className="rounded-3xl object-cover w-full h-full aspect-square"
            />
          </div>
        </li>
        <li className="col-span-1  h-52 sm:h-72 lg:h-[34rem]">
          <img
            src={astro}
            alt="sea"
            className="rounded-3xl object-cover w-full h-full aspect-square"
          />
        </li>
        <li className="flex flex-col gap-2 justify-between col-span-2 h-52 sm:h-72 lg:h-[34rem]">
          <div className=" h-24 sm:h-36 lg:h-[16.5rem]">
            <img
              src={room}
              alt="sea"
              className="rounded-3xl object-cover w-full h-full aspect-square"
            />
          </div>
          <div className=" h-24 sm:h-36 lg:h-[16.5rem]">
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
