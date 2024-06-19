'use client';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import AccountApplyJob from "./account.apply.job";
import EmailSubscription from "./email.subscription";
import { Session } from "next-auth";
import ManageInterview from "./manage.interview";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ backgroundColor: '#f7f7f7' }}
    >
      {value === index && <Box sx={{ p: 3 }}>
        <Container maxWidth='xl'>
          {children}
        </Container>
      </Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface IProps {
  session: Session
  listCvUser: IResume[] | undefined;
  listSkill: ISkill[] | undefined;
  listManage: IManage[] | undefined;
}

const AccountWrapper = (props: IProps) => {
  const { listCvUser, listSkill, session, listManage } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth='xl'>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Applied Jobs" {...a11yProps(0)} />
            <Tab label="Email Subscriptions" {...a11yProps(1)} />
            <Tab label="Manage Interview" {...a11yProps(2)} />
          </Tabs>
        </Container>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <AccountApplyJob listCvUser={listCvUser} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EmailSubscription
          session={session}
          listSkill={listSkill}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ManageInterview listManage={listManage} />
      </CustomTabPanel>
    </Box>
  )
}

export default AccountWrapper