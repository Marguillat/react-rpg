import { useState } from "react";
import Input from "../inputs/Input";
import { strapiLoginLocal } from "../../api/apiStrapi";

function LoginForm({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    // default for dev
    identifier: "erwanduchene@gmail.com",
    password: "password",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // activate parent onSubmit function
    if (onSubmit) onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        onChangeText={(text) =>
          setCredentials({ ...credentials, identifier: text })
        }
        value={credentials.identifier}
        label={"Email"}
        type="email"
      />
      <Input
        onChangeText={(text) =>
          setCredentials({ ...credentials, password: text })
        }
        value={credentials.password}
        label={"Password"}
        type="password"
      />
      <button
        type="submit"
        className="
        border
        border-gray-900
        p-2
        rounded-sm
        hover:bg-gray-900
        hover:text-white
        cursor-pointer
        shadow-md"
      >
        Se connecter
      </button>
    </form>
  );
}

export default LoginForm;
