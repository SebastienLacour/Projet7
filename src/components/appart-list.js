import appartList from "./apparts";
import axios from 'axios'
import '../styles/appart-list.css'
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


console.log(appartList);

const Appartlist = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async() => {
    //         const result = await axios(
    //             'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json',
    //         )
    //         setData(result.data);
    //     };
    //     fetchData();
    // },[])
    // console.log(data) 
//      return (
//   <div className="appart-list">
//          {data.map(item =>(
//              <Link to={"/logement/" + item.id} key={item.id} className="appart">
//                  <img src={`${item.cover}`} alt="logement" className="appart__picture" />
//                  <strong className="appart__title">{item.title}</strong>
//              </Link>
//          ))}
//      </div> 
//     )
  return (
     <div className="appart-list">
         {appartList.map((appart => (
            <Link to={"/logement/" + appart.id} key={appart.id} className="appart">
                <img src={`${appart.cover}`} alt="logement" className="appart__picture"/>
                <strong className="appart__title">{appart.title}</strong>
             </Link>
         )))}
         <Outlet />
    </div> 

       
    )
 }
            
console.log(Appartlist)

export default Appartlist