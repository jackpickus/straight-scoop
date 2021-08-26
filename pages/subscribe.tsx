import type { NextPage } from "next";
import NavLayout from "../components/navbar-layout";
import { useState } from "react";

const Subscribe: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [emails, setEmails] = useState<string[]>([]);

  const addEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email == "") {
      //TODO add message to enter email
    } else {
      setEmails((emails) => [...emails, email]);
      setEmail("");
    }
  };

  return (
    <>
      <NavLayout />

      <div class="container mx-auto text-center">
        <p class="text-4xl pb-2 underline font-semibold text-blue-500">
          Subscribe
        </p>
        <form onSubmit={addEmail}>
          <input
            class="border-2 border-blue-500 focus:border-green-600"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input class="mx-2 border-2 rounded-md hover:border-blue-500" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Subscribe;
