import Icon from "@mdi/react";
import {mdiStar} from "@mdi/js";
//these libraries are like font awesome:-
import "./Rating.css";
import classNames from "classnames";

function Rating({ rating, maxrating }) {
  return (
    <div>
      {new Array(maxrating).fill(0).map((_, index) => {
        const isActive = rating >= index + 1;
        // [true, true, true, true, false]
        return (
          <Icon
            path={mdiStar}
            size={1.2}
            key={index}
            className={classNames("rating__star", {
              "rating__star--active": isActive
            })}
          />
        );
      })}
    </div>

  
  );
}

export default Rating;//it will be implemented in ProductCard.

// map on rating and display filled stars
// map on maxRating - rating to display empty stars

// for loops
// rating
// maxrating-rating

// * * * * // *
// rating // max rating
// **** // another map *
