import React from "react";
import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

interface Testimonial {
  name: string;
  img: string;
  quote: string;
}

const TestimonialCard = ({ name, img, quote }: Testimonial) => {
  return (
    <div className="d-flex flex-column align-items-center testimonial-card px-3 bg-white mx-auto">
      <span className="quote-symbol pink-500 font-weight-bold">“</span>
      <span className="quote-text font-weight-light mb-3">{quote}</span>

      <Image className="small-img" src={img} alt="Testimonial" rounded />
      <span className="text-break gray-500">{name}</span>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Shari Copeland",
      img: require("../../assets/testimonials/shari.png"),
      quote:
        "This is the most amazing blessing I could have received . It costs so much money for phone calls and I have to sacrifice one or more basic needs to pay .",
    },
    {
      name: "Trish Cooper",
      img: require("../../assets/testimonials/trish.png"),
      quote:
        "It is a blessing to loved ones to be able to communicate with our family especially during these times.",
    },
    {
      name: "Carol Brown",
      img: require("../../assets/testimonials/carol.png"),
      quote:
        "I am totally blind. Before hearing about you and your organization. I was only able to talk with my son and nephew on the phone, and mail cards.",
    },
  ];

  return (
    <div className="testimonial-bg text-center">
      <span className="font-weight-bold testimonial-title mb-3 white">
        Voices from our Community
      </span>
      <div className="mt-3">
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
