import Icon from "@mdi/react";
import {mdiStar} from "@mdi/js";
//these libraries are like font awesome:-

function Rating({rating,maxrating})
{
  return (
    <div>
    <Icon path={mdiStar}/>
    {rating}/{maxrating}
    </div>
    );

}

export default Rating;
//it will be implemented in ProductCard.