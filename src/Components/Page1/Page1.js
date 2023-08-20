import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SvgPage from "./Svg";


function Page1(props) {
  const {email, setEmail, returned, setReturned, sCorp, setSCorp, setOwnership, ownership} = props;
  return (
    <>
      <div>
        <TextField
          required
          sx={{width: '250px' , mt:'20px'}}
          id="outlined-required"
          label="Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <br />
      
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Did you file the returns last year?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={returned}
            onChange={(e)=>setReturned(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />}  label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      
      <div>
        <SvgPage />
        </div>
        <br />
      
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" sx={{ml:'40px'}}>
            Was the S-Corp incorporated in 2022?
          </FormLabel>
          <RadioGroup
          sx={{ml:'40px'}}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={sCorp}
            onChange={(e)=>setSCorp(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes"  />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      
      <div>
        <SvgPage />
        </div>
        <br />
      
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" sx={{ml:'170px'}}>
            Was there any change in Ownership structure in 2022?
          </FormLabel>
          <RadioGroup
          sx={{ml:'170px'}}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={ownership}
            onChange={(e)=>setOwnership(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes"  />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      
      <div>
        <SvgPage />
        </div>
        <br />
      
    </>
  );
}

export default Page1;
