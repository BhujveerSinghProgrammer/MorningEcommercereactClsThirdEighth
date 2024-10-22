import { useDispatch, useSelector } from "react-redux";

import { loadCategories } from "../../stores/categories";
function Categories() {
  const dispatch = useDispatch();


   // Call loadCategories when the component mounts
  // useEffect(() => {
  //   dispatch(loadCategories());
  // }, [dispatch]);

  //or

   dispatch(loadCategories());



  const categories = useSelector((state) => {
    return state.categories.categories;
  });
  console.log(categories);
  return (
    <div>
      <ul>
        {categories?.map((item) => (  
          <li key={item.id}> {item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
