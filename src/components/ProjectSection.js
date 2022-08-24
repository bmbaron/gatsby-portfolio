import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Hidden from '@material-ui/core/Hidden'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import IconButton from '@material-ui/core/IconButton'

import homestayImage from '../images/thohomestay.png'
import todoImage from '../images/todolist.png'
import airqualityImage from '../images/airquality.png'
import shoppingcartImage from '../images/shoppingcart.png'

const projects = [
	{	
		name: 'Business Landing Page',
		description: 'Created with vanilla JS, CSS and HTML for an actual homestay business located in northern Vietnam',
		url: 'https://bmbaron.github.io/thohomestay',
		tags: ['JavaScript', 'HTML', 'CSS'],
		image: homestayImage,
	},
	{
		name: 'Shopping Page with Cart',
		description: 'Created with React and Material UI, and hosted on Netlify. The cart updates when items are added or quantities are changed',
		url: 'https://react-practice-shopping-cart.netlify.app/',
		tags: ['React', 'Material UI', 'Netlify'],
		image: shoppingcartImage,
	},
	{
		name: 'CRUD App (front-end only)',
		description: 'The to-do list app allows users to create and manage projects and to add fully-editable tasks to them',
		url: 'https://bmbaron.github.io/todo-list',
		tags: ['Webpack', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
		image: todoImage,
	},
	{
		name: 'App that consumes APIs',
		description: 'Uses weather and pollution data to provide users with their local information or other searchable places',
		url: 'https://bmbaron.github.io/air-quality-app',
		tags: ['API', 'Webpack', 'JavaScript', 'HTML', 'CSS'],
		image: airqualityImage,
	},
]

const useStyles = makeStyles((theme) => ({
	section: {
		height: '90vh',
		position: 'relative'
	},
	container: {
		height: '100%',
		alignItems: 'center',
		textAlign: 'center',
		marginBottom: '5rem'
	},
	content: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	project: {
		alignItems: 'center',
	},
	cardBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	chip: {
		margin: '5px',
	},
	card: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	cardImage: {
		marginLeft: 'auto',
		width: '35%',
		height: 'auto',
	},
	projectLink: {
		marginRight: 'auto',
	}
}))
const ProjectSection = (props) => {
	const styles = useStyles()
	return (
			<Container className={styles.container} maxWidth='md' id='projects'>
				<Box pt={9} mb={4}>
					<Typography variant='h3'>Sample Projects</Typography>
				</Box>
				<Grid container className={styles.content} direction='column' spacing={4}>
					{projects.map((project) => (
						<Grid item sm={12} key={project.url}>
							<Card className={styles.card}>
								<CardContent className={styles.cardChild1}> 
										<Box className={styles.project}>
												<Typography variant='h5' paragraph>{project.name}</Typography>
												<Typography variant='subtitle1' paragraph>{project.description}</Typography>

												<Container className={styles.cardBottom}>
													<Container className={styles.tags}>
														{project.tags.map((tag) => (
															<Chip className={styles.chip} label={tag} key={Math.random()} />
														))}
													</Container>
													<Link href={project.url}>
														<IconButton>
															<OpenInNewIcon fontSize='large'/>
														</IconButton>
													</Link>
											</Container>
										</Box>
								</CardContent>
								<Hidden xsDown>
									<CardMedia
										className={styles.cardImage}
										component="img"
										image={project.image}
										alt="green iguana"
										height="150"
									/>	
								</Hidden>
							</Card>
						</Grid>
					))}

				</Grid>
			</Container>
	);
};

export default ProjectSection;