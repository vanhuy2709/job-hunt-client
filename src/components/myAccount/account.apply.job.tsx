import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BoxApplyJob from "../box/box.apply.job";
import AppHeadline from "../content/app.headline";

interface IProps {
  listCvUser: IResume[] | undefined;
}

const AccountApplyJob = (props: IProps) => {

  const { listCvUser } = props;

  return (
    <>
      <Box mb={4}>
        <AppHeadline text={`Applied Jobs (${listCvUser?.length})`} />
      </Box>

      <Grid container spacing={2}>
        {listCvUser && listCvUser.length > 0 &&
          listCvUser.map(cvUser => (
            <Grid item xs={12} sm={6} md={4} key={cvUser._id}>
              <BoxApplyJob cvUser={cvUser} />
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default AccountApplyJob;