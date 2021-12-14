import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { useRouter } from 'next/dist/client/router';
import { ActiveLink } from '../ActiveLink';

export function Header() {
    const {  } = useRouter()

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <ActiveLink activeClassName={styles.active} href="/">
                <a>
                <img src="/images/logo.svg" alt="ig.news"/>
                </a>
                </ActiveLink>
                <nav>
                <ActiveLink activeClassName={styles.active} href="/">
                    <a>Home</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/posts">
                    <a>Posts</a>
                </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}
