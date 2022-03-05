import   React,{useState} from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$${value}`;
}
const RangeSlider = () => {
  const [value, setValue] = useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        style={{color: 'green'}}
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <span style={{color: 'black',margin: '0 20px',fontWeight:700}}>Min: ${value[0]}</span>
      <span style={{color: 'black',margin:'0 20px',fontWeight:700}}>Max: ${value[1]}</span>
    </Box>
  );
};

export default RangeSlider;
