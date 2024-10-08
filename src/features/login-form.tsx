import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { Eye, EyeOff } from "tabler-icons-react";
import { useState } from "react";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="shadow-2xl my-10 w-[100%] md:w-[40%] p-12 m-auto text-[#636B6A] text-center">
      <img src="/images/logo.svg" alt="logo" />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6 text-start my-10"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="bg-[#F8F8F8] border-2 rounded border-[#CCCDD3] w-[100%] p-2 px-4 my-2"
            id="email"
            placeholder="Enter Your Email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <Flex>
            <label htmlFor="password">Password</label>
            <Spacer />
            <p className="text-[#00715D] hover:cursor-pointer">Forgot password?</p>
          </Flex>

          <InputGroup size="md">
            <Input
              bgColor="#F8F8F8"
              py="5"
              my="3"
              border="2px #CCCDD3 solid"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              {...formik.getFieldProps("password")}
            />
            <InputRightElement width="4.5rem">
              <div onClick={handleClick} className="pt-[40%] hover:cursor-pointer">
                {show ? <EyeOff /> : <Eye />}
              </div>
            </InputRightElement>
          </InputGroup>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button
          className="bg-[#00715D] text-[#FFFFFF] w-[30%] px-6 py-3 rounded-xl"
          type="submit"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <span className="text-[#00715D] hover:cursor-pointer">Register</span>
      </p>
      <Button
        bgColor="#FFFFFF"
        border="1px #A8A8A86B solid"
        width="100%"
        p="6"
        mt="6"
        leftIcon={<GoogleIcon />}
      >
        Login with Google
      </Button>
    </div>
  );
}
