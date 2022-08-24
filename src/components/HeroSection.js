import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Social from './Social'
import Hidden from '@material-ui/core/Hidden'
import Zoom from '@material-ui/core/Zoom'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({
	section: {
		height: '90vh',
		position: 'relative'
	},
	container: {
		height: '100%',
		alignItems: 'center',
	},
	content: {
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: 3,
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,0.45)',
		height: '100%',
		width: '100%',
		zIndex: 2,
	},
	heroImage: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		zIndex: 1,
	},
	button: {
		backgroundColor: "#00e64d",
		color: 'black',
	},
	alwaysWhite: {
		color: 'white'
	}
}))
const HeroSection = () => {
	const styles = useStyles()
	const [show, setShow] = useState(false)
	useEffect(() => setShow(true), [])
	return (
		<Paper className={styles.section} id='about'>
			<StaticImage className={styles.heroImage} src='https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt='Vietnam beach and landscape'/>
			<div className={styles.overlay}></div>
			<Container className={styles.container} maxWidth='md'>
				<Grid container className={styles.content}>
					<Zoom in={show}>
						<Grid item sm={8}>
							<Typography className={styles.alwaysWhite} component='h1' variant='h3' gutterBottom>
								Hi, my name is Ben.
							</Typography>
							<Typography className={styles.alwaysWhite} component='h1' variant='h4' gutterBottom>
								I'm a web developer based in Vietnam.
							</Typography>
							<Typography className={styles.alwaysWhite} variant='h6'>
								I build responsive websites.
							</Typography>
							<Box my={2}>
								<Button href='mailto:benjamin.m.baron@gmail.com?subject=Hey Ben!' className={styles.button} variant='contained' >
									Get in touch
								</Button>
							</Box>
						</Grid>
					</Zoom>
					<Hidden xsDown>
						<Grid item>
							<Social setColor="white" />
						</Grid>
					</Hidden>
				</Grid>
			</Container>
		</Paper>
	);
};

export default HeroSection;