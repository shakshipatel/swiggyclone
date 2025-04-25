import{ GroceryGridCard } from "./utils/Grocery"
import Grocerycard from "../components/Grocerycard"

export default function GroceryOption(){
    return(
        <>
          <div className="mt-20 w-[80%] container mx-auto">
        <h1>Shop Groceries on Instamart</h1>
          <div className="w-[80%] container mx-auto flex flex-wrap mt-20 object-cover">
        {
            GroceryGridCard.map((foodData)=> <Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
        }
          </div>

          </div>

        </>

    )
}