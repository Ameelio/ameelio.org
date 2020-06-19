import React from "react";
import "./stylesheets/testimonials.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class Testimonial {
  name: string;
  img: string;
  quote: string;

  constructor(name: string, img: string, quote: string) {
    this.name = name;
    this.img = img;
    this.quote = quote;
  }
}

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialCard = (props: TestimonialProps) => {
  return (
    <div className="d-flex flex-column align-items-center py-5">
      <div className="d-flex flex-row text-left">
        <span className="quote-symbol blue font-weight-bold">“</span>
        <span className="quote-text font-weight-light ml-5 text-lft">
          {props.testimonial.quote}
        </span>
      </div>
      <div className="d-flex flex-row text-left align-items-center justify-content-start">
        <span className="quote-author-text ">- {props.testimonial.name}</span>
        <Image
          className="quote-author-image ml-3"
          src={props.testimonial.img}
          alt="Testimonial"
          rounded
        />
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    new Testimonial(
      "Shari Copeland",
      require("../../assets/sarah_doe.png"),
      "This is the most amazing blessing I could have received . It costs so much money for phone calls and I have to sacrifice one or more basic needs to pay . It’s really hard for me to write letters because of pain and numbness in my hands . Thank you from the bottom of my heart for caring enough to actually make a difference . May God bless each and every person that has created Ameelio in very special ways every day."
    ),
    new Testimonial(
      "Trish Cooper",
      require("../../assets/sarah_doe.png"),
      "It is a blessing to loved ones to be able to communicate with our family especially during these times. I’m grateful for finding Ameelio. I especially like the fact that we can send a picture with our letter. My boyfriend loves when I write him and always wants pictures. So this is perfect for us."
    ),
    new Testimonial(
      "Carol Brown",
      require("../../assets/sarah_doe.png"),
      "My name is Carol. I am totally blind. Before hearing about you and your organization. I was only able to talk with my son and nephew on the phone, and mail cards. This has allowed me to be able to write to them every day. I’m so excited. I have shared it with at least six others. I know that the others would make fun of my writing, and calls my son and nephew problems that they do not need. Thanks again."
    ),
  ];

  return (
    <div className="bg-lightblue text-center py-5">
      <span className="font-weight-bold testimonial-title">
        Voices from the Ameelio Community…
      </span>
      <Carousel>
        {testimonials.map(function (testimonial, index) {
          return (
            <Carousel.Item>
              <TestimonialCard key={index} testimonial={testimonial} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;
