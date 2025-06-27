import React, { useState } from "react"; // state

export default function TextForm(props) {
  //states
  const [text, setText] = useState("");

  // Upper Case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase!", "success"); // alert message
  };

  // Lower Case
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase!", "success"); // alert message
  };

  // Remove Case
  const handleRemoveClick = () => {
    let newText = " ";
    setText(newText);
     props.showAlert("Remove!", "success"); // alert message
  };

  // Capitalize Case
  const handleCapitalizeClick = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
     props.showAlert("Convert to Capitalize!", "success"); // alert message
  };

  // Download Case
  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myText.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();
     props.showAlert("Successful Downloading!", "success"); // alert message
  };

  // Copy link Case
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!", "success"); // alert message
  };

  // Inverse Case
  const handleInverseClick = () => {
    const newText = [...text]
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
    setText(newText);
     props.showAlert("Convert to Inverse!", "success"); // alert message
  };

  // Sentence Case
  const handleSentenceCaseClick = () => {
    const newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
     props.showAlert("Convert to Sentence!", "success"); // alert message
  };

  // Title Case
  const handleTitleCaseClick = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
     props.showAlert("Convert to Title!", "success"); // alert message
  };

  // Alternating Case
  const handleAlternatingCaseClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    setText(newText);
     props.showAlert("Convert to Alternating!", "success"); // alert message
  };

  // Add dot Case
  const handleAddDot = () => {
    let newText = text.trim();
    if (!newText.endsWith(".")) {
      newText += ".";
    }
    setText(newText);
     props.showAlert("Full Stop!", "success"); // alert message
  };

  //outsiders work handle text copy
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to clipboard!", "success"); // alert message
     props.showAlert("Copy!", "success"); // alert message
  };
  //outsider work handle extra spaces remove
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
     props.showAlert("Remove Extra Spaces!", "success"); // alert message
  };

  //this is a compulsory
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#01050d" }}
      >
        <h1 className="mb-3">{props.heading}</h1>

        <div className="mb-3">
          {/* // value and onchange is compulsory // */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "white",
              color: props.mode === "dark" ? "white" : "#01050d",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleSentenceCaseClick}
        >
          Sentence Case
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-secondary mx-2 my-1"
          onClick={handleTitleCaseClick}
        >
          Title Case
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-success mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-danger mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-warning mx-2 my-1"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-info mx-2 my-1"
          onClick={handleAlternatingCaseClick}
        >
          Alternating Case
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-outline-dark mx-2 my-1"
          onClick={handleDownloadClick}
        >
          Download Text
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-dark mx-2 my-1"
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-warning mx-2 my-1"
          onClick={handleInverseClick}
        >
          Inverse Case
        </button>
        <button
          disabled={text.trim().length === 0}
          className="btn btn-success mx-2 my-1"
          onClick={handleRemoveClick}
        >
          Clear
        </button>

        <button
          disabled={text.trim().length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleAddDot}
        >
          Add Full Stop
        </button>

        {/* //outsider works handle text copy  */}
        <button
          disabled={text.trim().length === 0}
          className="btn btn-warning mx-2 my-1"
          onClick={handleCopy}
        >
          handle Copy
        </button>
        {/* //outsider works */}
        <button
          disabled={text.trim().length === 0}
          className="btn btn-warning mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#01050d" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>Words:</b>{" "}
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          <b>Characters:</b> {text.trim().length}
        </p>

        <p>
          {text.trim().length === 0
            ? 0
            : (0.008 * text.trim().split(/\s+/).length).toFixed(2)}{" "}
          <b>Minutes Read</b>
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>
      </div>
    </>
  );
}
