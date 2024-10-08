import { Button } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <div className="py-10 px-[40px] md:px-[100px] flex gap-[100px] items-center">
      <section className="text-[#666666] w-[100%] md:w-[50%] flex flex-col gap-4">
        <p className="text-[#00715D]">About us</p>
        <p className="font-bold text-2xl text-black">We Are Best Treatment For Our Hospital</p>
        <p>
          When deciding which charity to donate to, it's important to do your e
          search and find one that aligns with your values and interests. Look
          for charities that are transparent preventable diseases,
        </p>
        <p>
          When deciding which charity to donate to, it's important to do your e
          search and find one that aligns with your values and interests. Look
          for charities that are transparent preventable diseases,
        </p>
        <div className="flex items-center">
          <img src="/images/like-icon.svg" alt="like-icon" />
          <div>
            <p className="font-bold text-black">Donation</p>
            <p>
              Fund programs that help children escape poverty providing
              vocational training.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <img src="/images/profile-icon.svg" alt="like-icon" />
          <div>
            <p className="font-bold text-black">Volunteer</p>
            <p>
              Fund programs that help children escape poverty providing
              vocational training.
            </p>
          </div>
        </div>

        <Button w="25%" color="white" bgColor="#00715D">Read More</Button>
      </section>

      <section className="hidden md:block">
        <img src="/images/aboutUs-image.svg" alt="AboutUs image"/>
      </section>
    </div>
  );
}
