import React from 'react'
import { useState } from 'react';


const questions =[{
  id: 1,
  hint: "passage you want to hate a small box on the floor with the marble fired from a spring loaded gun that is mounted on a table. That target box is a distance are horizontal from the age of the table see the figure to the right. You compressed to the spring a distance D but the centre of the marble Falls solved by a distance are of the centre of the box. How far should you compress the spring to score a direct hit?",
  question: "A block of mass m moves with a velocity v0 towards a stationery block of mass M (connected to a spring) on a smooth horizontal surface (sec figure). If spring constant is k, what is the maximum compression in the spring?",
  options: [
    "(A) v0(mk/2k(m+k))^1/2",
    "(B) v0(mk/k(m+k))^1/2",
    "(C) v0(2mk/2k(m+k))^1/2",
    "(D) None of these"
  ]
},
{
id: 2,
hint: "Maximum speed is at equilibrium where F=kx⇒x= f/k",
question:"A block of mass m is connected to a spring of force constant k. Initially the block is at rest and the spring has natural length. A constant force F is applied horizontally towards right. The maximum speed of the block will be (there is no friction between block and the surface)",
options:[
  " (A) F/(2mk)^1/2",
  "(B) F/(mk)^1/2",
  "(C) (2F)^1/2/(2mk)^1/2",
  "(D) None of these"
]
},
{
  id: 3,
  hint: "A block of mass m moving with velocity v0 collide with a stationary block of mass M to which a spring of stiffness k is attached. From the given diagram in the question, The velocity of the center of mass is- v= mV0/m+M",
  question:"A block of mass m moving with a velocity ν0collides with a stationary block of mass M to which a spring of stiffness k is attached, as shown in Fig. Choose the correct alternative.",
  options:[
    " (A) the velocity of the centre of mass is v0",
    "(B) F/(mk)^1/2",
    "(C) None of these",
    "(D) when the spring is in the state of maximum compression the kinetic energy in the centre of mass frame is zero"
  ]
  },
{
  id: 4,
  hint: "React allows componet-based approach",
  question: "What is a React component?",
  options: [
    " (A) A piece of HTML code",
    "(B) A JavaScript function",
    "(C) A piece of CSS code",
    "(D) A self-contained module that render some output"
  ]},
  {
    id: 5,
    hint: "A library",
    question: "What is React?",
    options: [
      "(A) A programming language",
      "(B) A JavaScript library for building user interfaces",
      "(C) A database management system",
      "(D) None of the above"
    ],
  },]


const DemoPage = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [currentQuestionNo, setCurrentQuestionNo] = useState(1)
    const [buttonStatus, setButtonStatus] = useState ({ 1: "#b9b6b6" })

  const [questionOnTheScreen, setQuestionOnTheScreen] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);
  const [ans, setAns]= useState(0)
  const [reviewWithAns, setReviewWithAns] = useState(0)
  const [reviewNoAns, setReviewNoAns] = useState(0)
  const [dump, setDump] = useState(0)
  const [noAns, setNoAns]= useState(0)
  // const [color, setColor]= useState({backgroundColor:'#1e90ff'})
  // const [isActive, setIsActive]= useState(true)
    const Subjects = ["All Sections", "PHYSICS", "CHEMISTRY", "MATHS"]

    const handleSubjectClick = (buttonName) => {
        setSelectedButton(buttonName);
      };
    //   const handleButtonClick = (buttonNo) => {
    //     setSelectedButton(buttonNo);
    //   };

   const  handleNextClick =()=>{
    // setCurrentQuestionNo(currentQuestionNo+1)
    if(questionOnTheScreen+1<questions.length){
      setCurrentQuestionNo((prevQuestion)=> prevQuestion +1)
      setQuestionOnTheScreen((prevQuestion)=>prevQuestion+1)
      setAns(ans + 1);
    }
    // setSelectedOption("");

    if (selectedOption) {
      setAns(ans + 1);
    } else {
      setNoAns(noAns + 1);
    }
    setSelectedOption(null);
    // setColor({backgroundColor: 'blue'})
    setButtonStatus({...buttonStatus, [currentQuestionNo]:'green'})
   }
   const  handleReviewClick =()=>{
    setCurrentQuestionNo(currentQuestionNo+1)
    setQuestionOnTheScreen((prevQuestion)=>prevQuestion+1)
    if ( selectedOption){

      setReviewWithAns(reviewWithAns + 1)
    }else{
      setReviewNoAns(reviewNoAns+1)
    }
    setButtonStatus({...buttonStatus, [currentQuestionNo]:'yellow'})
   }
   const  handleDumpClick =()=>{
    setCurrentQuestionNo(currentQuestionNo +1)
    setQuestionOnTheScreen((prevQuestion)=>prevQuestion+1)
    setDump(dump+1)
    setButtonStatus({...buttonStatus, [currentQuestionNo]:'white'})
   }
   
   const handleOptionSelect=(option)=>{
    setSelectedOption(option)
   }

   const handleClear =()=>{
    setSelectedOption(!selectedOption)
   }

   const handlePrev = ()=>{
    setCurrentQuestionNo((prevQuestion)=> prevQuestion -1)

    setQuestionOnTheScreen((prevQuestion)=> prevQuestion-1)
   }

   const noVisit =  questions.length - currentQuestionNo
   const currentQuestionData = questions[questionOnTheScreen];


  return (
    <>
      <nav><h2>DEMO ONLINE TEST</h2></nav>
      <div className='container'>
      <div className='container1'>
      <div className='subjects'>
      {Subjects.map((buttonName) => (
        <button
          key={buttonName}
          style={{ backgroundColor: selectedButton === buttonName ? 'blue' : '#1e90ff' }}
          onClick={() => handleSubjectClick(buttonName)}
        >
         {buttonName}
        </button>
      ))}
      </div>
      <div className='q-sec'>
        <div className='q-nav'>
        <p>Q No. : {currentQuestionNo} </p>
        <div className='options'>
        <p>View in:</p>
        <select>
            <option value='0'>English</option>
            <option value='1'>Hindi</option>
            <option value='2'>Bengali</option>
        </select>
        </div>
        </div>
       <div className='question-set'>
            {/* WRITE THE QUESTION HERE  */}
            <div className='insta'>
              <h2>QUESTION INSTRUCTION</h2>
              <p>{currentQuestionData.hint}</p>
            </div>
            <div className='ques'>
              <h2>QUESTION</h2>
              <p>{currentQuestionData.question}</p>
             {currentQuestionData.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionSelect(option)}
          />
         <p  className='opt'> {option}</p>
        </div>
      ))}
      
            </div>
       </div>
      </div>
      <div className='buttons'>
            <button onClick={handleClear} >CLEAR RESPONSE</button>
            <button onClick={handleReviewClick}>REVIEW</button>
            <button onClick={handleDumpClick}>DUMP</button>
            <button onClick={handlePrev}>PREVIOUS</button>
            <button onClick={handleNextClick}>NEXT</button>
      </div>
      </div>
      <div className='container2'>
        <div className='id'>
              <div>
                <img src='https://media.istockphoto.com/id/856597542/photo/passport-picture-of-a-laughing-turkish-businesswoman.jpg?s=612x612&w=0&k=20&c=89b1c27NJYWCB4IcFQkxf31764fPDHwxF4c0Ou7ewOA=' alt='image'/>
              </div>
              <div className='details'>
                <p>Time : </p>
                <p>Left</p>
                <p style={{fontStyle:'italic'}}>Malati Ghosh</p>

              </div>
        </div>
            <div className='pallete'>
                <p> Question Pallete</p>
                <div className='button-no'>
                {[1,2,3,4,5,6,7,8,9,10].map((buttonNo) => (
        <button
          key={buttonNo}
        //   style={{ backgroundColor: selectedButton === buttonNo ? 'blue' : '#afadad' }}
        //   onClick={() => handleButtonClick(buttonNo)}
        style={{ backgroundColor: buttonStatus[buttonNo] || "#b9b6b6" }}

        >
         {buttonNo}
        </button>
      ))}
                </div>
            <div className='result'>
                <p>Legend (Click to View)</p>
                <div className='msg'>
                  <p style={{backgroundColor: 'green'}}>{ans} Answer</p>
                  <p style={{backgroundColor: 'red'}}>{noAns} No Answer</p>
                  <p style={{backgroundColor: 'purple'}}>{reviewWithAns} Review+Ans</p>
                  <p style={{backgroundColor: 'yellow'}}>{reviewNoAns} Review-Ans</p>
                  <p style={{backgroundColor: 'grey'}}>{dump} Dump</p>
                  <p style={{backgroundColor: 'white'}}>{noVisit} No Visit</p>
                </div>
                <p style={{marginBottom: '10px', borderBottom:'2px solid white'}}>{currentQuestionNo} All Questions</p>
                <div className='result-button'>
                  <button>Profile</button>
                  <button>Instr</button>
                  <button>Questions</button>
                  <button>Submit</button>

                </div>
            </div>
            </div>
      </div>
      </div>
    </>
  )
}

export default DemoPage
