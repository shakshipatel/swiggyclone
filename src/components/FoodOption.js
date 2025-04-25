import{ imageGridCards } from "./utils/FoodData"
import FoodCard from "../components/FoodCard"



export default function FoodOption(){
    return(
        <>

  <div className="w-[80%] container mx-auto flex flex-wrap mt-20 object-cover">
{
    imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
}
  </div>
        
        </>

    )
}