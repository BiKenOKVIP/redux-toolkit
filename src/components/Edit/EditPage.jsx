import { useState } from "react";
import "./edit.css";
import Input from "../InputFields/Input";

function EditPage(props) {
  const { setEdit } = props;

  const avaUrl = [
    "./images/redd1.png",
    "./images/redd2.png",
    "./images/redd3.png",
    "./images/redd4.png",
    "./images/redd5.png",
    "./images/redd6.png",
    "./images/redd7.png",
    "./images/redd8.png",
  ];

  const [name, setName] = useState("BiKen");
  const [age, setAge] = useState(20);
  const [about, setAbout] = useState("I'm a software engineer");
  const [theme, setTheme] = useState("#ff9051");
  const [urlImage, setUrlImage] = useState("./images/redd1.png");

  const handlePickPicture = (e, url) => {
    setUrlImage(url);
  };

  const handleSubmit = (e) => {
    setEdit(false);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <div className="close">
            <button> SAVE </button>
          </div>
          <div className="edit-profile"> Edit Profile </div>
          <div className="input-container">
            <Input label="Full name" data={name} setData={setName} />
            <Input label="Age" data={age} setData={setAge} />
            <Input
              className="input-about"
              type="textarea"
              label="About"
              data={about}
              setData={setAbout}
            />
          </div>
          <div className="edit-profile-picture">Profile Picture</div>
          <div className="input-image-container">
            {avaUrl.map((url) => {
              return (
                <>
                  <div
                    className="img-item"
                    style={{ display: "inline-block" }}
                    key={url}
                  >
                    <img
                      onClick={(e) => handlePickPicture(e, url)}
                      src={url}
                      alt="Avatar"
                      className="input-image"
                    />
                    {url === urlImage && <span>√</span>}
                  </div>
                </>
              );
            })}
          </div>
          <div className="theme-container">
            <label htmlFor=""> Theme </label>
            <input
              type="color"
              className="pick-color"
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
        </section>
      </form>
    </>
  );
}

export default EditPage;
