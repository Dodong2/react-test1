function App() {
  function AlertClick(name) {
    alert(`{Hello, ${name}}`);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.lname.value);
    console.log(event.target.elements.mname.value);
  };

  return (
    <>
      <button type="button" className="btn btn-outline-danger" onClick={() => AlertClick("Stephen")}>Click Me</button>
      <br />
      <br />
      <input type="text" className="form-control form-control-lg" name="fname" onChange={(event) => console.log(event.target.value)}/>
      <br />
      <br />
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="lname" className="form-control" placeholder="Enter Lastname..."/>
        </div>
        <div className="mb-3">
          <input type="text" name="mname" className="form-control" placeholder="Enter Middlename..."/>
        </div>
        <button className="btn btn-outline-success" type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default App;
