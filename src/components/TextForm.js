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
  };

  // Capitalize Case
  const handleCapitalizeClick = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  // Download Case
  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myText.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();
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
  };

  // Sentence Case
  const handleSentenceCaseClick = () => {
    const newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
  };

  // Title Case
  const handleTitleCaseClick = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  // Alternating Case
  const handleAlternatingCaseClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    setText(newText);
  };

  // Add dot Case
  const handleAddDot = () => {
    let newText = text.trim();
    if (!newText.endsWith(".")) {
      newText += ".";
    }
    setText(newText);
  };

  //outsiders work handle text copy
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!", "success"); // alert message
  };
  //outsider work handle extra spaces remove
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
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
        <h1>{props.heading}</h1>

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
          className="btn btn-primary mx-2"
          onClick={handleSentenceCaseClick}
        >
          Sentence Case
        </button>
        <button
          className="btn btn-secondary mx-2"
          onClick={handleTitleCaseClick}
        >
          Title Case
        </button>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={handleAlternatingCaseClick}
        >
          Alternating Case
        </button>
        <button
          className="btn btn-outline-dark mx-2"
          onClick={handleDownloadClick}
        >
          Download Text
        </button>
        <button className="btn btn-dark mx-2" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button
          className="btn btn-warning mx-2 my-2"
          onClick={handleInverseClick}
        >
          Inverse Case
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          onClick={handleRemoveClick}
        >
          Clear
        </button>

        <button className="btn btn-primary mx-1" onClick={handleAddDot}>
          Add Full Stop
        </button>

        {/* //outsider works handle text copy  */}
        <button className="btn btn-warning mx-2 my-2" onClick={handleCopy}>
          handle Copy
        </button>
        {/* //outsider works */}
        <button
          className="btn btn-warning mx-2 my-2"
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
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          <b>Words</b> {text.length} <b>Characters</b>
        </p>

        <p>
          {0.008 * text.split(" ").length} <b>Minutes Words</b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here!"}
        </p>
      </div>
    </>
  );
}
