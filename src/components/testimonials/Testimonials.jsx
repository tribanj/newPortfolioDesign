import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const tdata = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias perspiciatis ipsum consectetur est voluptatem repellendus laudantium, ad consequuntur omnis eum maiores nostrum soluta, aspernatur accusamus, velit ab nihil assumenda similique! ",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias perspiciatis ipsum consectetur est voluptatem repellendus laudantium, ad consequuntur omnis eum maiores nostrum soluta, aspernatur accusamus, velit ab nihil assumenda similique! ",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias perspiciatis ipsum consectetur est voluptatem repellendus laudantium, ad consequuntur omnis eum maiores nostrum soluta, aspernatur accusamus, velit ab nihil assumenda similique! ",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias perspiciatis ipsum consectetur est voluptatem repellendus laudantium, ad consequuntur omnis eum maiores nostrum soluta, aspernatur accusamus, velit ab nihil assumenda similique! ",
  },
];
const Testimonials = () => {
  return (
    <>
    
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonias</h2>

        <Swiper className="container testimonial__container mySwiper"
         pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        >
          {tdata.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt="avtr" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
