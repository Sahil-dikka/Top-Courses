import React, { useEffect, useState } from "react";
import {filterData,apiUrl} from "./data"
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

const App = () => {
  
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect ( () => {

    const fetchData = async() => {

      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
        
      }
      catch(error){
        toast.error("Something went wrong");
      }

    }
    fetchData();
  },[]);

  return (

  <div className="min-h-secreen flex flex-col">

    <div>
        <Navbar/>
    </div>

    <div>
        <Filter filterData = {filterData}
        category = {category}
        setCategory = {setCategory}
        />
    </div>

    
        <Cards courses = {courses} category ={category}/>
  </div>

  )
};

export default App;
