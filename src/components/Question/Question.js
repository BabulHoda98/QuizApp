import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import "./Question.css";
// import { Question } from '.components/Question/Question';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    score,
    setScore,
    // setQuestions
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "select";
        } else if (selected === i && selected !== correct) {
            return "wrong";
        } else if (i === correct) {
            return "select";
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    }
    // const history = useHistory();
    const navigate = useNavigate();

    const handleNext = () => {
        if (currQues > 8) {
            // history.pushState("/result")
            navigate("/result")
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
        } else {
            setError("Please select an option first");
        }
    };
    const handleQuit = () => {

    }
    return (
        <div className='question'>
            <h1>Question {currQues + 1}</h1>
            <div className='singleQuestion'>
                <h2>{questions[currQues].question}</h2>
                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {options && options.map(i => <button
                        onClick={() => handleCheck(i)}
                        className={`singleOption ${selected && handleSelect(i)}`}
                        key={i}
                        disabled={selected}
                    >{i}</button>
                    )}
                </div>
                <div className='controls'>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{ width: 150 }}
                        href="/"
                        onClick={handleQuit}
                        display="flex"
                        align-item="center"
                    >Quit</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: 150 }}
                        onClick={handleNext}
                    >NextQuestion</Button>

                </div>

            </div>

        </div>
    )
}

export default Question
