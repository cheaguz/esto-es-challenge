import React from 'react'
import './Home.styles.css';
import { useProject } from '../../hooks/useProject';
import { takeInitials } from '../../utils/takeInitials';
import { MenuButton } from './MenuButton';
 
export const Home = () => {
  const { data } = useProject();

  return (
    <div className='home'>
      <div className='SubHeader'>
        <h1> My projects </h1>
        <button> + Add project</button>
      </div>
      <section>
        <div className='wrapper'>
          <div className='grid-titles'>
            <div>Project info</div>
            <div>Project Manager</div>
            <div>Assigned to</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {data.map((d, i) => (
            <div className='grid-row' key={i}>
              <div>
                <span> {d.title} </span>
                <br />
                <span> {d.date} </span>
              </div>

              <div>
                <div className='circle'> <span>{takeInitials(d.projectManager.name)}</span></div>
                <span> {d.projectManager.name} </span>
              </div>
              <div>
                <div className='avatars'>
                  {d.assignedTo.image !== '' 
                  ? <div className='circle-img'>
                     <img src={d.assignedTo.image} alt='profile'/>
                      <span> {d.assignedTo.name} </span> 
                    </div>
                  : <div className='circle'>
                    <span>{takeInitials(d.assignedTo.name)}</span>
                     <span> {d.assignedTo.name} </span>
                  </div>}
                  
                </div>
              
              </div>
              <div><button className='btn_status'> {d.status} </button></div>
              <div >
                <MenuButton />             
               </div>
            </div>
          ))}



        </div>
      </section>
    </div>

  )
}
