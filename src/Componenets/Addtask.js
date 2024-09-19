import { useState, useEffect } from "react";
import "./Addtask.css";
import Cookies from "universal-cookie";
const Addtask = () => {
  const cookies = new Cookies();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState({});
  const [description, setDescription] = useState({});
  let user = cookies.get("user")._id;

 
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/task/65de19704504d32d04c7ee43",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await response.json();
      //   console.log(result.data);
      setData(result.Data);
    } catch (error) {
      console.error("Error fetching tree data:", error);
      // Handle error appropriately, e.g., show error message to user
    }
  };
  const deleteTask=async(id)=>{
    
    await fetch(`http://localhost:5000/task/${id}`,{
      method:"delete",
      headers:{'content-Type':'application/json'},
    });
    fetchData();
  };

  const updateSataus=async(Status,id)=>{
    console.log(Status,id);
    const result=await fetch(`http://localhost:5000/task/status/${id}`,{
      method:"PATCH",
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({
        Status:Status
      }),
    });
    fetchData();
      
  };
  const confirmdelete=(id)=>{
     if(window.confirm("Are you sure you want to delete this task")){
      deleteTask(id);
     }
  }

  function finished()
  {
    alert("Finished")
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function addtask() {
    await fetch("http://localhost:5000/task", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        Title: title,
        Description: description,
        UserId: user,
      }),
    });

    let tit=document.getElementById('title');
    let des=document.getElementById('des');
    tit.value=" ";
    des.value=" ";
    fetchData();
    // console.log(result);
  }

  const updateValue=async(id)=>{
       const result=await fetch(`http://localhost:5000/task/${id}`,{
         method:"PATCH",
         headers:{'content-Type':"application/json"},
         body:JSON.stringify({
             Title:title,
             Discription:description,
             UserId:user,
         })
       })
       fetchData();
  }
  const confirmdelete1=(id)=>{
    if(window.confirm("Are you sure you want to update this task")){
      updateValue(id);
    }
 }

  const updateTask=(title,des,id)=>{
     const titl=document.getElementById('title');
     const dis=document.getElementById('des');
     titl.value=title;
     dis.value=des;
  }

  return (
    <div className="allDiv">
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-12">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h1 className="text-center my-3 pb-3" style={{textShadow:"2px 2px 2px green"}}><marquee>To Do App</marquee></h1>

                <div className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <div className="col-12">
                    <div className="form-outline">
                      <input style={{width:"200px"}}
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder=" Enter a task here"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />


                 
                      <label className="form-label" for="form1"></label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-outline">
                      <input style={{width:"200px"}}
                        type="text"
                        id="des"
                        className="form-control"
                        placeholder=" Enter a description here"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      
                <div className="col-12">
                    <button style={{margin:"12px",marginLeft:"250px"}} type="submit" className="btn btn-primary"  onClick={addtask} >Add Task</button><br></br>
                    <button style={{marginLeft:"230px"}} type="submit" className="btn btn-primary">Update</button>

                  </div>
                      <label className="form-label" for="form1"></label>
                    </div>
                  </div>

                 
                </div>

                <table className="table table-bordered border-primary">
                   <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead> 
                  <tbody>
                    {data.map((task,index) => {
                      return (
                        <tr>
                          <td>{index++}</td>
                          <strong onClick={()=>{updateTask(task.Title,task.Description,task._id)}}> {task.Title} </strong>
                          <td onClick={()=>{updateTask(task.Title,task.Description,task._id)}}>{task.Description}</td>
                          <td>
                          <select value={task.Status} onChange={(e)=>{updateSataus(e.target.value,task._id)}}>
                             <option>pending</option>
                             <option>complete</option>
                          </select>
                          </td>

                          <td>
                            <button type="submit" className="btn btn-danger" onClick={()=>{confirmdelete(task._id)}}>
                              Delete
                            </button>
                            <button style={{width:"120px"}}
                              type="submit"
                              className="btn btn-success ms-1" onClick={()=>{confirmdelete1(task._id)}}
                            >
                              update
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Addtask;
