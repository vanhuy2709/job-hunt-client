'use client'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import AppHeadline from "../content/app.headline"
import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"
import { epilogue } from "@/lib/font"
import BoxCompany from "../box/box.company";
import { sendRequest } from "@/utils/api"
import { useEffect, useState } from "react";


const BrowseRecommend = () => {
  const [listCompany, setListCompany] = useState<ICompany[]>();
  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 4,
    pages: 0,
    total: 0
  })

  const getDataCompany = async () => {
    const res = await sendRequest<IBackendRes<IModelPaginate<ICompany>>>({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies`,
      queryParams: {
        current: meta.current,
        pageSize: meta.pageSize,
      }
    })

    if (res.data) {
      setListCompany(res.data.result);
      setMeta({
        current: res.data.meta.current,
        pageSize: res.data.meta.pageSize,
        pages: res.data.meta.pages,
        total: res.data.meta.total
      })
    }
  }

  // Handle Change Pagination
  const handleChange = async (e: any, value: number) => {
    const res = await sendRequest<IBackendRes<IModelPaginate<ICompany>>>({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies`,
      queryParams: {
        current: value,
        pageSize: meta.pageSize,
      }
    })

    if (res.data) {
      setListCompany(res.data.result);
      setMeta({
        current: res.data.meta.current,
        pageSize: res.data.meta.pageSize,
        pages: res.data.meta.pages,
        total: res.data.meta.total
      })
    }
  };

  useEffect(() => {
    getDataCompany();
  }, [])

  return (
    <Box py={'72px'}>
      <Container maxWidth='xl'>
        <AppHeadline text="Recommended Companies" />
        <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          color: '#7C8493',
          mb: '32px'
        }}>
          Based on your profile, company preferences, and recent activity
        </Typography>

        {/* List Companies */}
        <Grid container spacing={'32px'}>
          {listCompany && listCompany.length > 0 && listCompany.map(company => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={company._id}>
              <BoxCompany data={company} />
            </Grid>

          ))}
        </Grid>

        <Box display={'flex'} justifyContent={'center'} mt={4}>
          <Pagination
            size="large"
            count={meta.pages}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default BrowseRecommend;