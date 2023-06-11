import { createBrowserRouter } from 'react-router-dom'
import { BaseLayout } from './layouts/BaseLayout'
import { MainPage } from '../pages/MainPage'

export const appRouter = createBrowserRouter([
   {
      element: <BaseLayout />,
      errorElement: <div>error</div>,
      children: [
         {
            path: '/',
            element: <MainPage />,
         },
      ],
   },
])
