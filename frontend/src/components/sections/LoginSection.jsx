import { strapiLoginLocal } from "../../api/apiStrapi";
import LoginForm from "../forms/LoginForm";

function LoginSection() {
  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      const loginData = await strapiLoginLocal(credentials);
      console.log(loginData);
    }
  };
  return (
    <section className="flex flex-col mx-auto w-full h-full justify-center items-center ">
      <LoginForm onSubmit={handleSubmit} />
    </section>
  );
}

export default LoginSection;
