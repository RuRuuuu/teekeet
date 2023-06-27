import React, { useState } from "react";
import google from "../../assets/other-images/google_signin.svg";
import { useNavigate } from "react-router-dom";
import { firebaseSetup } from "../../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./login.css";

function Login() {
  const loginValidate = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password characters must be 8 characters long"),
  });

  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const { email, password } = formInput;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginValidate),
  });

  const onChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const forlgataCopy = { ...formInput };
      delete forlgataCopy.password;
      forlgataCopy.timestamp = serverTimestamp();

      await setDoc(doc(firebaseSetup, "users", user.uid), forlgataCopy);
      navigate("/home");
      toast.success("Successful Login!", {
        position: "top-center",
        theme: "light",
      });
    } catch (error) {
      toast.error("Oops...Try again!");
    }
  };

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(firebaseSetup, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(firebaseSetup, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/home");
      toast.success("Successful Login!", {
        position: "top-center",
        theme: "light",
      });
    } catch (error) {
      toast.error("Oops...Try again!");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col overflow-auto mt-6">
      <div>
        <h3 className="text-2xl font-semibold">
          Log in or sign up to continue
        </h3>
      </div>
      {/* option 1 for Google sign-in */}
      <div className="py-6">
        <button
          type="button"
          className="lg:w-[40rem] lg:flex lg:justify-center lg:items-center bg-[#FFFFFF] py-3 px-16 text-[#1F1F1F] text-base font-bold flex flex-row rounded-xl border border-grey-500"
          onClick={() => onGoogleClick}
        >
          <img src={google} alt="google-logo" className="px-3" />
          Continue with Google
        </button>
      </div>

      {/* horizontal rule */}
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-3 bg-gray-300 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          or
        </span>
      </div>

      {/* option 2: sign in via email and password */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <div className="form-row">
            <input
              htmlFor="email"
              className="lg:w-[40rem] lg:text-center w-[350px] form-input py-3 px-6 rounded-xl my-2 bg-[#EDEDED] border border-gray-300"
              placeholder="Enter your email address"
              id="email"
              name="email"
              value={email}
              {...register("email")}
              onChange={onChange}
            />
            <span className="error"> {errors.email?.message}</span>
          </div>
        </section>
        <section>
          <div className="form-row">
            <input
              htmlFor="password"
              type="password"
              className="lg:w-[40rem] lg:text-center w-[350px] form-input py-3 px-6 rounded-xl bg-[#EDEDED] border border-gray-300"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={password}
              {...register("password")}
              onChange={onChange}
              autoComplete="on"
            />
            <span className="error"> {errors.password?.message}</span>
          </div>
        </section>
        <button
          type="submit"
          className="lg:w-[40rem] justify-center items-center w-[350px] bg-[#0052f6] py-3 pb-3 px-4 my-4 text-[#FFFFFF] text-center rounded-[12px] text-sm font-bold flex flex-row border border-grey-500"
        >
          Continue with Email
        </button>
      </form>
      <h4 className="text-[#8F8F8F] my-3 text-center font-bold text-[14px]">
        By continuing, you acknowledge that you have read
        <br /> and understood, and agree to Teeket's{" "}
        <span className="underline decoration-solid font-bold text-[#000000]">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="underline decoration-solid font-bold text-[#000000]">
          Privacy Policy.
        </span>
      </h4>
    </div>
  );
}

export default Login;
