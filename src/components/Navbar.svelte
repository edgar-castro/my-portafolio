<script>
import LangSelector from './LangSelector.svelte';
import ThemeToggle from './ThemeToggle.svelte';

import { lang, t } from '../utils/translations'
    import Icon from './Icon.svelte';

let opened = false;

function handleMenuBtn() {
    opened = !opened;
}

</script>

<nav>
    <div class="nav-btn" class:opened on:click={handleMenuBtn}>
        <span class="line"></span>
        <span class="line"></span>
    </div>
    <div class="nav-content" class:opened>
        <div class="lang">
            <LangSelector />
        </div>
        <ul class="links">
            <li class="active">
                <!-- <Icon type="home" --color="currentColor" --size={opene/> -->
                {$t('navbar.home')}
            </li>
            <li>{$t('navbar.about')}</li>
            <li>{$t('navbar.portfolio')}</li>
            <li>{$t('navbar.contact')}</li>
        </ul>
        <div class="theme-container">
            <ThemeToggle />
        </div>
    </div>
    
</nav>

<style lang="scss">

nav {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 9999;
    width: 100%;
    padding-top: 0.5em 0;

    & .nav-btn {
        display: none;
        position: absolute;
        top: 1em;
        left: 1em;
        width: 24px;
        height: 24px;

        & span.line {
            width: 24px;
            height: 4px;
            position: absolute;
            /* background-color: white; */
            background-color: var(--fg-color);
            transition: all 500ms ease-in-out;
            transform-origin: center center;

            &:nth-child(1) {
                top: 4px;
                transition: all 200ms ease-in-out;
            }

            &:nth-child(2) {
                bottom: 4px;
                transition: all 200ms ease-in-out;
            }
        }

        &.opened span.line {
            &:nth-child(1) {
                transform: translateY(6px) rotate(45deg);
            }
            &:nth-child(2) {
                transform: translateY(-6px) rotate(-45deg);
            }
        }
    }

    & .nav-content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        & .links {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            
            & li {
                display: flex;
                margin: 0 0.25em;
                padding: 0.5em;
                font-family: var(--font-title);
                font-size: 20px;
                transition: all 700ms ease-in-out;
                color: var(--gray);
                font-weight: bold;
            
                &.active {
                    /* color: var(--text-color-title); */
                    color: black;
                    /* border-bottom: 3px solid var(--text-color-title); */
                    border-bottom: 3px solid black;
                }
            }
        }
    }

}

@media screen and (max-width: 768px){
    nav {
        justify-content: start;
        padding-top: 1em;
        /* position: relative; */

        & .nav-btn {
            display: flex;
            margin-left: 1em;
        }

        & .nav-content {
            height: 0;
            padding: 0;
            overflow: hidden;
            position: absolute;
            top: 0; left: 0;
            transform: translate(0, 50px);
            opacity: 0;
            transition: height 300ms ease-in-out, opacity 200ms 100ms ease-in;
            flex-direction: column;
            justify-content: start;
            border: none;
            /* position: relative; */

            &.opened { 
                height: calc(100vh);
                background: rgba(255, 255, 255, 0.2);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                backdrop-filter: blur(2.5px);
                -webkit-backdrop-filter: blur(2.5px);
                // border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.18);
                opacity: 1;
            }


            & .links {
                flex-direction: column;
                justify-content: start;

                & li {
                    font-size: 2.5em;
                    color: var(--fg-color);
                }
            }

            & .lang {
                position: absolute;
                bottom: 5em;
                left: 2em;
            }
            & .theme-container {
                position: absolute;
                bottom: 5em;
                right: 2em;
            }
        }
    }
}
</style>