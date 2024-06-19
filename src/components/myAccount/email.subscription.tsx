'use client';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { epilogue } from "@/lib/font";
import AppHeadline from "../content/app.headline";
import { useState } from "react";
import { ButtonStyle } from "@/styles/ButtonStyle";
import { sendRequest } from "@/utils/api";
import { Session } from "next-auth";
import { Alert, Snackbar } from "@mui/material";

interface IProps {
  listSkill: ISkill[] | undefined;
  session: Session;
}

const EmailSubscription = (props: IProps) => {
  const { listSkill, session } = props;
  const matches = useMediaQuery('(min-width:600px)');
  const [skill, setSkill] = useState<Array<ISkill>>([]);
  const skills = skill.map(item => item._id);

  // Show / Hide Message Register
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')
  const [statusMessage, setStatusMessage] = useState<boolean>(false);

  // Handle Subcribe
  const handleSubcribe = async () => {

    const res = await sendRequest({
      method: 'PATCH',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/subscribers`,
      body: {
        name: session.user.name,
        email: session.user.email,
        skills: skills
      },
      headers: { Authorization: `Bearer ${session.access_token}` }
    })

    // @ts-ignore
    if (res.data) {
      setOpenMessage(true);
      setStatusMessage(true);
      setMessage('Subscribe success');
    } else {
      setOpenMessage(true);
      setStatusMessage(false);

      // @ts-ignore
      setMessage(res.error);
    }
  }

  return (
    <>
      <Stack justifyContent={'center'} alignItems={'center'}>
        <Paper sx={{ bgcolor: 'white', p: 4, width: matches ? '720px' : '320px' }} elevation={8}>
          <Box mb={4}>
            <AppHeadline text="Subscribe to Job Robot for new jobs" />
          </Box>

          <Typography sx={{
            fontFamily: epilogue.style,
            mb: 4
          }}>
            By subscribing, Job Robot will suggest in-demand jobs that match your skill via email or update new reviews and job openings from your favorite company.
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Select Skill */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={matches ? 10 : 2}>
            <Autocomplete
              fullWidth
              multiple
              options={listSkill ? listSkill : []}
              getOptionLabel={(option) => option.name}
              defaultValue={[]}
              filterSelectedOptions
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option.name}>
                    {option.name}
                  </li>
                );
              }}
              renderTags={(tagValue, getTagProps) => {
                return tagValue.map((option, index) => (
                  <Chip {...getTagProps({ index })} key={option.name} label={option.name} />
                ))
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select skill"
                  placeholder="Skill"
                />
              )}
              onChange={(e, value) => setSkill(value)}
            />

            <ButtonStyle onClick={() => handleSubcribe()}>
              Subcribe
            </ButtonStyle>
          </Stack>
        </Paper>
      </Stack>

      {/* Show message */}
      <Snackbar open={openMessage} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity={statusMessage ? "success" : "error"} onClose={() => setOpenMessage(false)}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default EmailSubscription;