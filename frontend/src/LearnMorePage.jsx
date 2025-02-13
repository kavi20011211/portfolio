import React,{useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {createQuote,reset} from './features/UserQuote/UserQuoteSlice';
import {Link} from 'react-router-dom';

function LearnMorePage() {
  const skills = [
    { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "C#", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
    { name: "Flutter", icon: "/flutter.png" },
    { name: "Express", icon: "/express.png" },
    { name: "Spring", icon: "/spring.png" },
    { name: "Redux", icon: "/redux.png" },
    { name: "AWS", icon: "/aws.png" },
    { name: "Jenkins", icon: "/jenkins.png" },
    { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
    { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png" },
    { name: "MongoDB", icon: "/mongodb.png" },
    { name: "Firebase", icon: "/firebase.png" },
    { name: "PostgreSQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
  ];

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:''
  })

  const {name,email,imessage} = formData;

  const dispatch = useDispatch();

  const {quotes,isSuccess,isError,message} = useSelector((state)=>state.quote);

  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit =(e)=>{
    e.preventDefault();

    if(!name,!email,!imessage){
      alert('Required fields must be filled with values')
    }

    const quoteData = {
      name,
      email,
      message:imessage
    }
    console.log(quoteData);
    dispatch(createQuote(quoteData));
  }

  useEffect(() => {
    
    if (isSuccess) {
      alert('Added quote successfully!');
    }
    
    if (isError) {
      console.log(message);
      alert(message)
    }

    dispatch(reset());
  }, [isSuccess, isError, message, dispatch]);
  

  return (
    <div className='relative flex flex-col w-full h-screen '>
        <div className='relative flex-1 flex items-center justify-center p-5'>
        <div className="p-1 w-56 h-60 rounded-lg border-2 border-cube-color overflow-hidden flex items-center justify-center md:w-80 md:h-96">
            <img src="/profile-pic.jpg" className="h-full w-full object-fill" alt="Profile" />
        </div>

            <div className='p-4 w-6/12 text-left'>
                <h1 className='text-3xl font-bold mb-2 md:text-4xl'>About me</h1>
                <h4 className='text-sm font-semibold mb-3 md:text-3xl'>I can make <span className='text-cube-color font-bold'>software solutions</span> for your unique business needs.</h4>
                <p className='text-xs md:text-xl'>Hi, I'm Uvindu Suraweera currently based in Colombo, Sri Lanka. I'm studying a bachelor's IT degree at SLIIT university.
                Focus on developing software solutions for web, mobile and desktop to ease the businesses needs in a streamling way.
                Highly motivated and indie developer best for your idea to make reality. I hope to gain more. Contact me for take my services. Adios amigo!👋</p>
            </div>
        </div>
        <div className='flex flex-col p-5'>
          <div className='p-4 w-6/12 text-left'>
            <h1 className='text-xl font-bold mb-2 md:text-4xl md:pl-[250px]'>Featured Projects</h1>
          </div>

          <div className="flex flex-col p-10 justify-center items-center md:flex-row gap-4">
          {[
            { title: "CyberSeeds", description: "a digital twin software for tea plantations.", link: "#" },
            { title: "Custom NLP agent bot", description: "a NLP bot to interact with my customers.", link: "#" },
            { title: "Job marketplace app", description: "a mobile application for post jobs.", link: "#" },
            ].map((item, index) => (
            <div key={index} className="h-44 w-48 md:h-64 md:w-72 border-2 border-cube-color rounded-md p-4 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-2 md:mb-5">{item.title}</h4>
                <p className="">{item.description}</p>
              </div>
              <button disabled className="bg-cube-color text-text-color px-4 py-2 rounded-md text-center w-fit">
                View live
              </button>
            </div>
          ))}
        </div>
        </div>
        
    <div className="flex flex-col p-5 bg-black text-white mt-4 mb-4 md:mt-8 md:mb-8">
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold mb-4 md:text-4xl">My Skills</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16" />
              <p className="mt-2 text-sm md:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


        <div className='flex w-full justify-center items-center mb-8 mt-3 md:mb-28 md:mt-8'>
          <div className='w-52 text-left felx-col md:w-80'>
            <h4 className='text-lg font-semibold text-text-color mb-3 md:text-3xl md:font-bold md:mb-6'>Get a quote</h4>
            <p className='font-normal text-left md:font-medium'>If you need to connect with me for a project. Fill the form or send an email or message to below contact details. Thank you.</p>

            <div className='flex flex-row gap-10 mt-3 mb-3 md:gap-16 md:mt-6 md:mb-6'>
              <Link to='https://www.instagram.com/hey_im_kavi.01/'><i class="bi bi-instagram"></i></Link>
              <Link to='https://www.linkedin.com/in/uvindu-suraweera-03b527216/'><i class="bi bi-linkedin"></i></Link>
              <Link to='https://github.com/kavi20011211'><i class="bi bi-github"></i></Link>
            </div>

            <p className='font-normal text-left md:font-medium'>kavishkauvindu0@gmail.com</p>
            <p className='font-normal text-left md:font-medium'>+94 74 288 9331</p>
            <p className='font-normal text-left md:font-medium'>Colombo, Sri Lanka</p>
          </div>

          <div className="w-52 h-auto flex flex-col border-4 border-cube-color md:w-80 p-4 rounded-lg shadow-md">
            <form className="flex flex-col gap-3" onSubmit={onSubmit}>
              <input type="text" placeholder="Enter your name" className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2   text-text-color" name='name' id='name' onChange={onChange} value={name}/>
              <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2   text-text-color" name='email' id='email' onChange={onChange} value={email}/>
              <textarea type="text" placeholder="Enter your message" className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2   text-text-color" name='imessage' id='imessage' onChange={onChange} value={imessage}/>
              <button className="bg-cube-color text-white px-4 py-2 rounded-md text-center w-full hover:bg-cube-color transition-all">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className='w-full flex justify-center items-center'>
          <p className='font-medium'>uvnidu kavishka | 2025 | All right reserved</p>
        </div>
    </div>
  )
}

export default LearnMorePage