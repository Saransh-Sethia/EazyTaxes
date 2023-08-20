import * as React from "react";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import SvgPage from "../Page1/Svg";
import Button from '@mui/material/Button';
export default function Page2(props) {
  const {checkBox1, checkBox2, setCheckbox1, setCheckbox2, handleCheckbox1, handleCheckbox2, handleSubmit} = props;
  return (
    <>
      <Box>
        <Typography id="sandwich-group" level="body-sm" fontWeight="lg" mb={1}>
          Was there any following transaction in 2022
        </Typography>
        <Box role="group" aria-labelledby="sandwich-group">
          <List 
          size="sm"
          // value={checkBox1}
          onChange={(e)=>handleCheckbox1(e)}
          >
            <ListItem>
              <Checkbox 
              sx={{ml: '300px'}} 
              label="Capital Infusion"
              value="Capital Infusion"
              
               />
            </ListItem>
            <ListItem>
              <Checkbox 
              sx={{ml: '300px'}} 
              label="Capital Withdrawl"
              value="Capital Withdrawl"
              
               />
            </ListItem>
            <ListItem>
              <Checkbox 
              sx={{ml: '300px'}}
               label="Related Party Transaction"
               value="Related Party Transaction"
              
                />
            </ListItem>
          </List>
        </Box>
      </Box>
      <br />
      <div>
        <SvgPage />
      </div>
      <Box>
      <br />
        <Typography id="sandwich-group" level="body-sm" fontWeight="lg" mb={1}>
          Was there any following transaction in 2022
        </Typography>
        <Box role="group" aria-labelledby="sandwich-group">
          <List 
          size="sm"

          >
            <ListItem>
              <Checkbox
              sx={{ml: '300px'}}
               label="Bank Statements"
               value="Bank Statements"
               onChange={(e)=>handleCheckbox2(e)} />
            </ListItem>
            <ListItem>
              <Checkbox
              sx={{ml: '300px'}}
               label="Credit Card Statements"
               value="Credit Card Statements"
               onChange={(e)=>handleCheckbox2(e)} />
            </ListItem>
            <ListItem>
              <Checkbox
              sx={{ml: '300px'}}
               label="Form 10991"
               value="Form 10991"
               onChange={(e)=>handleCheckbox2(e)} />
            </ListItem>
            <ListItem>
              <Checkbox
              sx={{ml: '300px'}}
               label="Form 940/941"
               value="Form 940/941"
               onChange={(e)=>handleCheckbox2(e)} />
            </ListItem>
            <ListItem>
              <Checkbox
              sx={{ml: '300px'}}
               label="EIN Certificate"
               value="EIN Certificate"
               onChange={(e)=>handleCheckbox2(e)} />
            </ListItem>
            <ListItem>
              <Checkbox
              sx={{ml: '300px'}}
               label="IRS Acceptance letter of S-Corp"
               value="IRS Acceptance letter of S-Corp"
               onChange={(e)=>handleCheckbox2(e)} />
            </ListItem>
            <ListItem>
              <Checkbox
              sx={{ml: '300px'}}
               label="Financials(if prepared)"
               value="Financials(if prepared)"
               onChange={(e)=>handleCheckbox2(e)} />
            </ListItem>
          </List>
        </Box>
      </Box>
      <br />
      
      <div>
        <SvgPage />
      </div>
      <br />
      <Button
          variant="contained"
          color="success"
          onClick = {(e)=>handleSubmit(e)}
         >
            Submit
          </Button>
          <br />
          <br />
    </>
  );
}
