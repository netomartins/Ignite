
import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css'

function App() {

  return (
    <div>

      <Header />
      <Post
        autor="Neto Martins"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam dolor excepturi ut amet natus incidunt rerum at, id hic, qui quae ad eaque consequatur maiores deserunt, quasi itaque delectus!"
      />

      <Post
        autor="Ivy Maria"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam dolor excepturi ut amet natus incidunt rerum at, id hic, qui quae ad eaque consequatur maiores deserunt, quasi itaque delectus!"
      />


      <Post
        autor="Vania"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam dolor excepturi ut amet natus incidunt rerum at, id hic, qui quae ad eaque consequatur maiores deserunt, quasi itaque delectus!"
      />


    </div>
  )
}

export default App
