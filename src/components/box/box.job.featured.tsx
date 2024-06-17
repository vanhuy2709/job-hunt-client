import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { epilogue } from "@/lib/font";
import Link from "next/link";
import { convertSlugUrl } from "@/utils/api";

const bull = (
  <Box
    component="span"
    sx={{
      display: 'inline-block',
      mx: '8px',
      transform: 'scale(0.8)',
      color: '#CBCED4'
    }}>•</Box>
);

interface IProps {
  item: IJob;
}
const BoxJobFeatured = (props: IProps) => {
  const { item } = props;

  return (
    <Link href={`/find-job/${convertSlugUrl(item.name)}-${item._id}.html`} style={{ textDecoration: 'none', color: 'unset' }}>
      <Box sx={{
        p: '24px',
        border: 1,
        cursor: 'pointer',
        borderColor: '#D6DDEB',
      }}>

        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mb={'1rem'}
        >
          <Avatar src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${item.company.logo}`} alt="logo-company" />
          <Typography sx={{
            fontFamily: epilogue.style,
            lineHeight: '160%',
            color: '#4640DE',
            border: 1,
            px: '12px',
            py: '4px'
          }}>
            Full Time
          </Typography>
        </Box>

        <Box mb={'1rem'}>
          <Typography sx={{
            fontFamily: epilogue.style,
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '160%',
            color: '#25324B'
          }}>
            {item.name}
          </Typography>

          <Typography>{item.company.name}{bull}{item.location}</Typography>
        </Box>

        {/* <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          mb: '1rem',
          color: '#7C8493',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
          overflow: 'hidden'
        }}>
          {item.description}
        </Typography> */}

        <Stack
          direction={'row'}
          spacing={1}
          useFlexGap
          flexWrap={'wrap'}
        >
          {item.skills.map((skill, index) => {
            if (index < 2) {
              return (
                <Chip
                  key={skill} label={skill} sx={{
                    color: '#FFB836',
                    backgroundColor: '#FDF3EB',
                    fontFamily: epilogue.style,
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '160%'
                  }} />
              )
            }
          })}
        </Stack>
      </Box>
    </Link>
  )
}

export default BoxJobFeatured;