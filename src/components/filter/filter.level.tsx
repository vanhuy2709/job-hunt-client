'use client';
import { epilogue } from "@/lib/font";
import { useState, useEffect } from "react";
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

interface IProps {
  listLevel: ILevel[] | undefined;
  checkedLevel: string[];
  setCheckedLevel: (v: string[]) => void;
}

const FilterLevel = (props: IProps) => {
  const { listLevel, checkedLevel, setCheckedLevel } = props;
  const [open, setOpen] = useState(true);
  // const [checked, setChecked] = useState<Array<string>>([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChecked = (name: string) => {

    // @ts-ignore
    setCheckedLevel(prev => {
      const isChecked = checkedLevel.includes(name);

      if (isChecked) {
        return checkedLevel.filter(item => item !== name);
      } else {
        return [...prev, name];
      }
    });
  }


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
            Job Level
          </Typography>
        </ListItemText>
        {open ?
          <ExpandLess sx={{ width: '20px', height: '20px' }} />
          :
          <ExpandMore sx={{ width: '20px', height: '20px' }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormGroup>
          {listLevel && listLevel.length > 0 &&
            listLevel.map(level => (
              <FormControlLabel
                key={level._id}
                control={<Checkbox sx={{
                  "&.Mui-checked": {
                    color: '#4640DE'
                  }
                }} />}
                label={level.name}
                checked={checkedLevel.includes(level.name)}
                onChange={() => handleChecked(level.name)}
              />
            ))}
        </FormGroup>
      </Collapse>
    </List>
  )
}

export default FilterLevel;