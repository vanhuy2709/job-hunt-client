import { epilogue } from "@/lib/font";
import { useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const listTypeOfElement = ['$700 - $1000', '$100 - $1500', '$1500 - $2000', '$3000 or above'];

const FilterSalary = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ width: '100%' }} disablePadding>
      <ListItemButton onClick={handleClick} sx={{ p: 0 }} style={{ backgroundColor: 'transparent' }}>
        <ListItemText>
          <Typography sx={{
            fontFamily: epilogue.style,
            fontWeight: '700',
            lineHeight: '150%',
            color: '#25324B',
          }}>
            Salary Range
          </Typography>
        </ListItemText>
        {open ?
          <ExpandLess sx={{ width: '20px', height: '20px' }} />
          :
          <ExpandMore sx={{ width: '20px', height: '20px' }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormGroup>
          {listTypeOfElement.map(item => (
            <FormControlLabel
              key={item}
              control={<Checkbox sx={{
                "&.Mui-checked": {
                  color: '#4640DE'
                }
              }} />}
              label={item}
            />
          ))}
        </FormGroup>
      </Collapse>
    </List>
  )
}

export default FilterSalary;