import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Grow from '@material-ui/core/Grow'

const useStyles = makeStyles((theme) => ({
	section: {
		height: '100vh',
	},
	container: {
		height: '100%',
		alignItems: 'center',
		textAlign: 'center'
	},
	content: {
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}))
const ProjectSection = () => {
	const styles = useStyles()
	const [show, setShow] = useState(false)
	useEffect(() => setShow(true), [])
	return (
		<Paper className={styles.section}>
			<Container className={styles.container} maxWidth='md'>
				<Grid className={styles.content} container>
					<Grow in={show}>
						<Grid item sm={8}>
							<Typography component='h1' variant='h3'>
								Hi, my name is Ben. I'm a web developer based in Vietnam.
							</Typography>
							<Typography variant='h5'>
								I build responsive websites.
							</Typography>
						</Grid>
					</Grow>
					<Hidden xsDown>
						<Grid item>
						</Grid>
					</Hidden>
				</Grid>
			</Container>
		</Paper>
	);
};

export default ProjectSection;