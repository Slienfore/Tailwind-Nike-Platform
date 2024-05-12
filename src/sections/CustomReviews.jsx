import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red">&nbsp;Customers&nbsp;</span>
        Say?
      </h3>

      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex-1 mt-24 flex max-lg:flex-col justify-evenly items-center gap:14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          ></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default CustomReviews;
