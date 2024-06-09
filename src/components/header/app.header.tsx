'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { redHatDisplay, epilogue } from '@/lib/font';
import ButtonStyle from '../button/button.style';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react";

// Import MUI Lib
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

const pages = [
  { id: 1, name: 'Find Jobs', path: '/find-job' },
  { id: 2, name: 'Browse Companies', path: '/browse-companies' }
];

const AppHeader = () => {

  const { data: session } = useSession()

  console.log('>>> check session: ', session);

  const router = useRouter();
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElUser);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} onClick={() => router.push('/')}>
            <Image
              src={'/logo/logo-website.svg'}
              alt='logo-website'
              width={32}
              height={32}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: redHatDisplay.style,
              fontSize: '24px',
              lineHeight: '36px',
              fontWeight: 700,
              color: '#25324B',
              textDecoration: 'none',
              letterSpacing: '-0.24px',
              cursor: 'pointer'
            }}
            onClick={() => router.push('/')}
          >
            JobHuntly
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link href={page.path} style={{ textDecoration: 'none', width: '100%' }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: epilogue.style,
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '160%',
                        color: pathname === page.path ? '#4640DE' : '#515B6F',
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <ButtonStyle outlined>Login</ButtonStyle>
                <ButtonStyle>Sign up</ButtonStyle>
              </Box>
            </Menu>
          </Box>

          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Image
              src={'/logo/logo-website.svg'}
              alt='logo-website'
              width={32}
              height={32}
            />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: redHatDisplay.style,
              fontSize: '24px',
              lineHeight: '36px',
              fontWeight: 700,
              color: '#25324B',
              textDecoration: 'none',
              letterSpacing: '-0.24px',
              cursor: 'pointer'
            }}
            onClick={() => router.push('/')}
          >
            JobHuntly
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={page.id}
                href={page.path}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: pathname === page.path ? '#4640DE' : '#515B6F',
                    display: 'block',
                    fontFamily: epilogue.style,
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '160%',
                    textTransform: 'capitalize',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {
              session ?
                // <Avatar>H</Avatar>
                <>
                  <Button onClick={handleOpenUserMenu}>
                    {/* @ts-ignore */}
                    <Avatar src={session?.user?.image} alt="Remy Sharp" />
                  </Button>
                  <Menu
                    anchorEl={anchorElUser}
                    open={open}
                    onClose={handleCloseUserMenu}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {/* <MenuItem onClick={() => callCreateSpace()}>Profile</MenuItem> */}
                    <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
                    <MenuItem onClick={() => {
                      handleCloseUserMenu();
                      signOut();
                    }}>Logout</MenuItem>
                  </Menu>
                </>
                :
                <>
                  <Link href={'#'} style={{ textDecoration: 'unset', color: '#4640DE' }} onClick={() => signIn()}>
                    <ButtonStyle outlined>
                      Login
                    </ButtonStyle>
                  </Link>
                  <Divider
                    orientation='vertical'
                    variant="middle"
                    flexItem
                    sx={{ mx: '1rem' }}
                  />
                  <ButtonStyle>Sign up</ButtonStyle>
                </>
            }
            {/* <ButtonStyle outlined>Login</ButtonStyle>
            <Divider
              orientation='vertical'
              variant="middle"
              flexItem
              sx={{ mx: '1rem' }}
            />
            <ButtonStyle>Sign up</ButtonStyle> */}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader