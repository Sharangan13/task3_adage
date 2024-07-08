import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

const reviews = [
  {
    id: 1,
    user: "John Smith",
    rating: 4.9,
    date: "4 Jan 2024",
    content:
      "RUJ's apartment in Colombo exceeded all expectations. The spacious layout, contemporary design, and panoramic views made for an unforgettable stay. The location was unbeatable, with easy access to shopping, dining, and entertainment options. The dedicated staff at RUJ ensured that every aspect of our stay was seamless.",
  },
  {
    id: 2,
    user: "Verified RUJ User",
    rating: 4.8,
    date: "3 Jan 2024",
    content:
      "Absolutely loved our stay at this apartment! The location was perfect, right in the heart of Colombo. The apartment itself was spacious, clean, and beautifully furnished. The view from the balcony was breathtaking, especially during sunset. The staff was incredibly friendly and accommodating. Would highly recommend it to anyone visiting Colombo!",
  },
  {
    id: 3,
    user: "User3",
    rating: 4.7,
    date: "2 Jan 2024",
    content:
      "Absolutely loved our stay at this apartment! The location was perfect, right in the heart of Colombo. The apartment itself was spacious, clean, and beautifully furnished. The view from the balcony was breathtaking, especially during sunset. The staff was incredibly friendly and accommodating. Would highly recommend it to anyone visiting Colombo!",
  },
  {
    id: 4,
    user: "User4",
    rating: 5.0,
    date: "1 Jan 2024",
    content:
      "Absolutely loved our stay at this apartment! The location was perfect, right in the heart of Colombo. The apartment itself was spacious, clean, and beautifully furnished. The view from the balcony was breathtaking, especially during sunset. The staff was incredibly friendly and accommodating. Would highly recommend it to anyone visiting Colombo!",
  },
  {
    id: 5,
    user: "User5",
    rating: 4.9,
    date: "31 Dec 2023",
    content:
      "Absolutely loved our stay at this apartment! The location was perfect, right in the heart of Colombo. The apartment itself was spacious, clean, and beautifully furnished. The view from the balcony was breathtaking, especially during sunset. The staff was incredibly friendly and accommodating. Would highly recommend it to anyone visiting Colombo!",
  },
];

export default function Page12() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextReviews = () => {
    if (startIndex + 2 < reviews.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const handlePreviousReviews = () => {
    if (startIndex - 2 >= 0) {
      setStartIndex(startIndex - 2);
    }
  };

  const displayedReviews = reviews.slice(startIndex, startIndex + 2);

  return (
    <div className="col-12 px-2 px-md-5 py-5" id="page12">
      <div className="_line">
        <h1>Reviews</h1>
      </div>

      <div className="d-flex  review_rate">
        <p className="p1">
          <span1>4.9</span1>
          <span2>/5</span2>
        </p>
        <p className="d-flex align-items-center justify-content-center">
          <span className="span3">Great!</span>
          <span className="span4"> 5 reviews</span>
        </p>
      </div>
      <div className="d-none d-md-block">
      <div className="d-flex align-items-center justify-content-center ">
        <div className="arrow-container">
          {startIndex > 0 && (
            <IoMdArrowRoundBack
              onClick={handlePreviousReviews}
              size={30}
              style={{ cursor: "pointer", marginRight: "1rem" }}
            />
          )}
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          {displayedReviews.map((review) => (
            <div key={review.id} className="review_box">
              <div className="col-12 px-3 py-1">
                <div className="d-flex justify-content-between">
                  <div className="d-flex user_round_box_div">
                    <div className="user_round_box">
                      <LuUser />
                    </div>
                    <p>{review.user}</p>
                  </div>
                  <p className="review_orange">
                    <span>{review.rating}</span>/5
                  </p>
                </div>
                <p><span className="Reviewed_color">Reviewed: {review.date}</span></p>
                <p className="review_content">{review.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrow-container">
          {startIndex + 2 < reviews.length && (
            <IoMdArrowRoundForward
              onClick={handleNextReviews}
              size={30}
              style={{ cursor: "pointer", marginLeft: "1rem" }}
            />
          )}
        </div>
      </div>
      </div>





<div className="d-block d-md-none">
        <div className="horizontal-scroll-container col-12">
          {reviews.map((review) => (
            <div key={review.id} className="review_box col-11">
              <div className=" px-1 py-1">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="user_round_box">
                      <LuUser />
                    </div>
                    <p>{review.user}</p>
                  </div>
                  <p className="review_orange">
                    <span>{review.rating}</span>/5
                  </p>
                </div>
                <p><span className="Reviewed_color">Reviewed: {review.date}</span></p>
                <p>{review.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
