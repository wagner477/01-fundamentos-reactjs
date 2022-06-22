import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/wagner477.png"
          />
          <div className={styles.authorInfo}>
            <strong>Wagner Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>

        <p>Acabei de subir mais um projeto no meu portfolio</p>

        <p>
          <a href=""> jane.design/doctorcare </a>
        </p>

        <p>
          <a href="">#novoprojeto </a> <a href="">#nlw </a>{" "}
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
