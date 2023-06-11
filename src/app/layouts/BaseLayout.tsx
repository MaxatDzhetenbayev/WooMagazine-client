import { Layout } from '../../shared/UI/layout/Layout'

export const BaseLayout = () => {
   return <Layout headerSlot={<div>Header</div>} bottomSlot={<div>Footer</div>} />
}
