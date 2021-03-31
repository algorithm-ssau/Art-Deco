import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PlasterPage} from './pages/PlasterPage'
import {DecorPage} from './pages/DecorPage'
import {PaintPage} from './pages/PaintPage'
import {WallpaperPage} from './pages/WallpaperPage'
import {MainPage} from './pages/MainPage'

export const useRoutes = () => {
	return (
	<Switch>
		<Route path="/" exact>
			<MainPage />
		</Route>
		<Route path="/plaster" exact>
			<PlasterPage />
		</Route>
		<Route path="/decor" exact>
			<DecorPage />
		</Route>
		<Route path="/paint" exact>
			<PaintPage />
		</Route>
		<Route path="/wallpaper" exact>
			<WallpaperPage />
		</Route>
		<Redirect to='/' />
	</Switch>
	)
}