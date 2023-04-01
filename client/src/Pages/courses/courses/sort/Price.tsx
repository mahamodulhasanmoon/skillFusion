import { useState } from "react";


const Price = () => {
    const [price, setPrice] = useState<number>(0);

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(parseInt(event.target.value));
    };
  

  
    return (
        <div className="bg-white mr-6 rounded my-6 p-4 shadow-md">
            <div className="flex flex-col space-y-4">
      <div>
        <h2 className="text-lg font-medium">Filter by Price</h2>
        <div className="flex justify-between text-xs text-gray-600">
            <span>$0</span>
            <span>${price}</span>
          </div>
        <input
          type="range"
          min="0"
          max="12000"
          value={price}
          className="w-full border-none outline-none"
          onChange={handlePriceChange}
        />
      </div>

    </div>
        </div>
    );
};

export default Price;