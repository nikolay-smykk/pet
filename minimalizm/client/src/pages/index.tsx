import { Category } from './Category'
import { Home } from './Home'
import { ReviewDetails } from './ReviewDetails'

export const routes = [
  { title: 'category/:categoryId', page: Category },
  { title: '/', page: Home, index: true },
  { title: 'details/:detailsId', page: ReviewDetails },
]
