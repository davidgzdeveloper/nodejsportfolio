import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Portfolio'}))
router.get('/about', (req, res) => res.render('about', {title: 'About Me'}))
router.get('/contact', (req, res) => res.render('contact', {title: 'Contact page'}))
router.get('/projects', (req, res)=> res.render('projects', {title: 'Projects'}))

export default router