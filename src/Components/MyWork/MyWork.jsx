import React from 'react'
import './MyWork.css'
import theme_patteren from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src= {theme_patteren} alt="" />
      </div>
      <div className="mywork-container">
         {mywork_data.map ( (work,index)=> {
          
          return  (
            <img onClick={() => window.open(work.w_link, '_blank')} key={index} src= {work.w_img} alt="" />
          
            )
         })}
     </div>
    
      {/*<div className="mywork-showmore">
        <p>Show More</p>
        <img src= {arrow_icon} alt="" />
     </div>*/ }
    </div>
  )
}

export default MyWork
