import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { epilogue } from "@/lib/font";
import { sendRequest } from "@/utils/api";
import { useSearchParams } from "next/navigation";

const FilterLocation = () => {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(true);
  const [listLocation, setListLocation] = useState<Array<ILocation>>([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const inputLocation = searchParams.get('location');

  // Get data location
  const getDataLocation = async () => {
    const res = await sendRequest<IBackendRes<ILocation[]>>({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/locations/list`
    })

    if (res?.data) {
      setListLocation(res.data)
    }
  }

  // Handle check location
  // const [locationListCheck, setLocationListCheck] = useState<Array<string>>([]);

  // const handleCheckLocation = (locationName: string) => {

  //   setLocationListCheck(prev => {
  //     const isChecked = locationListCheck.includes(locationName);

  //     if (isChecked) {
  //       // Uncheck
  //       return locationListCheck.filter(item => item !== locationName);

  //     } else {
  //       return [...prev, locationName];
  //     }
  //   })
  // }
  // console.log('check list location: ', locationListCheck);

  useEffect(() => {
    getDataLocation();
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
            Location
          </Typography>
        </ListItemText>
        {open ?
          <ExpandLess sx={{ width: '20px', height: '20px' }} />
          :
          <ExpandMore sx={{ width: '20px', height: '20px' }} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormGroup>
          {listLocation.map(location => (
            <FormControlLabel
              key={location._id}
              control={<Checkbox sx={{
                "&.Mui-checked": {
                  color: '#4640DE'
                }
              }} />}
              label={location.name}
            // checked={locationListCheck.includes(location.name)}
            // onChange={() => handleCheckLocation(location.name)}
            />
          ))}
        </FormGroup>
      </Collapse>
    </List>
  )
}

export default FilterLocation