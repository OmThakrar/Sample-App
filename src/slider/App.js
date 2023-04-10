import React from "react"
import img1 from "../assets/p2.png"
import SlideButton from "./slide-button/SlideButton"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import css from "react-syntax-highlighter/dist/esm/languages/prism/css"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./App.css"

SyntaxHighlighter.registerLanguage("jsx", jsx)
SyntaxHighlighter.registerLanguage("css", css)

function App() {
  const [reset, setReset] = React.useState(0)
  return (
    <div className="App h-[100vh]">
      <div className="row grid my-3 grid-cols-3">
        <div className="col-span-1 mx-auto">
        <div className="max-w-sm p-6 bg-[#5f3e82] border border-gray-200 rounded-lg shadow dark:bg-[#5f3e82] dark:border-gray-700">
          <div className="group flex mx-auto items-center pb-8">
            <img className="shrink-0 h-16 w-16 rounded-full" src={img1} alt="" />
            <div className="ltr:ml-3 rtl:mr-3">
              <p className="font-medium ml-4 text-white group-hover:text-white text-xl">
                Nency
              </p>
            </div>
          </div>
          <p className="font-medium text-white group-hover:text-white text-xl">Interest
          </p>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-white text-xl mr-4">Traveling</div>
              <div className="text-white text-xl mr-4">Music</div>
            </div>
            <div>
              <div className="text-white text-xl mr-4">Clubing</div>
              <div className="text-white text-xl mr-4">Exercise</div>
            </div>
          </div>

        </div>
        </div>
        <div className="col-span-1 mx-auto">
        <div className="max-w-sm p-6 bg-[#5f3e82] border border-gray-200 rounded-lg shadow dark:bg-[#5f3e82] dark:border-gray-700">
          <div className="group flex mx-auto items-center pb-8">
            <img className="shrink-0 h-16 w-16 rounded-full" src={img1} alt="" />
            <div className="ltr:ml-3 rtl:mr-3">
              <p className="font-medium ml-4 text-white group-hover:text-white text-xl">
                Neha
              </p>
            </div>
          </div>
          <p className="font-medium text-white group-hover:text-white text-xl">Interest
          </p>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-white text-xl mr-4">Traveling</div>
              <div className="text-white text-xl mr-4">Music</div>
            </div>
            <div>
              <div className="text-white text-xl mr-4">Clubing</div>
              <div className="text-white text-xl mr-4">Exercise</div>
            </div>
          </div>

        </div>
        </div>
        <div className="col-span-1 mx-auto">
        <div className="max-w-sm p-6 bg-[#5f3e82] border border-gray-200 rounded-lg shadow dark:bg-[#5f3e82] dark:border-gray-700">
          <div className="group flex mx-auto items-center pb-8">
            <img className="shrink-0 h-16 w-16 rounded-full" src={img1} alt="" />
            <div className="ltr:ml-3 rtl:mr-3">
              <p className="font-medium ml-4 text-white group-hover:text-white text-xl">
                Sania
              </p>
            </div>
          </div>
          <p className="font-medium text-white group-hover:text-white text-xl">Interest
          </p>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-white text-xl mr-4">Traveling</div>
              <div className="text-white text-xl mr-4">Music</div>
            </div>
            <div>
              <div className="text-white text-xl mr-4">Clubing</div>
              <div className="text-white text-xl mr-4">Exercise</div>
            </div>
          </div>

        </div>
        </div>
      </div>
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        position="bottom-center"
      />
      <div className="wrapper">
        <div className="row text-xl py-5 font-bold text-center">
          Your Match, ignite the spark!
        </div>
        <div className="content-wrapper">
          <div className="divider">
            <div className="col heading centered">
            <div className="max-w-sm p-6 bg-[#5f3e82] border border-gray-200 rounded-lg shadow dark:bg-[#5f3e82] dark:border-gray-700">
          <div className="group flex mx-auto items-center pb-8">
            <img className="shrink-0 h-16 w-16 rounded-full" src={img1} alt="" />
            <div className="ltr:ml-3 rtl:mr-3">
              <p className="font-medium ml-4 text-white group-hover:text-white text-xl">
                Priyanka
              </p>
            </div>
          </div>
          <p className="font-medium text-white group-hover:text-white text-xl">Interest
          </p>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-white text-xl mr-4">Traveling</div>
              <div className="text-white text-xl mr-4">Music</div>
            </div>
            <div>
              <div className="text-white text-xl mr-4">Clubing</div>
              <div className="text-white text-xl mr-4">Exercise</div>
            </div>
          </div>

        </div>
            </div>
            <div className="col centered">
              <div className="button-wrapper">
                <SlideButton
                  mainText="Slide Right right for Adventure"
                  overlayText="Loved this person"
                  reset={reset}
                  onSlideDone={() => {
                    toast("Match Request Send to Priyanka!!", { type: "info" })
                    console.log("Done!")
                  }}
                />
                <br />
                <center>
                  <button onClick={() => setReset((r) => r + 1)}>Reset</button>
                </center>
              </div>
            </div>
            {/* <div className="col">
              <SyntaxHighlighter language="jsx" style={prism}>
                {`import SlideButton from 'react-slide-button';

const [reset, setReset] = useState(0);

<SlideButton 
  mainText="slide me" 
  overlayText="S I K E" 
  onSlideDone={function () {
    console.log("Done!");
  }} 
  reset={reset}
/>

<button onClick={() => {
  setReset(counter => counter + 1)
}}
>
  Reset
</button>
`}
              </SyntaxHighlighter>
            </div> */}
    
          </div>

          {/* <div className="divider">
            <div className="col heading centered">custom caret width</div>
            <div className="col centered">
              <div className="button-wrapper">
                <SlideButton
                  mainText="pay"
                  overlayText=""
                  overlayClassList="custom-width"
                  classList="mainText"
                  caretClassList="custom-caret-list"
                  reset={reset}
                  caret={<p style={{ color: "white" }}>Pay With Wallet</p>}
                  customCaretWidth={180}
                  onSlideDone={() => {
                    toast("Done!", { type: "info" })
                    console.log("Done!")
                  }}
                />
                <br />
                <center>
                  <button onClick={() => setReset((r) => r + 1)}>Reset</button>
                </center>
              </div>
            </div>
            <div className="col">
              <SyntaxHighlighter language="jsx" style={prism}>
                {`<SlideButton
                mainText=""
                overlayText=""
                overlayClassList="custom-width"
                classList="mainText"
                caretClassList="custom-caret-list"
                reset={reset}
                caret={<p style={{ color: "white" }}>Pay With Wallet</p>}
                customCaretWidth={180}
                onSlideDone={() => {
                  toast("Done!", { type: "info" })
                  console.log("Done!")
                }}
              />`}
              </SyntaxHighlighter>
            </div>
          </div> */}

          {/* ==================================================================================================================== */}
          {/* <div className="divider">
            <div className="col heading centered">custom colors</div>
            <div className="col centered">
              <div className="button-wrapper">
                <SlideButton
                  mainText="Slide me"
                  reset={reset}
                  overlayText="S I K E"
                  classList="my-class"
                  caretClassList="my-caret-class"
                  overlayClassList="my-overlay-class"
                  onSlideDone={() => {
                    toast("Done!", { type: "info" })
                    console.log("Done!")
                  }}
                />
                <br />
                <center>
                  <button onClick={() => setReset((r) => r + 1)}>Reset</button>
                </center>
              </div>
            </div>
            <div className="col">
              <SyntaxHighlighter language="css" style={prism}>
                {`.my-class {
  border-color:red !important;
}
.my-caret-class {
  background:dodgerblue !important;
}
.my-overlay-class {
  background:green !important;
}`}
              </SyntaxHighlighter>
              <SyntaxHighlighter language="jsx" style={prism}>
                {`<SlideButton 
  mainText="Slide me" 
  overlayText="S I K E"
  classList="my-class"
  caretClassList="my-caret-class"
  overlayClassList="my-overlay-class"
  onSlideDone={function () {
    console.log("Done!");
  }} 
/>`}
              </SyntaxHighlighter>
            </div>

          
            <div className="col heading centered">size</div>
            <div className="col centered">
              <div style={{ width: "200px" }}>
                <SlideButton
                  mainText="Slide me"
                  overlayText="S I K E"
                  reset={reset}
                  onSlideDone={() => {
                    toast("Done!", { type: "info" })
                    console.log("Done!")
                  }}
                />
                <br />
                <center>
                  <button onClick={() => setReset((r) => r + 1)}>Reset</button>
                </center>
              </div>
            </div>
            <div className="col">
              <SyntaxHighlighter language="jsx" style={prism}>
                {`<div style={{width:'200px'}}>
  <SlideButton 
  ...
  />
</div>`}
              </SyntaxHighlighter>
            </div>
          </div> */}

          {/* ====================================================================================================== */}
          {/* <div className="divider">
            <div className="col heading centered">custom elements as text</div>
            <div className="col centered">
              <div className="button-wrapper">
                <SlideButton
                  mainText={
                    <span>
                      Sw<b style={{ color: "red", fontSize: "19px" }}>ipe</b> me
                    </span>
                  }
                  overlayText={
                    <span>
                      S I <b style={{ color: "cyan", fontSize: "19px" }}>K E</b>
                    </span>
                  }
                  reset={reset}
                  onSlideDone={() => {
                    toast("Done!", { type: "info" })
                    console.log("Done!")
                  }}
                />
                <br />
                <center>
                  <button onClick={() => setReset((r) => r + 1)}>Reset</button>
                </center>
              </div>
            </div>
            <div className="col">
              <SyntaxHighlighter language="jsx" style={prism}>
                {`<SlideButton 
  mainText={<span>Sw<b style={{ color: 'red', fontSize: '19px' }}>ipe</b> me</span>}
  overlayText={<span>S I <b style={{ color: 'cyan', fontSize: '19px' }}>K E</b></span>}
  ...
/>`}
              </SyntaxHighlighter>
            </div>
          </div> */}

          {/* <div className="divider">
            <div className="col heading centered">custom caret</div>
            <div className="col centered">
              <div className="button-wrapper">
                <SlideButton
                  mainText="Slide me"
                  overlayText="S I K E"
                  reset={reset}
                  caret={<img src="./caret.png" alt="img" />}
                  onSlideDone={() => {
                    toast("Done!", { type: "info" })
                    console.log("Done!")
                  }}
                />
                <br />
                <center>
                  <button onClick={() => setReset((r) => r + 1)}>Reset</button>
                </center>
              </div>
            </div>
            <div className="col">
              <SyntaxHighlighter language="jsx" style={prism}>
                {`<SlideButton
  caret={<img src="./caret.png" />}
  ...
/>`}
              </SyntaxHighlighter>
            </div>
          </div> */}

          
        </div>
      </div>
    </div>
  )
}

export default App