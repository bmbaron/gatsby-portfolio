import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const socialIcons = [
	{icon: GithubIcon, url: 'https://github.com/bmbaron'},
	{icon: LinkedInIcon, url: 'https://www.linkedin.com/in/benjamin-baron-850b264a/'},
]

const useStyles = makeStyles((theme) => ({
	grid: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '1rem',
	},
}))

const Social = (props) => {
	const styles = useStyles()
	return (
		<Grid container className={styles.grid} >
				{socialIcons.map((item) => 
					<Grid item className={styles.icon} key={Math.random()}>
						<Link className={styles.icon} href={item.url} target="_blank">
							<IconButton>
								<item.icon fontSize='large' style={{color: props.setColor}} />
							</IconButton>
						</Link>
					</Grid>
				)}
		</Grid>
	);
};

export default Social;