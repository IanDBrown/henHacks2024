import "../css/QuestionPage.css"
const QuestionPage = () => {
    console.log(math);
    return ( 
        <div className="questionCard">
            <h1 className="questionHeader">Question:</h1>
            <form>
                <div className="multipleChoiceDiv">
                    <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option1"/>
                    Option 1
                    </label>
                </div>

            <div className="multipleChoiceDiv">
                <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option2"/>
                    Option 2
                </label>
            </div>

            <div className="multipleChoiceDiv">
                <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option3"/>
                    Option 3
                </label> 
            </div>

            <div className="multipleChoiceDiv">
                <label className="multipleChoiceLabel">
                    <input className="multipleChoice" type="radio" name="react-tips" value="option4"/>
                    Option 4
                </label> 
            </div>
            </form>
        </div>
     );
}
 
export default QuestionPage;