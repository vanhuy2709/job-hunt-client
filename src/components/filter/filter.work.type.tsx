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
import { sendRequest } from "@/utils/api";

const FilterWorkType = () => {
  const [open, setOpen] = useState(true);
  const [listWorkType, setListWorkType] = useState<Array<IWorkType>>([]);

  const handleClick = () => {
    setOpen(!open);
  };

  // Get data work type
  const getDataWorkType = async () => {
    const res = await sendRequest<IBackendRes<IWorkType[]>>({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/worktypes/list`
    })

    if (res?.data) {
      setListWorkType(res.data);
    }
  }

  useEffect(() => {
    getDataWorkType();
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
          {listWorkType.map(workType => (
            <FormControlLabel
              key={workType._id}
              control={<Checkbox sx={{
                "&.Mui-checked": {
                  color: '#4640DE'
                }
              }} />}
              label={workType.name}
            />
          ))}
        </FormGroup>
      </Collapse>
    </List>
  )
}

export default FilterWorkType;