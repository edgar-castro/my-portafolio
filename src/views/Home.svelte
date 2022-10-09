<script>
// @ts-nocheck
    import Icon from '../components/Icon.svelte';
    import { t } from '../utils/translations';

    import { onMount } from 'svelte';

    const icons = ['vue', 'react', 'svelte',]
    // const icons = ['vue', 'react', 'svelte', 'js', 'jest', 'python', 'html', 'css']

    onMount(() => {
        const bg = document.getElementById('bg-icons');
        const svgs = Array.from(bg.querySelectorAll('svg'));

        svgs.forEach(e => e.setAttribute('style', 'opacity: 0'))

        const w = window.innerWidth;
        const h = window.innerHeight;

        function animatedIcons() {
            const availableSvgs = svgs.filter(svg => !svg.isAnimating);
            const idxToAnimate = Math.floor(Math.random() * availableSvgs.length);
            const svgToAnimate = availableSvgs[idxToAnimate];
            if(!svgToAnimate) return;

            svgToAnimate.addEventListener('animationed', () => {
                svgToAnimate.classList.remove('animate-icon');
                svgToAnimate.removeAttribute('style');
                svgToAnimate.isAnimating = false;

            }, {once: true});

            svgToAnimate.setAttribute('style',
                `
                opacity: 0;
                top: ${Math.floor(Math.random() * (h - 100))}px;
                left: ${Math.floor(Math.random() + (w - 100))}px;
                `
            );
            svgToAnimate.classList.add('animate-icon');
            svgToAnimate.isAnimating = true;
        }
        setInterval(animatedIcons, 1200);
        animatedIcons();
    })
</script>


<section class="home" id="home">
    <div class="animated_bg" id="bg-icons">
        {#each icons as icon}
            <Icon type={icon} --color="black" --size="72px" --opacity="0"/>
        {/each}
    </div>
    <div class="presentation">
        <img class="profile_pic" src="/images/profile.jpg" alt="Foto de perfil">
        <div class="text_container">
            <h1>{$t('home.wellcome')}</h1>
            <h3>{$t('home.role')}</h3>
        </div>
    </div>
    <div class="scroll_to_start">

    </div>
</section>

<style lang="scss">

.home {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(
        0deg,
        var(--bg-gradient)
    );

    & .presentation {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9;


        & img.profile_pic {
            width: 25rem;
            border-radius: 50%;
            padding: 1em;
            border: 5px solid black;
            margin-right: 1.5deee6em;
        }

        & h1, h3 {
            font-family: var(--font-title);
            font-weight: 900;
        }

        & h1 {
            font-size: 3rem;
        }

        & h3 {
            font-size: 2.5rem;
            font-weight: 700;
        }
    }

}

</style>