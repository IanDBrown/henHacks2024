import "../css/QuestionPage.css"
import math from "../assets/questions.json"
import { useState } from "react"

//comment
const QuestionPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    let allOptions: String = math.Math.LevelOne[0].options
    let answerArray: Array<string> = allOptions.split(" , ")
    console.log(answerArray)

    function checkAnswer (){
        if(selectedAnswer === math.Math.LevelOne[0].correct){
            console.log("Correct");
        }else{
            console.log("Wrong");            
        }
    }

    return ( 
        <div className="questionCard">
            <h1 className="questionHeader">{math.Math.LevelOne[0].Problem}</h1>
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
            <div>
                <button className="sumbitButton" onClick={()=>checkAnswer()}>Submit</button>
            </div>
        </div>
     );
}
 
export default QuestionPage;