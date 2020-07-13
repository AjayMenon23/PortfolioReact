import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {scroller} from 'react-scroll'



const SideDrawer = (props) => {

  const scrollToElement =(element)=>{

    scroller.scrollTo(element,{
      duration :1000,
      delay : 100,
      smooth : true
    })
    props.onClose(false);
  }
  return (
	
  	<Drawer
  			anchor="left"
  			open={props.open}
  			onClose={()=>props.onClose(false)}

  	>
  	<List component="nav">

  		<ListItem button onClick={()=>scrollToElement('profile')}>
  			Profile
  		</ListItem>

  		<ListItem button onClick={()=>scrollToElement('projects')}>
  			About
  		</ListItem>
  		
  		<ListItem button onClick={()=>scrollToElement('tech')}>
  			Technical interests
  		</ListItem>

  		<ListItem button onClick={()=>scrollToElement('hobby')}>
  			Hobbies
  		</ListItem>

       <ListItem button onClick={()=>scrollToElement('contact')}>
        Contact Me
      </ListItem>


  	
  		
  		
  	</List>
  	</Drawer>


  )
}

export default SideDrawer;
