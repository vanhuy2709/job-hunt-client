'use client';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import FilterListIcon from '@mui/icons-material/FilterList';
import Pagination from '@mui/material/Pagination';
import ViewListIcon from '@mui/icons-material/ViewList';
import ToggleButton from '@mui/material/ToggleButton';
import Stack from "@mui/material/Stack";
import FilterWorkType from "../filter/filter.work.type";
import FilterLevel from "../filter/filter.level";
import AppHeadline from "../content/app.headline";
import BoxJob from "../box/box.job";
import { epilogue } from "@/lib/font";
import { sendRequest } from "@/utils/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface IProps {
  listLevel: ILevel[] | undefined;
  listWorkType: IWorkType[] | undefined;
}

const FindJobList = (props: IProps) => {
  const { listLevel, listWorkType } = props;
  const matches = useMediaQuery('(min-width:900px)');
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(true);
  const [listJob, setListJob] = useState<IJob[]>();
  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 8,
    pages: 0,
    total: 0
  })

  // Filter Level
  const [checkedLevel, setCheckedLevel] = useState<Array<string>>([]);
  // Filter Work Type
  const [checkedWorkType, setCheckedWorkType] = useState<Array<string>>([]);
  // Filter Skill
  const skills = searchParams.get('skill');
  // Filter Location
  const location = searchParams.get('location');

  // Get data list job
  const getDataListJob = async () => {
    const res = await sendRequest<IBackendRes<IModelPaginate<IJob>>>({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`,
      queryParams: {
        current: meta.current,
        pageSize: meta.pageSize,
        skills: skills ? JSON.stringify([skills]) : '',
        locations: location ? JSON.stringify([location]) : '',
        workTypes: checkedWorkType.length > 0 ? JSON.stringify(checkedWorkType) : '',
        levels: checkedLevel.length > 0 ? JSON.stringify(checkedLevel) : '',
        sort: selected ? '-updatedAt' : 'updatedAt'
      },
      nextOption: { cache: 'no-store' }
    })

    if (res.data) {
      setListJob(res.data.result);
      setMeta({
        current: res.data.meta.current,
        pageSize: res.data.meta.pageSize,
        pages: res.data.meta.pages,
        total: res.data.meta.total
      })
    }
  }

  // Handle Change Pagination
  const handleChangePagination = async (e: any, value: number) => {
    const res = await sendRequest<IBackendRes<IModelPaginate<IJob>>>({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`,
      queryParams: {
        current: value,
        pageSize: meta.pageSize,
        skills: skills ? JSON.stringify([skills]) : '',
        locations: location ? JSON.stringify([location]) : '',
        workTypes: checkedWorkType.length > 0 ? JSON.stringify(checkedWorkType) : '',
        levels: checkedLevel.length > 0 ? JSON.stringify(checkedLevel) : '',
        sort: selected ? '-updatedAt' : 'updatedAt'
      },
      nextOption: { cache: 'no-store' }
    })

    if (res.data) {
      setListJob(res.data.result);
      setMeta({
        current: res.data.meta.current,
        pageSize: res.data.meta.pageSize,
        pages: res.data.meta.pages,
        total: res.data.meta.total
      })
    }
  }

  useEffect(() => {
    getDataListJob();
  }, [searchParams, selected, checkedLevel, checkedWorkType])

  return (
    <Container maxWidth='xl'>
      <Box py={'72px'}>

        {/* Grid Template */}
        <Grid container spacing={'40px'}>
          {matches ?
            (<Grid item md={2}
              sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
            >
              {/* <FilterLocation /> */}
              <FilterLevel
                listLevel={listLevel}
                checkedLevel={checkedLevel}
                setCheckedLevel={setCheckedLevel}
              />
              <FilterWorkType
                listWorkType={listWorkType}
                checkedWorkType={checkedWorkType}
                setCheckedWorkType={setCheckedWorkType}
              />
              {/* <FilterSalary /> */}
            </Grid>)
            :
            (<Grid item xs={12}>
              <Button
                startIcon={<FilterListIcon />}
                color="inherit"
                variant="outlined"
                sx={{ width: '100%', py: '1rem' }}>
                More Filter
              </Button>
            </Grid>)}

          <Grid item md={10} xs={12}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'32px'}>
              <Box>
                <AppHeadline text="All Jobs" />
                <Typography sx={{
                  fontFamily: epilogue.style,
                  lineHeight: '160%',
                  color: '#7C8493'
                }}>
                  Showing {meta.total} results
                </Typography>
              </Box>

              <Stack direction="row" spacing={2} alignItems="center">
                <Typography>Sort by Latest: </Typography>
                <ToggleButton
                  value="check"
                  selected={selected}
                  onChange={() => setSelected(!selected)}
                >
                  <ViewListIcon />
                </ToggleButton>
              </Stack>
            </Box>

            {/* List Jobs */}
            <Box display={'flex'} gap={'16px'} flexDirection={'column'} mb={2}>
              {listJob && listJob.length > 0 && listJob.map(job => (
                <BoxJob key={job._id} job={job} />
              ))}
            </Box>

            <Pagination
              sx={{ display: 'flex', justifyContent: 'center' }}
              size="large"
              count={meta.pages}
              onChange={handleChangePagination}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default FindJobList