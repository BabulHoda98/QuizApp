import axios from "axios"
import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Header/Footer/Footer';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Categories from './data/Categories';

const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestion = async (category = "", difficulty = "") => {

    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    console.log(data);
    setQuestions(data.results);
  };


  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: 'url(./ques1.png)' }}>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home name={name}
              setName={setName}
              fetchQuestion={fetchQuestion}
            />} />
          <Route path="/quiz" element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />} />
          <Route path="/result" element={
            <Result score={score} 
            />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
