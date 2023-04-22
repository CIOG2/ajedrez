import type { NextPage } from 'next'
import SelectGame from '@components/SelectGame'

const Home: NextPage = () => {
  return (
    <div id = 'APP'>
      <SelectGame/>
    </div>
  )
}

export default Home