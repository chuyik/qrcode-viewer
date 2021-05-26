import "./App.css";
import QRCode from "qrcode";
import {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  Fragment,
} from "react";

function getInitOptions() {
  const search = document.location.search || "";
  const text =
    decodeURIComponent(search.match(/[?&]text=([^&]+)/)?.[1]) ||
    "http://www.wesingapp.com";
  return { text };
}

function Input({ value, onChange }) {
  const [text, setText] = useState(value);
  const inputRef = useRef();
  const spanRef = useRef();

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth}px`
    }
  }, [value])

  const onChangeFn = useCallback((e) => {
    console.log("val::", e.target.value);
    setText(e.target.value);
    onChange(e.target.value);
  }, []);

  return (
    <Fragment>
      <input
        className="input"
        text={text}
        onChange={onChangeFn}
        ref={inputRef}
        defaultValue={text}
      />
      <span
        className="input"
        style={{
          position: "absolute",
          height: 0,
          overflow: "hidden",
          whiteSpace: "pre",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
        ref={spanRef}
      >
        {text}
      </span>
    </Fragment>
  );
}

function App() {
  const options = useMemo(getInitOptions, []);
  const [text, setText] = useState(options.text);
  const canvasRef = useRef();
  useEffect(() => {
    if (!text) return
    console.log("canvasRef.current", canvasRef.current);
    QRCode.toCanvas(
      canvasRef.current,
      text,
      { margin: 2, scale: 8 },
      function (error) {
        if (error) console.error(error);
        console.log("success!");
      }
    );
  }, [text]);

  return (
    <div className="App">
      <header className="App-header">
        <canvas ref={canvasRef}></canvas>
        <Input value={text} onChange={setText} />
      </header>
      <footer> Copyright © 2020 - {new Date().getFullYear()} Chuyik</footer>
    </div>
  );
}

export default App;
