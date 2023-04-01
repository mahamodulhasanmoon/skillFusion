import { Link } from "react-router-dom";


const TrackCards = ({category}:{category:any}) => {
  const {name,headline} = category;
    return (
        <div className="py-5 bg-white  hover:border-shade_deep border-2 rounded-xl hover:bg-shade shadow-md ">
           <div className="flex-col flex md:flex-row items-center">
            <img className="h-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdQXY-qLpRtNzNrlcjk-bzmWe65M_6oX3WP5PXgYjGw&s" alt="" />
            <div className="items mx-3 flex justify-between items-left">
              <div className="w-full">
              <h2 className="text-2xl text-text text-left font-bold">{name}</h2>
                <p className="text-xl text-left text-text mt-3 font-medium">{headline}</p>
               <div className="flex justify-between pr-5 mt-3"> 
               <small className="text-text font-bold text-lg text-left">6 course </small>
               <Link to ='/' className="text-primary font-bold text-lg text-left underline underline-offset-4">show all </Link>
               </div>
              </div>
            
            </div>
            
           </div>
        </div>
    );
};

export default TrackCards;