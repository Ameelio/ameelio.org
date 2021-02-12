import React from "react";
import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Carol from "src/assets/Testimonials/Carol.png";
import Shari from "src/assets/Testimonials/Shari.png";
import Trish from "src/assets/Testimonials/Trish.png";

interface Testimonial {
  name: string;
  img: string;
  quote: string;
}

const TestimonialCard = ({ name, img, quote }: Testimonial) => {
  return (
    <div className="d-flex flex-column align-items-center testimonial-card px-5 pb-3 bg-white mx-auto">
      <span className="quote-symbol pink-500 font-weight-bold mb-1">“</span>
      <span className="quote-text mb-3">{quote}</span>

      <div className="d-flex flex-row align-items-center">
        <Image
          className="small-img"
          src={img}
          alt="Testimonial"
          roundedCircle
        />
        <span className="text-break gray-500 ml-3">{name}</span>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Shari Copeland",
      img: Shari,
      quote:
        "This is the most amazing blessing. It costs so much money for phone calls and I have to sacrifice one or more basic needs to pay .",
    },
    {
      name: "Trish Cooper",
      img: Trish,
      quote:
        "It is a blessing to loved ones to be able to communicate with our family especially during these times.",
    },
    {
      name: "Carol Brown",
      img: Carol,
      quote:
        "I am totally blind. Before hearing about you and your organization. I was only able to talk with my son and nephew on the phone, and mail cards.",
    },
    // {
    //   name: "Kimberly Hernandez",
    //   img: require("../../assets/testimonials/kimberly.jpg"),
    //   quote:
    //     "Your organization is an answer to so many prayers. I believe you came to me as an answer. I really do.",
    // },
  ];

  return (
    <div className="testimonials-container text-center">
      <span className="font-weight-bold testimonial-title mb-5 white">
        Voices from Our Community
      </span>
      <div className="mt-5">
        <Carousel>
          {testimonials.map(function (testimonial, index) {
            return (
              <Carousel.Item key={index}>
                <TestimonialCard key={index} {...testimonial} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
