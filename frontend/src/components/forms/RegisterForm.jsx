import { useState } from "react";
import Input from "../inputs/Input";

function RegisterForm({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    // default for dev
    username: "marg",
    email: "erwanduchene@gmail.com",
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
          setCredentials({ ...credentials, username: text })
        }
        value={credentials.username}
        label={"Username"}
        type="text"
      />
      <Input
        onChangeText={(text) => setCredentials({ ...credentials, email: text })}
        value={credentials.email}
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
        S'enregistrer
      </button>
    </form>
  );
}
export default RegisterForm;
