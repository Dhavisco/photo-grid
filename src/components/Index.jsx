const Index = () => {
  return (
    <div className="m-10 flex flex-col gap-4">
      <ul className="grid grid-cols-4 gap-4">
        <li className="col-span-1 border-1 rounded-3xl bg-red-500 h-40"></li>
        <li className="col-span-2 border-1 rounded-3xl bg-green-500 h-40"></li>
        <li className="col-span-1 border-1 rounded-3xl bg-blue-500 h-40"></li>
      </ul>
      <ul className="grid grid-cols-4 gap-4">
        <li className="flex flex-col gap-2 justify-between col-span-1 border-1 rounded-3xl h-40">
          <li className="border-1 rounded-3xl bg-pink-700 h-20"></li>
          <li className="border-1 rounded-3xl bg-violet-700 h-20"></li>
        </li>
        <li className="col-span-1 border-1 rounded-3xl bg-gray-700 h-40"></li>
        <li className="flex flex-col gap-2 justify-between col-span-2 border-1 rounded-3xl h-40">
          <li className="border-1 rounded-3xl bg-orange-700 h-20"></li>
          <li className="border-1 rounded-3xl bg-red-500 h-20"></li>
        </li>
      </ul>
    </div>
  );
};

export default Index;
