import { createBrowserRouter } from 'react-router-dom'
import { BaseLayout } from './layouts/BaseLayout'
import { About, Contacts, MainPage, Product, Store } from '../pages'

export const appRouter = createBrowserRouter([
   {
      element: <BaseLayout />,
      errorElement: <div>error</div>,
      children: [
         {
            path: '/',
            element: <MainPage />,
         },
         {
            path: '/store',
            element: <Store />,
            children: [
               {
                  path: 'product/:id',
                  element: <Product />,
               },
            ],
         },
         {
            path: '/contacts',
            element: <Contacts />,
         },
         {
            path: '/about',
            element: <About />,
         },
      ],
   },
])
