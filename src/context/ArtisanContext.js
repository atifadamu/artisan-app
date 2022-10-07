import { createContext, useContext, useState } from "react";
import { AuthContext } from "./auth.context";

const ArtisanContext = createContext();

const ArtisanProvider = ArtisanContext.Provider;

const ArtisanContextProvider = ({ children }) => {
  const [artisans, setArtisans] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  async function getAllArtisans() {
    setIsPending(true);
    await fetch("/api/artisans", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtisans(data);
      })
      .catch((err) => {
        setError(err);
      });
    setIsPending(false);
  }

  return (
    <ArtisanProvider value={{ isPending, artisans, error, getAllArtisans }}>
      {children}
    </ArtisanProvider>
  );
};

export { ArtisanContext, ArtisanContextProvider };
