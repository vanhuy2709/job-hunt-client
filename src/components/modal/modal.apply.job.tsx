'use client';
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
import { useSession } from 'next-auth/react';
import { clashDisplay, epilogue } from '@/lib/font';
import { ButtonStyle } from '@/styles/ButtonStyle';
import { IUserAuth } from '@/types/next-auth';
import { useState } from 'react';
import { sendRequest } from '@/utils/api';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 330, sm: 644 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: { xs: 2, sm: 4 },
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
  const { data: session } = useSession();
  const { openModalApply, setOpenModalApply, job, user } = props;
  const [file, setFile] = useState<File>();
  const [note, setNote] = useState<string>('');

  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<boolean>(false);

  // Create Resume
  const handleSubmitResume = async () => {

    // Upload CV
    const formData = new FormData();
    // @ts-ignore
    formData.append('fileUpload', file);

    try {
      const res = await axios.post
        (
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/files/upload`, formData, {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
            'folder_type': 'ImgCV',
          },
        })

      if (res.data) {

        // Create resumse
        const newResume = {
          url: res.data.data,
          note,
          companyId: job?.company._id,
          jobId: job?._id,
        }

        const response = await sendRequest<IBackendRes<IResume>>({
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/resumes`,
          body: newResume,
          headers: { Authorization: `Bearer ${session?.access_token}`, }
        })

        if (response.data) {
          setOpenMessage(true);
          setMessage(`Apply to ${job?.name} success`);
          setStatusMessage(true);
          setOpenModalApply(false);
        }
      }

    } catch (error) {
      // @ts-ignore
      alert(error?.response?.data?.message);
    }

  }


  // Handle upload file
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <>
      <Modal
        open={openModalApply}
        onClose={() => setOpenModalApply(false)}
      >
        <Stack sx={style} direction={'column'} gap={'32px'} >
          {/* Header */}
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={'24px'} alignItems={'center'}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${job?.company.logo}`}
              alt='logo-company'
              width={80}
              height={80}
            />
            <Box textAlign={{ xs: 'center', sm: 'unset' }}>
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
              fontSize: { xs: '16px', sm: '18px' },
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