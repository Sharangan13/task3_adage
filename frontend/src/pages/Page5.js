import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function Page5() {
  const [answer1Visible, setAnswer1Visible] = useState(false);
  const [answer2Visible, setAnswer2Visible] = useState(false);
  const [answer3Visible, setAnswer3Visible] = useState(false);
  const [answer4Visible, setAnswer4Visible] = useState(false);
  const [answer5Visible, setAnswer5Visible] = useState(false);
  const [answer6Visible, setAnswer6Visible] = useState(false);
  const [answer7Visible, setAnswer7Visible] = useState(false);
  const [answer8Visible, setAnswer8Visible] = useState(false);
  const [answer9Visible, setAnswer9Visible] = useState(false);
  const [answer10Visible, setAnswer10Visible] = useState(false);
  const [answer11Visible, setAnswer11Visible] = useState(false);

  const toggleQuestion1 = () => setAnswer1Visible(!answer1Visible);
  const toggleQuestion2 = () => setAnswer2Visible(!answer2Visible);
  const toggleQuestion3 = () => setAnswer3Visible(!answer3Visible);
  const toggleQuestion4 = () => setAnswer4Visible(!answer4Visible);
  const toggleQuestion5 = () => setAnswer5Visible(!answer5Visible);
  const toggleQuestion6 = () => setAnswer6Visible(!answer6Visible);
  const toggleQuestion7 = () => setAnswer7Visible(!answer7Visible);
  const toggleQuestion8 = () => setAnswer8Visible(!answer8Visible);
  const toggleQuestion9 = () => setAnswer9Visible(!answer9Visible);
  const toggleQuestion10 = () => setAnswer10Visible(!answer10Visible);
  const toggleQuestion11 = () => setAnswer11Visible(!answer11Visible);

  return (
    <div className="col-12 page5_main_div py-5">
      <div className="pb-5">
        <heading className="col-12 d-flex align-items-center page2-container mb-5">
          <div className="page2_p">
            <p>
              <span>FAQs</span>
            </p>
          </div>
          <div className="flex-grow-1">
            <hr className="orange-line" />
          </div>
        </heading>

        <div>
          <div onClick={toggleQuestion1} className="question">
            <span>What is included in the serviced accommodation?</span>
            <div className="d-flex align-items-end">
              {answer1Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer1Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion2} className="question col-12">
            <span className="col-11">
              How often are the accommodations cleaned?
            </span>
            <div className="d-flex align-items-end">
              {answer2Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer2Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion3} className="question">
            <span>Is Wi-Fi available?</span>
            <div className="d-flex align-items-end">
              {answer3Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer3Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion4} className="question">
            <span>Are towels and toiletries provided?</span>
            <div className="d-flex align-items-end">
              {answer4Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer4Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion5} className="question">
            <span>Is there parking available?</span>
            <div className="d-flex align-items-end">
              {answer5Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer5Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion6} className="question">
            <span>What are the check-in and check-out times?</span>
            <div className="d-flex align-items-end">
              {answer6Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer6Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion7} className="question">
            <span>Is there a minimum stay requirement?</span>
            <div className="d-flex align-items-end">
              {answer7Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer7Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion8} className="question">
            <span>Can I bring pets?</span>
            <div className="d-flex align-items-end">
              {answer8Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer8Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion9} className="question">
            <span>Is the accommodation wheelchair accessible?</span>
            <div className="d-flex align-items-end">
              {answer9Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer9Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion10} className="question">
            <span>What amenities are available nearby?</span>
            <div className="d-flex align-items-end">
              {answer10Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer10Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>

        <div>
          <div onClick={toggleQuestion11} className="question">
            <span>How can I make a reservation?</span>
            <div className="d-flex align-items-end">
              {answer11Visible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {answer11Visible && (
            <div>
              <p className="answer col-11 col-md-7">
                Our serviced accommodations include fully furnished rooms,
                kitchen facilities, cleaning services, etc. For a detailed list,
                please refer to our accommodation page.
              </p>
            </div>
          )}
          <hr />
        </div>
      </div>
    </div>
  );
}
