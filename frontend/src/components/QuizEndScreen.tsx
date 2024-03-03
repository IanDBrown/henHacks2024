//import { useLocation } from 'react-router-dom';
//import QuestionPage from "./QuestionPage";

import endScreenCss from "../css/quizEndScreen.module.css";

//const [sum, setSum] = useState<number>(0);

  // Retrieve 'sum' from local storage when the component mounts
    const score = localStorage.getItem('score');
    const level = localStorage.getItem('level');
    

const QuizEndScreen = () => {
   // const location = useLocation();
    //const sum = location.state?.sum || 0; // Default value is 0 if 'sum' is not present
    return ( 
        <div className={endScreenCss.resultCard}>
          <h2 className={endScreenCss.firstHeader}>Number of questions you got correct: {score}!</h2>
          <h2>You ended on a level {level} question!</h2>
        </div>
     );
}
 
export default QuizEndScreen;