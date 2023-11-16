import { useState } from "react";
import PageNav from "../components/PageNav";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className="bg-gray-800 h-full px-20 py-10">
      <PageNav />

      <form className="bg-gray-700 max-w-xl rounded-md px-16 py-16 flex flex-col gap-4 mx-auto mt-24">
        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <Input
          id="email"
          type="email"
          value={email}
          label="Email address"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <Input
          id="password"
          type="password"
          value={password}
          label="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <button className="bg-green-500 rounded-md text-center text-xl font-semibold py-3 transition hover:bg-green-600">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
