import { Flex, Divider, Spacer } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactDetails() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(40, "Must be 15 characters or less")
        .required("Required"),
      phoneNumber: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(100, "You have exceeded your word limit")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="px-[40px] md:px-[100px]">
      <Flex padding={{base:2, md:10}}>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 md:h-[52px]">
          <img src="/images/callIcon.svg" alt="Phone icon" />
          <Divider orientation="vertical" color="#CCCDD3" display={{base:"hidden", md:"block"}} />
          <div className="font-semibold">
            <p className="text-[#00715D]">Phone</p>
            <p>+ 012 345 678</p>
          </div>
        </div>
        <Spacer />

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 md:h-[52px]">
          <img src="/images/messageIcon.svg" alt="message icon" />
          <Divider orientation="vertical" color="#CCCDD3" display={{base:"hidden", md:"block"}} />
          <div className="font-semibold">
            <p className="text-[#00715D]">Email</p>
            <p>Helpfull@gmail.com</p>
          </div>
        </div>
        <Spacer />

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 md:h-[52px]">
          <img src="/images/locationIcon.svg" alt="Location icon" />
          <Divider orientation="vertical" color="#CCCDD3" display={{base:"hidden", md:"block"}} />
          <div className="font-semibold">
            <p className="text-[#00715D]">Location</p>
            <p>View on Google Map</p>
          </div>
        </div>
      </Flex>

      <Flex mb="20">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-[100%] md:w-[45%] p-4 shadow-lg">
          <div className="flex flex-col">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="bg-[#F8F8F8] border-2 rounded border-[#CCCDD3] w-[100%] my-2 p-2"
              placeholder="Alex Jordan"
              id="fullName"
              type="text"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div>{formik.errors.fullName}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              className="bg-[#F8F8F8] border-2 rounded border-[#CCCDD3] w-[100%] my-2 p-2"
              placeholder="Phone number"
              id="phoneNumber"
              type="number"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              className="bg-[#F8F8F8] border-2 rounded border-[#CCCDD3] w-[100%] my-2 p-2"
              placeholder="name@example.com"
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              className="bg-[#F8F8F8] border-2 rounded border-[#CCCDD3] w-[100%] h-[180px] my-2 p-2"
              id="message"           
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
          </div>

          <button
            className="bg-[#00715D] text-[#FFFFFF] w-[30%] py-2 px-4 rounded"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <Spacer/>

        <div className="hidden md:block">
          <img src="/images/Iframe.svg" alt="Iframe" height="200px"/>
        </div>
      </Flex>
    </div>
  );
}
