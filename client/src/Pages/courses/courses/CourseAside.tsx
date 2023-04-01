
import CategoriesFilter from "./sort/CatrgoriesFiltter";
import Price from "./sort/Price";
import Types from "./sort/Types";


const CourseAside = () => {


    return (
        <aside className="sticky top-0 mt-10">
          <Types/>
          <CategoriesFilter/>
          <Price/>
        </aside>
    );
};

export default CourseAside;