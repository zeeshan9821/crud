import React, { useContext, useState } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {ListGroup,ListGroupItem,Button} from "reactstrap";
import { Pagination } from 'react-bootstrap'

export const UserList = () => {
  const[activePage,setActivePage]=useState(2);
  const { users, removeUser } = useContext(GlobalContext);

  function handlePageChange(pageNumber){
    console.log(`active page is ${pageNumber}`);
    setActivePage({activePage: pageNumber});
  }


  return (
    
    <ListGroup className="mt-4">
      
      
      <div style={{color:"blue"}} className="row">
  <div  className="col-sm-4"><strong>NAME</strong></div>
  <div style={{textAlign:"left" }} className="col-sm-4"><strong>DATE</strong></div>
  <div style={{textAlign:"center"}} className="col-sm-4"><strong>ACTION</strong></div>
</div>

      {users.length > 0 ? (
        <React.Fragment>
          
     

          {users.map(user => (
           
            <div style={{marginTop:"5px"}} className="row" key={user.id}>
             
              
              <div className="col-sm-4">{user.name}</div>
              <div  className="col-sm-4">{user.date}</div> 
              
              <div  className="col-sm-4">
                <Link to={`/edit/${user.id}`} style={{marginLeft:"2px"}}  className="btn btn-warning btn-sm float-right">Edit</Link>
                <Button  onClick={() => removeUser(user.id)}   className="btn btn-success btn-sm float-right">Delete</Button>
              </div>
             
            </div>
          ))}
<br></br>
<Pagination
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={30}
          pageRangeDisplayed={3}
          onChange={handlePageChange.bind(this)}
        />
          
        </React.Fragment>

   

        
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
   
    </ListGroup>
  )
}
