import styles from "./Post.module.css";

export function Post() {
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/wagner477.png" />
        <div className={styles.authorInfo}>
          <strong>Wagner Oliveira</strong>
          <span>Web Developer</span>
        </div>
      </div>

      <time dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
    </header>
  </article>;
}
