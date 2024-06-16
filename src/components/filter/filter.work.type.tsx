import { epilogue } from "@/lib/font";
import { useEffect, useState } from "react";
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
  listWorkType: IWorkType[] | undefined;
  checkedWorkType: string[];
  setCheckedWorkType: (v: string[]) => void;
}

const FilterWorkType = (props: IProps) => {
  const { listWorkType, checkedWorkType, setCheckedWorkType } = props;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChecked = (name: string) => {

    // @ts-ignore
    setCheckedWorkType(prev => {
      const isChecked = checkedWorkType.includes(name);

      if (isChecked) {
        // Uncheck
        return checkedWorkType.filter(item => item !== name);
      } else {
        return [...prev, name]
      }
    })
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
            Working Type
          </Typography>
        </ListItemText>
        {open ?
          <ExpandLess sx={{ width: '20px', height: '20px' }} />
          :
          <ExpandMore sx={{ width: '20px', height: '20px' }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormGroup>
          {listWorkType && listWorkType.length > 0 &&
            listWorkType.map(workType => (
              <FormControlLabel
                key={workType._id}
                control={<Checkbox sx={{
                  "&.Mui-checked": {
                    color: '#4640DE'
                  }
                }} />}
                label={workType.name}
                checked={checkedWorkType.includes(workType.name)}
                onChange={() => handleChecked(workType.name)}
              />
            ))}
        </FormGroup>
      </Collapse>
    </List>
  )
}

export default FilterWorkType;