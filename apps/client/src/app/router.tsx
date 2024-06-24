import { createBrowserRouter } from "react-router-dom";
import { MainPage, mainPageLoader } from "pages/MainPage";
import { AuthPage } from "pages/AuthPage";
import { ErrorBoundary } from "pages/ErrorBoundary"; 
import { PageLayout } from "app/PageLayout";
import { TasklistPage } from "pages/TasklistPage";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <PageLayout />,
		children:[
			{
				path: "/",
				element: <MainPage />,
				loader: mainPageLoader,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "/tasklist",
				element: <TasklistPage />,
				errorElement: <ErrorBoundary />,
			},
			{
				path: "/auth",
				element: <AuthPage />,
				errorElement: <ErrorBoundary />,
			},
		]
	}
])
