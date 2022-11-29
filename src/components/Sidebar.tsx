import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=60" />
      <div className={styles.profile}>
        <strong>Neto Martins</strong>
        <span>Web Developer</span>
      </div>


      <footer>
        <a href='#'>
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  );
}

