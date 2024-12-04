import "./formSubcribe.css";

function FormSubcribe() {
  return (
    <div className="formSubcribe">
      <h1>Save time, save money</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="emailSubcribe">
        <input type="text" placeholder="Your Email" />
        <button>Subcribe</button>
      </div>
    </div>
  );
}

export default FormSubcribe;
