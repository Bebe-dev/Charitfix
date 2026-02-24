export default function TestimonialSection() {
  return (
    <div className="text-center py-16 space-y-4 px-[40px] md:px-[100px]">
      <p className="text-[#00715D]">Testimonials</p>
      <p className="font-bold text-xl">What People Say</p>
      <div className="flex gap-2 justify-center">
        <img src="\images\testimonial-1.svg" alt="person1" />
        <img src="\images\testimonial-2.svg" alt="person2" />
        <img src="\images\testimonial-3.svg" alt="person3" />
      </div>
      <p className="font-bold">Robart Johnson</p>
      <p className="text-[#666666]">United, Canada</p>

      <p className="text-[#666666]">
        These questions are used to provoke thought and discussion. They can be
        used to challenge the other person's assumptions, such as "Do you really
        think that's true?", or to get them to think about a different
        perspective, such as "What if we tried it this way? The specific
        questions to ask may vary depending on the context and the information
        you are seeking.
      </p>
    </div>
  );
}
