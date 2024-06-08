import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { clashDisplay, epilogue } from '@/lib/font';

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

interface IProps {
  openModalApply: boolean;
  setOpenModalApply: (v: boolean) => void;
}

const ModalApplyJob = (props: IProps) => {
  const { openModalApply, setOpenModalApply } = props

  return (
    <Modal
      open={openModalApply}
      onClose={() => setOpenModalApply(false)}
    >
      <Stack sx={style} direction={'column'} gap={'32px'}>
        {/* Header */}
        <Stack direction={'row'} gap={'24px'} alignItems={'center'}>
          <Image
            src={`/logo/logo-website.svg`}
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
            }}>Social Media Assistant</Typography>
            <Typography sx={{
              color: '#515B6F',
              fontFamily: epilogue.style,
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '160%',
            }}>Paris, France</Typography>
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
          }}>The following is required and will only be shared with Nomad</Typography>
        </Box>

        <Box>
          <TextField label="Enter your fullname" variant="outlined" fullWidth />
        </Box>
        <Box>
          <TextField label="Enter your email address" variant="outlined" fullWidth />
        </Box>
        <Box>
          <TextField label="Enter your phone number" variant="outlined" fullWidth />
        </Box>
        <Box>
          <TextField label="What's your current or previous job title?" variant="outlined" fullWidth />
        </Box>

        <Divider />

        <Typography sx={{
          color: '#25324B',
          fontFamily: epilogue.style,
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '160%',
        }}>LINKS</Typography>

        <Box>
          <TextField label="Link to your LinkedIn URL" variant="outlined" fullWidth />
        </Box>
        <Box>
          <TextField label="Link to your portfolio URL" variant="outlined" fullWidth />
        </Box>

        <Divider />

        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{
            color: '#202430',
            fontFamily: epilogue.style,
            fontWeight: 600,
            lineHeight: '160%'
          }}>Attach your resume</Typography>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default ModalApplyJob