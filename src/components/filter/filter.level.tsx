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
import { sendRequest } from "@/utils/api";

const FilterLevel = () => {
  const [open, setOpen] = useState(true);
  const [listLevel, setListLevel] = useState<Array<ILevel>>([]);

  const handleClick = () => {
    setOpen(!open);
  };

  // Get data level
  const getDataLevel = async () => {
    const res = await sendRequest<IBackendRes<ILevel[]>>({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/levels/list`
    })

    if (res && res.data) {
      setListLevel(res.data);
    }
  }

  useEffect(() => {
    getDataLevel();
  }, [])

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
          {listLevel.map(level => (
            <FormControlLabel
              key={level._id}
              control={<Checkbox sx={{
                "&.Mui-checked": {
                  color: '#4640DE'
                }
              }} />}
              label={level.name}
            />
          ))}
        </FormGroup>
      </Collapse>
    </List>
  )
}

export default FilterLevel;