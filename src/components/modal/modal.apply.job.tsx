import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import { clashDisplay, epilogue } from '@/lib/font';
import { ButtonStyle } from '@/styles/ButtonStyle';
import { IUserAuth } from '@/types/next-auth';
import { useState } from 'react';
import { sendRequest } from '@/utils/api';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 644,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface IProps {
  openModalApply: boolean;
  setOpenModalApply: (v: boolean) => void;
  job: IJob | undefined;
  user: IUserAuth | undefined;
}

const ModalApplyJob = (props: IProps) => {
  const { openModalApply, setOpenModalApply, job, user } = props;
  const [file, setFile] = useState<File>();
  const [note, setNote] = useState<string>('');

  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<boolean>(false);

  // Create Resume
  const handleSubmitResume = async () => {

    const newResume = {
      userId: user?._id,
      url: file,
      companyId: job?.company._id,
      jobId: job?._id,
      note
    }

    // Call API
    const res = await sendRequest<IBackendRes<IResume>>({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/resumes`,
      body: newResume
    })

    if (res.data) {
      setOpenMessage(true);
      setMessage(`Apply to ${job?.name} success`);
      setOpenModalApply(false);
      setStatusMessage(true);
    }
    else {
      setOpenMessage(true);
      setMessage(`Apply to ${job?.name} failed`);
      setStatusMessage(false);
    }
  }

  // Handle upload file
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  console.log('check file: ', file);

  return (
    <>
      <Modal
        open={openModalApply}
        onClose={() => setOpenModalApply(false)}
      >
        <Stack sx={style} direction={'column'} gap={'32px'}>
          {/* Header */}
          <Stack direction={'row'} gap={'24px'} alignItems={'center'}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${job?.company.logo}`}
              alt='logo-company'
              width={80}
              height={80}
            />
            <Box>
              <Typography sx={{
                fontFamily: clashDisplay.style,
                fontSize: '24px',
                color: '#25324B',
                fontWeight: 600,
                lineHeight: '120%',
                mb: 1
              }}>{job?.name}</Typography>
              <Typography sx={{
                color: '#515B6F',
                fontFamily: epilogue.style,
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '160%',
              }}>{job?.location}</Typography>
            </Box>
          </Stack>

          <Divider />

          <Box>
            <Typography sx={{
              fontFamily: clashDisplay.style,
              fontSize: '24px',
              color: '#25324B',
              fontWeight: 600,
              lineHeight: '120%',
              mb: 1
            }}>Submit your application</Typography>
            <Typography sx={{
              color: '#515B6F',
              fontFamily: epilogue.style,
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '160%',
            }}>The following is required and will only be shared with {job?.company.name}</Typography>
          </Box>

          <TextField fullWidth multiline rows={4}
            placeholder='What skills, work projects or achievements make you a strong candidate?'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <Divider />

          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography sx={{
              color: '#202430',
              fontFamily: epilogue.style,
              fontWeight: 600,
              lineHeight: '160%'
            }}>Attach your resume</Typography>

            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              sx={{
                backgroundColor: '#4640DE',
                '&:hover': {
                  backgroundColor: '#6e6ae2'
                }
              }}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => handleUploadFile(e)}
              />
            </Button>
          </Stack>

          <Typography sx={{
            textAlign: 'right',
            fontFamily: epilogue.style,
            lineHeight: '160%'
          }}
          >
            {file ? file.name : ''}
          </Typography>

          <Divider />

          <ButtonStyle
            onClick={() => handleSubmitResume()}
          >
            Submit Application
          </ButtonStyle>
        </Stack>
      </Modal>

      {/* Show message */}
      <Snackbar open={openMessage} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity={statusMessage ? 'success' : 'error'} onClose={() => setOpenMessage(false)}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ModalApplyJob