
import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <div>

      <Header />
      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            autor="Neto Martins"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam dolor excepturi ut amet natus incidunt rerum at, id hic, qui quae ad eaque consequatur maiores deserunt, quasi itaque delectus!"
          />

          <Post
            autor="Ivy Maria"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam dolor excepturi ut amet natus incidunt rerum at, id hic, qui quae ad eaque consequatur maiores deserunt, quasi itaque delectus!"
          />

        </main>
      </div>
    </div>
  )
}

export default App
