import React from 'react'
import img1 from '../../Assets/eventimg/ML.jpg'
import calender from '../../Assets/elements/calender.jpg'
import clock from '../../Assets/elements/clock.png'
import loc from '../../Assets/elements/loc.png'

import mentorimg from '../../Team/sanchit.jpeg';
import {FaChalkboardTeacher} from 'react-icons/fa'
import './Event.css'

const Event = ({ img, title, link, id }) => {
  return (


    
    <div className='maindiv'>
    <h1 className='title'>Event</h1>
    
    <div className='bg-div'> 
    
    <div className='upper-div'> 

    <div className=''>
   <img src={img1} className='img'/>
   </div>
    
   
    <div className='event'>
        <span className='event-title'>Machine Learning</span>
      
        <div> 
         <div className='event-details'>
            <img src={calender} className='icon'/>
            <span className=''>04 April,2022 - 06 April,2022</span>
         </div>
         <div className='event-details'>
            <img src={clock} className='icon'/>
            <span className=''> 4 PM - 6 PM</span>
         </div>
         <div className='event-details'>
            <img src={loc} className='icon'/>
            <span className=''>Google Meet</span>
         </div>
         </div>

         <div className='tags'>
            <div className='tag free'>$Free</div>
            <div className='tag upcoming'>#upcomingevent</div>
            <div className='tag workshop'>#MachineLearning</div>
         </div>

         <hr className='hr-line'/>

         <div className='mentor'>
         
         <div className=''>
         <div className='mentortxt'>
          <FaChalkboardTeacher className='mentoricon'/> 
          <span>Mentor</span>   
         </div>
        <div className='mentorname'>
         <img src={mentorimg}  className='mentorimg'/> 
         
         <div>
         <b>Sanchit Pandey</b> 
         <p>Front-End Developer</p> 
         </div>
        
         </div>
         
         </div>
       
       <div>
         <span className='attendees'>Attendees :</span>
         <p className='attendeesname'>Bipin Khatri, Sujan Khatri,  <u>8 others</u></p>
         </div>

      </div>

      <hr className='hr-line'/>


         <div className='wholesummary'>
            <h2 className='event-summary-title'>Event Summary</h2>
            <p className='event-summary-text'>Bachelor of Science in Computer Science and Information Technology (BSc. CSIT) is a four years degree launched by Tribhuvan University. BSc. CSIT program is being run by 10 constituent campus and 43 private campus under the affiliation of TU. BSc. CSIT course is a blend of both Computer Science and Information Technology i.e. it is a mixture of core courses that you find in a computer science degree and information technology degree. By that it means that students will get to stuudy both software development along with networking. If we compare computer science degree with Information Technology degree then we can find application development related course in a computer science degree whereas we can find network and system related subjects in an Information Technology degree.  </p>
         </div> 

  <div className='button'>
      <a  href=''>Register Now</a>
      </div>

    </div>
    </div>
    </div>


 
    <div className='middle-div'>

    <div className='middle-contents'>

      <span className='heading'>What is Machine Learning ?</span>
      <p className='description'>Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.
       IBM has a rich history with machine learning. One of its own, Arthur Samuel, is credited for coining the term, “machine learning” with his research (link resides outside ibm.com) around the game of checkers. Robert Nealey, the self-proclaimed checkers master, played the game on an IBM 7094 computer in 1962, and he lost to the computer. Compared to what can be done today, this feat seems trivial, but it’s considered a major milestone in the field of artificial intelligence.</p>
       
       <br/>

       <span className='heading'>About Mentor?</span>
      <p className='description'>Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.
       IBM has a rich history with machine learning. One of its own, Arthur Samuel, is credited for coining the term, “machine learning” with his research (link resides outside ibm.com) around the game of checkers. Robert Nealey, the self-proclaimed checkers master, played the game on an IBM 7094 computer in 1962, and he lost to the computer. Compared to what can be done today, this feat seems trivial, but it’s considered a major milestone in the field of artificial intelligence.</p>
    
       <br/>

      <span className='heading'>Hello mic test 123</span>
      <p className='description'>Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.
       IBM has a rich history with machine learning. One of its own, Arthur Samuel, is credited for coining the term, “machine learning” with his research (link resides outside ibm.com) around the game of checkers. Robert Nealey, the self-proclaimed checkers master, played the game on an IBM 7094 computer in 1962, and he lost to the computer. Compared to what can be done today, this feat seems trivial, but it’s considered a major milestone in the field of artificial intelligence.</p>
    
    </div>
    </div>

    <div className='lower-div'>
         <div className='reviews-title'>Top Reviews</div>

     <div className='review-section'>
         
         <div className='review-box'>
          abc
         </div>

         <div className='review-box'>
           abc
        </div>

        <div className='review-box'>
          abc
       </div>

         </div>
    </div>

    </div>

  )
}

export default Event