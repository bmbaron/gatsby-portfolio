import React from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Social from '../components/Social'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
	footer: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
	},
	grid: {
		marginTop: '-1rem',
		marginBottom: '1rem',
	},
}))

const Footer = () => {
	const styles = useStyles()
	return (
		<footer>
			<Paper>
				<Container className={styles.footer} maxWidth='lg'>
					<Grid container>
						<Grid item className={styles.grid} xs={12}>
							<Box>
								<Social setColor="#f50057"/>
							</Box>
						</Grid>
						<Hidden xsDown>
							<Grid item className={styles.grid} xs={12}>
								<Box>
									Ben Baron &copy; {new Date().getFullYear()}
								</Box>
							</Grid>
						</Hidden>
					</Grid>
				</Container>
			</Paper>
		</footer>
	);
};

export default Footer;