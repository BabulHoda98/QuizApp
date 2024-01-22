import React, { useState } from 'react'
import "./Home.css";
import TextField from '@mui/material/TextField';
import Categories from '../../data/Categories';
import { Button, MenuItem } from '@mui/material';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Home = ({ name, setName, fetchQuestion }) => {
    const [categary, setCategary] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    // const history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!categary || !difficulty || !name) {
            setError(true);
            return;
        }
        else {
            setError(false)
            fetchQuestion(categary, difficulty)
            // history.push("/quiz")
            navigate("/quiz");

        }
    }

    return (
        <div className='content'>
            <div className='settings'>
                <span
                    style={{ fontSize: 30 }}>
                    Quiz Setting
                </span>
                <img src='/quiz.svg' className='banner' alt='quiz img' />
                <div className='settings_select'>
                    {
                        error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>
                    }
                    <TextField
                        style={{ marginBottom: 25 }}
                        label="Enter your name"
                        variant="outlined"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value)
                        }}
                        value={name}
                    />
                    <TextField
                        select label="Select Category"
                        variant='outlined'
                        style={{ marginBottom: 30 }}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setCategary(e.target.value)}}
                        value={categary}

                    >
                        {
                            Categories.map((cat) => (
                                <MenuItem
                                    key={cat.category} value={cat.value}>{cat.category}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        select label="Select Difficulty"
                        style={{ marginBottom: 25 }}
                        variant="outlined"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setDifficulty(e.target.value)}}
                        value={difficulty}
                    >
                        <MenuItem
                            key="Easy" value="easy"> Easy
                        </MenuItem>
                        <MenuItem
                            key="Medium" value="medium"> Medium
                        </MenuItem>
                        <MenuItem
                            key="Hard" value="Hard"> Hard
                        </MenuItem>
                    </TextField>
                    <Button
                        variant='contained' color='primary' onClick={handleSubmit}> Start Quiz
                    </Button>

                </div>
            </div>

        </div>
    )
}

export default Home
