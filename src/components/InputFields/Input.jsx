import "../Edit/edit.css";
function Input(props) {
  const { data, setData, label, className, type } = props;

  return (
    <>
      <label htmlFor="">{label}</label>
      {type === "textarea" ? (
        <textarea
          name=""
          id=""
          className={className}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
}

export default Input;
