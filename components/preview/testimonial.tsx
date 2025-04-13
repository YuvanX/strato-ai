import { TestimonialCard } from "./testimonialcard";

export const Testimonial = () => {
  return (
    <div className="px-5 lg:px-30">
      <div className="text-xl font-medium">Testimonials</div>
      <div className="text-3xl lg:text-6xl text-green-500 font-medium">Hear from our clients</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        <TestimonialCard name="" description="" designation=""/>
        <TestimonialCard name="" description="" designation=""/>
        <TestimonialCard name="" description="" designation=""/>
        <TestimonialCard name="" description="" designation=""/>
        <TestimonialCard name="" description="" designation=""/>
        <TestimonialCard name="" description="" designation=""/>
      </div>
    </div>
  );
};
