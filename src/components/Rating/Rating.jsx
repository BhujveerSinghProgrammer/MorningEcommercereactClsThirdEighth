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
            //Note:- "rating__star" class will always call and conditionaly "rating__star--active" will be called dependent on isActive true.
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


//scaler.com/scm

// you could just create a react app
// host it using cloudfront
// you could upload your application on S3
// you could make your cloudfront point to the S3 folder and server that
// application
// everything now would be your api based
// there is no server req for you to serve

// how do you think your frontend in general is served

// client requests a page
// sever has multiple routes
// routes there are controller
// controller checks that which page has to be served
// picks the html in front of it
// and serves that html

