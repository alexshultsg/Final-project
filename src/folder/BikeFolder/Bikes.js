import DataBike from "../../Data/DataBike";
import { getSelectedCategory } from "../../redux/BikeSlice";
import BikeProduct from "./BikeProduct";
import { useSelector } from 'react-redux';

const Bikes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div className="container">
       {DataBike
       .filter(bike => {
        if (selectedCategory === "All") return true;
        return selectedCategory === bike.category;
       })
       .map((bike,item) => <BikeProduct bike = { bike } key={item}/>)}
        </div>
    )
}
export default Bikes;