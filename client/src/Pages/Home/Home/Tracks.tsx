import axios from "axios";
import { useEffect, useState } from "react";
import TrackCards from "../../../components/TrackCards";

const Tracks = () => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    axios
      .get("/fakedata/categories.json")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="py-20  ">
      <div className="container mx-auto">
        <div className="text-center">
          <h4 className="   text-primary   text-center px-3 rounded-full font-bold">
            dream categories
          </h4>
          <div className="max-w-[600px] mx-auto">
            <h2 className="mt-5 text-4xl font-bold ">
              Starting the journey of self-study to improve oneself
            </h2>
            <p className="mt-5 text-text text-lg font-medium">
              Set your goal, start career growth now
            </p>
          </div>
          <div className="my-10 grid lg:grid-cols-2 gap-10">
            {categories.map((category: any) => (
              <TrackCards key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
