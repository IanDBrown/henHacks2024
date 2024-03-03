import "../css/QuestionPage.css"
import math from "../assets/questions.json"
import { useState } from "react"

const QuestionPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    let scoreLevel : number = 2;
    let allOptions: String = math.Math[scoreLevel][0].options
    let answerArray: Array<string> = allOptions.split(" , ")
    console.log(math.Math[scoreLevel][0].options)
    let rationale : String = math.Math[scoreLevel][0].Rationale

    function checkAnswer (){
        if(selectedAnswer === math.Math[scoreLevel][0].correct){
            console.log("Correct");
            scoreLevel += 1
        }else{
            console.log("Wrong");            
            scoreLevel -= 1
        }
    }

    return ( 
        <div className="questionCard">
            <h1 className="questionHeader">{math.Math[scoreLevel][0].Problem}</h1>
            <form>
                <div className="multipleChoiceDiv">
                    <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option1" onChange={()=>setSelectedAnswer("a")}/>
                    {answerArray[0]}
                    </label>
                </div>

            <div className="multipleChoiceDiv">
                <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option2" onChange={()=>setSelectedAnswer("b")}/>
                    {answerArray[1]}
                </label>
            </div>

            <div className="multipleChoiceDiv">
                <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option3" onChange={()=>setSelectedAnswer("c")}/>
                    {answerArray[2]}
                </label> 
            </div>

            <div className="multipleChoiceDiv">
                <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option4" onChange={()=>setSelectedAnswer("d")}/>
                    {answerArray[3]}
                </label> 
            </div>
            <div className="multipleChoiceDiv">
                <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option5" onChange={()=>setSelectedAnswer("e")}/>
                    {answerArray[4]}
                </label> 
            </div>
            </form>
            <div className="hidden" id="rationale">
                {rationale}
            </div>
            <div>
                <button className="sumbitButton" onClick={()=>checkAnswer()}>Submit</button>
            </div>
        </div>
     );
}
 
export default QuestionPage;