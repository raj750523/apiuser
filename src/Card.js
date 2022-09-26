/* eslint-disable react/jsx-no-duplicate-props */
import React ,{useState,useEffect} from 'react'

function Card() {
    const [user,setUser] = useState([]);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    const [id, setId] = useState(1);
  
    const fetchData =()=>{
        fetch("https://randomuser.me/api/")
        .then((response) =>{
            return response.json(12);
            
         
        }).then((data)=>{
            let raj = data.results
            console.log(raj);
            setUser(raj)

          })
            .catch(err => {
              console.log(err);
            });
        
        
    }
    const handleClick = () => {
      setIdFromButtonClick(id);
    };
   
    useEffect(()=>{
      
        fetchData();
    },[idFromButtonClick])
  
    return (
     
        <div className="clearfix">
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn">
              
            <nav class="navbar navbar-light bg-light">
              
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="number"onChange={e => setId(e.target.value)} placeholder="next user"/>
            
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleClick} type="submit"> click next user</button>
            <nav class="nav flex-column">
  <a class="nav-link active" href="/"> firstName</a>
  <a class="nav-link" href="/">LastName</a>
  <a class="nav-link" href="/">Addfress</a>
  <a class="nav-link" href="/">mobile No</a>
  <a class="nav-link" href="/">Email</a>
</nav>

            </form>
 
            
            </nav>
            
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state}
                    <br />
                    <span className="phone">{data.phone}</span>
                    <br></br>
                    <span className="email">{data.email}</span>
                     
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    
    )
}

export default Card
