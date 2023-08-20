import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Box from '@mui/joy/Box';
 
function FormPage() {
  const [page, setPage] = useState(0);
 const [email, setEmail] = useState("");
 const [returned, setReturned] = useState('');
 const [sCorp, setSCorp] = useState('');
 const [ownership, setOwnership] = useState('');
 let [checkBox1, setCheckbox1] = useState([]);
 let [checkBox2, setCheckbox2] = useState([]);

 const handleCheckbox1 = (e) => {
    const {value, checked} = e.target;
    console.log(`${value} is ${checked}`);
    if(checked){
      setCheckbox1([...checkBox1, value]);
    } else {
      setCheckbox1(checkBox1.filter((e) => e!==value))
    }
 }

 const handleCheckbox2 = (e) => {
  const {value, checked} = e.target;
  console.log(`${value} is ${checked}`);
  if(checked){
    setCheckbox2([...checkBox2, value]);
  } else {
    setCheckbox2(checkBox2.filter((e) => e!==value))
  }
}

const formTitles = ['Page1', 'Page2']
const handleSubmit = (e) => {
 e.preventDefault();
 const data = new FormData();
 data.append('email', email);
 data.append('returned', returned);
 data.append('sCorp', sCorp);
 data.append('ownership',ownership);
 data.append('checkBox1',checkBox1);
 data.append('checkBox2', checkBox2);

 console.log(data.get('email'));
 console.log(data.get('returned'));
 console.log(data.get('sCorp'));
 console.log(data.get('ownership'));
 console.log(data.get('checkBox1'));
 console.log(data.get('checkBox2'));
 alert("Form Submitted")
 
}
  
  const displayPage = () => {
    if (page === 0){
        return (
        <Page1 
        email={email} 
        setEmail={setEmail}
        returned={returned}
        setReturned={setReturned}
        sCorp={sCorp}
        setSCorp={setSCorp}
        ownership={ownership}
        setOwnership={setOwnership}
         />
        )
    } else {
        return (
        <Page2
        checkBox1={checkBox1}
        checkBox2={checkBox2}
        setCheckbox1={setCheckbox1}
        setCheckbox2={setCheckbox2}
        handleCheckbox1={handleCheckbox1}
        handleCheckbox2={handleCheckbox2}
        handleSubmit = {handleSubmit}
        />
        )
    }
  }
  return (
    <div className="form-container">
      <div className="body">
        {displayPage()}
      </div>
      <div className="footer">
        <Box sx={{display:'flex', justifyContent:'space-evenly', gap:2, flexWrap:'wrap' }}>
          <Button
          variant="contained"
          color="success"
          disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </Button>
          <Button
          variant="contained"
          color="success">Save</Button>
          <Button
          variant="contained"
          color="success"
            disabled={page === formTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </Button>
          </Box>
          
      </div>
    </div>
  );
}

export default FormPage;
