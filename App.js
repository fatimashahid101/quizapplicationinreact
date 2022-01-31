import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , { useState} from "react";

function App() {
const [questions, setQuestions]= useState([
  {
    question : "HTML stands for _______________",
    options: [
      "hypertext markup language", 
      "programming language",
       "markup language"
      ],
    correctAns: "hypertext markup language",
  },
  {
    question : "CSS stands for _______________",
    options: [
      "cascading styling sheet", 
      "styling sheet",
       "markup language",
       "programming language"
      ],
    correctAns: "cascading styling sheet",
  },
  {
    question : "JavaSript stands for _______________",
    options: [
      "srcipting language", 
      "programming language",
       "markup language"
      ],
    correctAns: "srcipting language",
  },
  {
    question : "JavaSript stands for _______________",
    options: [
      "srcipting language", 
      "programming language",
       "markup language"
      ],
    correctAns: "srcipting language",
  },
  {
    question : "HTML is a programming language?",
    options: [
      "True", 
      "False"
      ],
    correctAns: "False",
  },
])
const [ind , setInd] = useState(0);
 const [selectedValue, setSelectedValue] = useState("");
 const [score, setScore] = useState(0);
 const [showResult , setShowResult] = useState(false);
function checkAnswer(){
// console.log(e);
// let selectedValue = e;
let correctedValue = questions[ind].correctAns;
if (selectedValue == correctedValue){
  setScore(score + 1);
}
if (questions.length == ind+1 ){
  setShowResult(true);
} else {
  setInd(ind + 1);
}

}
console.log(score)

return(
  <div className="App">
<div className="p-2 ">
  <div className="container">
    {showResult ? (
    <div className="p-3 bg-warning text-dark shadow rounded">
    <p className="fs-3">Result</p>
<progress id="file" value={score} max={questions.length}></progress>
<h3>{(( score / questions.length) * 100).toFixed(2)} %</h3>
<h3>{( score / questions.length) * 100 < 60 ? "Fail" : "Pass"} </h3>
   </div>
    ) : null}
    

  </div>
{!showResult ? (
  <div className="p-5 container shadow my-2 rounded bg-success text-white">
<p className="fs-4"> 
Question no <span className="fs-2">{ind +1}</span> 0f {" "}
{questions.length}
</p>
<h1>{questions[ind].question}</h1>
</div>
) : null}
{!showResult ? (
  <div className="p-5 container shadow my-2 rounded bg-info">
  <div className="row">
    {questions[ind].options.map((e , i)=> {
return(
<div key={i} className="col-md-4">
<button
 onClick={() => setSelectedValue(e)} 
 className="btn btn-light rounded px-5 py-2">
   {e}
   </button>
</div>
)
    })}
  </div>
</div>
) : null}
{!showResult ? (
  <div className="container">
<button 
className="btn btn-primary rounded-pill px-5 " 
onClick={ () => setInd(ind - 1)}
>back</button>
<button 
className="btn btn-danger rounded-pill px-5 " 
onClick={() => checkAnswer()}

>Next</button>

</div>
) : null }
</div>
  </div>
)
}

export default App;
