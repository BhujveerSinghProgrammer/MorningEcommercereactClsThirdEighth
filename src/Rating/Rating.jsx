import icon from "@mdi/react";
import {mdiStar} from "@mdi/js";

function Rating({rating,maxrating})
{
  return (<div>{rating}/{maxrating}</div>);

}

export default Rating;
//it will be implemented in ProductCard.