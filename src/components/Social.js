import React from 'react';
import GithubIcon from '@material-ui/icons/Github'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'

const socialIcons = [
	{icon: GithubIcon, url: ''},
	{icon: LinkedInIcon, url: ''},
]

const Social = (props) => {
	return (
		<Grid container direction={props.direction || 'row'} spacing={1}>
				{socialIcons.map((item) => 
				<Link>
					<IconButton>
						<item.icon fontSize='large' />
					</IconButton>
				</Link>
				)}
		</Grid>
	);
};

export default Social;