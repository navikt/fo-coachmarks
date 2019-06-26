import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./lib/example";

ReactDOM.render(<TextInput  label={""} onChange={(e) => {return e}} type={""} value={"Skriv noe her..."}/>, document.getElementById("root"));
