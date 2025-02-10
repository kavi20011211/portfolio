import React from 'react'
import {useNavigate} from 'react-router-dom';

function MainContainer() {

  const navigate = useNavigate();

  const onClickNavigate=()=>{
    navigate('/more');
  }

  return (
    <div className="bg-background-color w-[100%] max-w-4xl rounded-lg p-10 overflow-hidden">
          
          <h1 className="text-cube-color text-xl font-bold">
            Dev.<span className="text-white">me</span>
          </h1>

          
          <div className="mt-10">
            <p className=" text-sm">— Hello</p>
            <h2 className="text-white text-4xl font-bold mt-2 lg:text-5xl">
              I'm <span className="text-cube-color">Uvindu Suraweera</span>
            </h2>
            <p className="mt-4 ">
              A Software Engineer and a Full Stack Developer (Web/Mobile) based in Sri Lanka.
            </p>

            
            <button className="mt-6 px-6 py-3 bg-cube-color text-white rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
            onClick={onClickNavigate}>
              Learn more
            </button>
          </div>
    </div>
  )
}

export default MainContainer