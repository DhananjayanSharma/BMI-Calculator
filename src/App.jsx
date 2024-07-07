import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [isHeight, setIsHeight] = useState(true)
  const [IsWeight, setIsWeight] = useState(true)


  const validate = (e) => {
    const name = e.target.name
    const value = e.target.value
    /*   console.log(name,value);
      console.log(!!value.match(/^[0-9]*$/)); */

    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'Height') {
        setHeight(value)
        setIsHeight(true)
      }
      else if (name == 'Weight') {
        setWeight(value)
        setIsWeight(true)
      }
    }
    else {
      if (name == 'Height') {
        setHeight(value)
        setIsHeight(false)
      }
      else if (name == 'Weight') {
        setWeight(value)
        setIsWeight(false)
      }

    }
  }

  const handleReset = () => {
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
    setBmi(0)
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (height == "" || weight == "") {
      alert('please fill the form completely')
    }
    else {
      setBmi(Math.floor(weight / ((height * height) / 10000)))
    }

  }


  return (
    <>

      <div style={{ height: "100vh", backgroundColor: "rgb(124, 142, 168)" }} className='d-flex border  justify-content-center align-items-center' >
        <div style={{ background: "white" }} className='p-5 rounded justify-content-center align-items-center'>
          <h1 className='ms-4' style={{color:"rgb(11, 74, 23)"}}>BMI CALCULATOR</h1>
          <div className='rounded' style={{ backgroundColor: "rgb(40, 109, 149)", height: "300px", width: "400px" }} >


            {/*   <h4>BMI Result{bmi} </h4>
          
              {bmi<=18.6 &&<h1 >underweight</h1>}
              {bmi >= 18.6 && bmi < 24.9 &&<h1>normal</h1>} */}
              <h4 className='p-2' style={{color:"white"}}>BMI Result:{bmi} </h4>
            <ReactSpeedometer
              width={400}
              needleHeightRatio={0.65}
              value={bmi}
              segments={4}
              customSegmentStops={[0, 18, 25, 30, 58]}
              minValue={0}
              maxValue={58}
              currentValueText="BMI"
              customSegmentLabels={[
                {
                  text: "underWeight",
                  position: "INSIDE",
                  color: "#555"
                },
                {
                  text: "healthy",
                  position: "INSIDE",
                  color: "#555"
                },
                {
                  text: "over",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: "19px"
                },
                {
                  text: "Obesity",
                  position: "INSIDE",
                  color: "#555"
                },

              ]}
              ringWidth={47}
              needleTransitionDuration={3333}
              needleTransition="easeElastic"
              needleColor={"#90f2ff"}
              textColor={"#d8dee9"}

            />

 

          </div>
          

          <div className='mt-3 justify-content-center align-items-center ' >
            <form action="" onSubmit={handleCalculate}>
              <div className='mt-2 '>
                <TextField id="outlined-basic" label="Height" value={height || ""} variant="outlined" className='w-100' onChange={(e) => validate(e)} name='Height' />
                {!isHeight && <p className='text-danger'>*invalid input </p>}

              </div>
              <div className='mt-2'>
                <TextField id="outlined-basic" label="Weight" value={weight || ""} variant="outlined" className='w-100' onChange={(e) => validate(e)} name='Weight' />
                {!IsWeight && <p className='text-danger'>*invalid input </p>}
              </div>

              <div className='justify-content-center align-items-center mt-4'>
                <Button className='' style={{ width: "150px", padding: "12px" }} variant="contained" disabled={isHeight && IsWeight ? false : true} type='submit'>Calculate BMI</Button>
                <Button variant="contained" className='ms-5' style={{ width: "150px", padding: "12px" }} onClick={handleReset} >Reset</Button>
              </div>


            </form>
          </div>


        </div>
      </div>

    </>
  )
}

export default App
