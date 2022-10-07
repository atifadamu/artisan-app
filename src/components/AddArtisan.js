import React, { useState } from "react";
 import Footer from "../components/Footer";
  import Navbar from "../components/Navbar";

function AddArtisan({ submit }) {
  const [artisan, setArtisan] = useState({
    name: "",
    work: "",
    yearsofexperience: "",
    location: "",
  });

  const handler = (event) => {
    setArtisan((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(artisan);
  };
  return (
    <>
      
      <Navbar />
      <div className="formContainer">
        <h3>Add New Artisan</h3>
        <form>
          <fieldset>
            <legend>Artisan Data</legend>
            <div className="names">
              <div className="N">
                <label>
                  Name
                  <input
                    name="name"
                    value={artisan.name}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
            <div className="names">
              <div className="W">
                <label>
                  Work
                  <input
                    name="work"
                    value={artisan.work}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="Y">
                <label>
                  {" "}
                  Years of Experience
                  <input
                    name="yearsofexperience"
                    type="number"
                    value={artisan.yearsofexperience}
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  Location
                  <input
                    name="location"
                    value={artisan.location}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="form" onClick={handleForm}>
            Add new Artisan
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddArtisan;
