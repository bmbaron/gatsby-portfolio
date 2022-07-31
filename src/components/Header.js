import React, { useState } from 'react'
import Social from './Social'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const navigationLinks = [
	{name: 'About', href: ''},
	{name: 'Projects', href: ''},
	{name: 'Resume', href: ''},
]

const useStyles = makeStyles((theme) => ({
	link: {
		marginRight: 20,
		'&:hover': {
			transform: 'scale(1.1)',
		}
	},
	avatar: {
		marginRight: 'auto',
		color: 'black',
		backgroundColor: 'white',
	},
}))


const Header = () => {
	const styles = useStyles()
	const [open, setOpen] = useState(false)
	return (
		<AppBar position='sticky' color='default'>
		<Container maxWidth='md'>
			<ToolBar disableGutters>
				<Avatar className={styles.avatar}>B</Avatar>
				<Hidden xsDown>
					{navigationLinks.map((item) => (
						<Link 
							className={styles.link}
							color='textPrimary'
							variant='button'
							underline='none'
							href={item.href}
						>
								{item.name}
						</Link>
					))}
				</Hidden>
				<Hidden smUp>
					<IconButton>
						<MenuIcon onClick={() => setOpen(true)} />
					</IconButton>
				</Hidden>
			</ToolBar>
		</Container>
		<SwipeableDrawer 
			anchor='right'
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
		>
			<div>
				<IconButton>
					<ChevronRightIcon onClick={() => setOpen(false)}/>
				</IconButton>
			</div>
			<Divider />
			<List>
				{navigationLinks.map((item) => (
					<ListItem>
						<Link 
							className={styles.link}
							color='textPrimary'
							variant='button'
							underline='none'
							href={item.href}
						>
								{item.name}
						</Link>
					</ListItem>
				))}
				<ListItem>
					<Social direction='column'/>
				</ListItem>
			</List>
		</SwipeableDrawer>
		</AppBar>
	);
};

export default Header;