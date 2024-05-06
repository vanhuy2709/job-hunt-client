import { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { epilogue } from "@/lib/font";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const FilterTypeEmployment = () => {

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
            Type of Employment
          </Typography>
        </ListItemText>
        {open ?
          <ExpandLess sx={{ width: '20px', height: '20px' }} />
          :
          <ExpandMore sx={{ width: '20px', height: '20px' }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Full-time" />
          <FormControlLabel control={<Checkbox />} label="Part-time" />
          <FormControlLabel control={<Checkbox />} label="Remote" />
          <FormControlLabel control={<Checkbox />} label="Internship" />
          <FormControlLabel control={<Checkbox />} label="Contract" />
        </FormGroup>
      </Collapse>
    </List>
  )
}

export default FilterTypeEmployment