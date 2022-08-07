import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="category">
       {["Single Speed", "City Bike","Hybrid","Beach-Cruiser","Mountain","Road","E-Bike","Kids Bike","Accessories","All"]
       .map((category,item) => <Filter category = { category } key={item}/>)}
        </div>
    )
}
export default AllCategories;