import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PlasterPage} from './pages/PlasterPage'
import {DecorPage} from './pages/DecorPage'
import {PaintPage} from './pages/PaintPage'
import {WallpaperPage} from './pages/WallpaperPage'
import {MainPage} from './pages/MainPage'
import {ContactPage} from './pages/ContactPage'
import {FrescoPage} from './pages/FrescoPage'
import {ProjectPage} from './pages/ProjectPage'

export const useRoutes = (ex_state) => {
	return (
	<Switch>
		<Route path="/" exact>
			<MainPage />
		</Route>
		<Route path="/plaster" exact>
			<PlasterPage  products = {ex_state.plaster}/>
		</Route>
		<Route path="/decor" exact>
			<DecorPage  products = {ex_state.decor}/>
		</Route>
		<Route path="/paint" exact>
			<PaintPage  products = {ex_state.paint}/>
		</Route>
		<Route path="/wallpaper" exact>
			<WallpaperPage  products = {ex_state.wallpaper}/>
		</Route>
		<Route path="/contact" exact>
			<ContactPage />
		</Route>
		<Route path="/fresco" exact>
			<FrescoPage  products = {ex_state.fresco}/>
		</Route>
		<Route path="/project" exact>
			<ProjectPage />
		</Route>
		<Redirect to='/' />
	</Switch>
	)
}