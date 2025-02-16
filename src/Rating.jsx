import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import star from "./assets/icon-star.svg";

const Rating = ({ setRating }) => {
  const ratings = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState(0);

  const handleclick = (rating) => {
    setRating(rating);
    setActiveButton(rating);
  };

  const handleRatingSubmit = () => {
    
    navigate("/thank-you");
  };
  return (
    <section className="min-h-screen grid place-content-center bg-neutral-very-dark-blue">
      <article className="flex flex-col gap-4 sm:gap-5 text-neutral-light-gray bg-neutral-dark-blue p-5 sm:p-6 m-4 sm:m-6 rounded-2xl sm:rounded-3xl  max-w-[425px]">
        <div className="bg-gray-700 rounded-full p-4 sm:p-5  size-fit mt-2">
          <img src={star} alt="star" width={15} />
        </div>
        <h1 className="text-neutral-white text-2xl sm:text-3xl font-medium mt-2">
          How did we do?
        </h1>
        <p className=" leading-6">
          Please let us know how we did with your support request. All feedback
          is appreciatedgap-4 to help us improve our offering!
        </p>
        <div className="flex justify-between sm:gap-6 mt-2">
          
          {ratings.map((rating) => {
            return (
              <button
                onClick={() => handleclick(rating)}
                className={`${
                  activeButton === rating &&
                  "bg-neutral-white text-neutral-very-dark-blue"
                } bg-gray-700 hover:bg-primary-orange   hover:text-neutral-very-dark-blue p-4 sm:p-6 rounded-full size-12 sm:size-14 flex items-center justify-center`}
                key={rating}
              >
                {rating}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleRatingSubmit}
          className="bg-primary-orange hover:bg-neutral-white  text-neutral-dark-blue rounded-3xl tracking-widest text-sm sm:text-[16px] font-semibold p-3 uppercase shadow-2xl my-2"
        >
          Submit
        </button>
      </article>
    </section>
  );
};

Rating.propTypes = {
  setRating: PropTypes.func.isRequired,
};

export default Rating;
