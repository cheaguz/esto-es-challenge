import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
import { MenuButton } from '../components/MenuButton';
import { SubHeader, RedButton, StyledContainer, StyledGrid, StyledCard,CardGrid } from '../components/styled/StyledIndex';
import { ProfileAvatar } from '../components/ProfileAvatar';
import { requestProjects } from '../redux/projectActions';
import { convertDate } from '../utils/FormatDate'
import { useResize } from '../hooks/useResize';

import { failureAlert } from '../utils/alerts';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPhone } = useResize()

   const { projects } = useSelector(state => {
    return state.projectsReducer
  })

  useEffect(()=>{
    dispatch( requestProjects() )
  },[dispatch])


  return (
    <>
      <SubHeader content='space-between'>
        <h1 id='title-h1'> My projects </h1>
        <RedButton onClick={()=> navigate('/new-project')}> + Add project </RedButton>
      </SubHeader>

      {isPhone &&
      <>
      <div style={{marginTop:'5%', marginBottom:'5%'}}>
        {projects.map((project, i) => (
          <StyledCard key={i}>
              <CardGrid>
                  <h3 className='project-name'> {project.title} </h3>
                  <p className='span-date'> Creation date : {convertDate(project.createdAt)} </p> 
                <ProfileAvatar name={project.assignedTo} image />  
                </CardGrid>
                <CardGrid> <MenuButton id={project.id} data ={project}/>  </CardGrid>
          </StyledCard>
        ))}
        </div>
        </>
      }   
      {!isPhone &&
      <StyledContainer >
        <div id='wrapper'>
          <StyledGrid >
            <div>Project info</div>
            <div>Project Manager</div>
            <div>Assigned to</div>
            <div>Status</div>
            <div>Action</div>   
          </StyledGrid>
          {projects.map((project, i) => (
            <StyledGrid key={i} fontSize={'14px'} fontWeight={'300'} background='#fff'>
                <div>
                  <span className='project-name'> {project.title} </span>
                  <br />
                  <span className='span-date'> Creation date : {convertDate(project.createdAt)} </span>
                </div>
                <ProfileAvatar name={project.projectManager} />         
                <ProfileAvatar name={project.assignedTo} image /> 
                <button id='btn_status' onClick={()=>failureAlert()}> {project.status} </button>   
                <MenuButton id={project.id} data ={project}/>                    
              </StyledGrid>
          ))} 
        </div>
      </StyledContainer>
    } 
      
     
    
    </>

  )
}
