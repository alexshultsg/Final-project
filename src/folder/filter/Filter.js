import { useSelector,useDispatch } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/BikeSlice";


const Filter = ({category}) => {
        const selectedCategory = useSelector(getSelectedCategory);
        const dispatch = useDispatch()
    return (
        <div>
        <p onClick = { () => {dispatch(filterCategory(category))}} className={ selectedCategory === category ? "categoryButtonSelected" : "categoryButton"}>{category}</p>
        </div>
    )
}
export default Filter;