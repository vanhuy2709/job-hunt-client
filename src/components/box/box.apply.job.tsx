import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Image from "next/image";
import Link from "next/link";
import { epilogue, clashDisplay } from "@/lib/font";
import { convertSlugUrl } from "@/utils/api";
import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas";

interface IProps {
  cvUser: IResume;
}

const BoxApplyJob = (props: IProps) => {
  const { cvUser } = props;

  return (
    <Stack
      direction={'column'}
      bgcolor={'white'}
      borderRadius={'10px'}
      p={2}
      spacing={3}
    >
      <Typography sx={{
        fontFamily: epilogue.style,
        fontSize: '16px',
        color: '#a6a6a6'
      }}>Applied Date: {cvUser.createdAt.slice(0, 10)}</Typography>

      <Link
        href={`/find-job/${convertSlugUrl(cvUser.jobId.name)}-${cvUser.jobId._id}.html`}
        style={{ textDecoration: 'unset', color: 'unset' }}>

        <Typography sx={{
          fontFamily: clashDisplay.style,
          fontSize: '24px',
        }}>
          {cvUser.jobId.name}
        </Typography>
      </Link>

      <Stack direction={'row'} spacing={2} alignItems={'center'}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${cvUser.companyId.logo}`}
          alt="logo-company"
          width={48}
          height={48} />
        <Typography sx={{
          fontFamily: epilogue.style,
          fontSize: '16px',
          fontWeight: 600
        }}>{cvUser.companyId.name}</Typography>
      </Stack>

      <Stack direction={'row'} spacing={2} alignItems={'center'}>
        <AccessTimeIcon />
        <Typography>{cvUser.status}</Typography>
      </Stack>

      <Stack direction={'row'} useFlexGap gap={0.5}>
        <AttachMoneyIcon sx={{ color: '#0AB305' }} />
        <Typography sx={{
          fontFamily: epilogue.style,
          fontWeight: 600,
          color: '#0AB305',
          pt: '2px'
        }}>
          {formatNumberWithCommas(cvUser.jobId.salary)} VND
        </Typography>
      </Stack>

      <Divider />

      <Link
        href={cvUser.url}
        target="_blank"
        style={{ color: '#a6a6a6', textDecoration: 'unset', fontStyle: 'italic' }}
      >
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Typography>Link CV applied</Typography>
          <ArrowRightAltIcon sx={{ color: '#a6a6a6' }} />
        </Stack>
      </Link>

    </Stack>
  )
}

export default BoxApplyJob