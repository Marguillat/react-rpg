import { strapiRegisterLocal } from "../../api/apiStrapi";
import RegisterForm from "../forms/RegisterForm";

function RegisterSection() {
  const handleSubmit = async (newUserCredentials) => {
    if (
      newUserCredentials?.username &&
      newUserCredentials?.email &&
      newUserCredentials?.password
    ) {
      const response = await strapiRegisterLocal(newUserCredentials);
      console.log(response);
    }
  };
  return (
    <section className="flex flex-col mx-auto w-full h-full justify-center items-center ">
      <RegisterForm onSubmit={handleSubmit} />
    </section>
  );
}

export default RegisterSection;
