import Footer from "../components/footer_components/footer";
import SignIn from "../components/login_components/sign-in";
import NavbarLogin from "../components/navbar_components/navbar-login";

function Login() {
  return (
    <>
      <NavbarLogin />
      <SignIn />
      <Footer />
    </>
  );
}

export default Login;
