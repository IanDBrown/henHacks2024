import React, { useEffect, useState } from 'react';
//import { useLocation } from 'react-router-dom';
//import QuestionPage from "./QuestionPage";

//const [sum, setSum] = useState<number>(0);

  // Retrieve 'sum' from local storage when the component mounts
    const sum = localStorage.getItem('quizSum');
    

const QuizEndScreen = () => {
   // const location = useLocation();
    //const sum = location.state?.sum || 0; // Default value is 0 if 'sum' is not present
    return ( 
        
        <h1>Score:{sum}</h1>
     );
}
 
export default QuizEndScreen;