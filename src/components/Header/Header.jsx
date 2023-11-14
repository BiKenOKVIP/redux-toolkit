import "./header.css";

function Header(props) {
  const { setEdit } = props;
  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      <header
        style={{
          background: "#ff9051",
          backgroundImage:
            "linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)",
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
        </div>
        <img className="info-ava" src="./images/redd8.png" alt="Avatar" />
        <div className="info-user">
          <div className="info-username"> Biken Truong</div>
          <div className="info-age">20 years old</div>
          <div className="info-about"> I'm a software engineer</div>
        </div>
      </header>
    </>
  );
}

export default Header;
