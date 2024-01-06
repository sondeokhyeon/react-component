import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="w-48 overflow-y-auto border-r border-solid border-[#ededed]">
      <div className="py-2 text-center">
        <div className="py-8 underline">
          <Link to="/">Home</Link>
        </div>
        <div className=" text-center ">
          <div className="">
            <h1 className="font-bold">Component</h1>
          </div>
          <div className="mt-5">
            <ul className="flex flex-col gap-1">
              <li className="underline">
                <Link to="/component/accordion"> Accodian</Link>
              </li>
              <li className="underline">
                <Link to="/component/star-rating"> StarRating</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
