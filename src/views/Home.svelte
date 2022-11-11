<script>
// @ts-nocheck
    import Icon from '../components/Icon.svelte';
    import { t } from '../utils/translations';

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import ScrollTrigger from 'gsap/ScrollTrigger'

    const icons = ['vue', 'react', 'svelte', 'js', 'ts', 'python', 'html', 'css']
    // const icons = ['vue', 'react', 'svelte', 'js', 'jest', 'python', 'html', 'css']
    function initIconsAnimation(){
        const bg = document.getElementById('bg-icons');
        // const bg = document.getElementById('home');
        const svgs = Array.from(bg.querySelectorAll('svg'));

        // svgs.forEach(e => e.setAttribute('style', 'opacity: 0; position: absolute;'))
        svgs.forEach(e => e.classList.add('icon-to-animate'));

        const w = window.innerWidth;
        const h = window.innerHeight;

        function animatedIcons() {
            const availableSvgs = svgs.filter(svg => !svg.isAnimating);
            const idxToAnimate = Math.floor(Math.random() * availableSvgs.length);
            const svgToAnimate = availableSvgs[idxToAnimate];
            if(!svgToAnimate) return;

            svgToAnimate.addEventListener('animationend', () => {
                svgToAnimate.classList.remove('animate-icon');
                svgToAnimate.removeAttribute('style');
                svgToAnimate.isAnimating = false;

            }, {once: true});

            svgToAnimate.setAttribute('style',
                `
                top: ${Math.floor(Math.random() * (h - 100))}px;
                left: ${Math.floor(Math.random() * (w - 100))}px;
                `
            );
            svgToAnimate.classList.add('animate-icon');
            svgToAnimate.isAnimating = true;
        }
        setInterval(animatedIcons, 1500);
        animatedIcons();
    }

    onMount(() => {
        initIconsAnimation()

        gsap.registerPlugin(ScrollTrigger);
        //gsap animation
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#home',
                start: "top top",
                end: 'bottom +=300',
                scrub: true,
                pin: ".presentation",
                // pin: true,
                // markers: true
            }
        });

        t1
        .to('.presentation, .scroll_to_start', {
            duration: 2,
            scale: 0,
            opacity: 0,
            // zIndex: -9
        })

        let start_animation = gsap.timeline();
        // start_animation.from9
        
    })
</script>


<section class="home" id="home">
    <div class="animated_bg" id="bg-icons">
        {#each icons as icon}
            <Icon type={icon} --color="black"/>
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
    /* background-image: linear-gradient(
        0deg,
        var(--bg-gradient)
    ); */

    & .animated_bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(
            0deg,
            var(--bg-gradient)
        );
    }

    & .presentation {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;


        & img.profile_pic {
            width: 20rem;
            border-radius: 50%;
            padding: 1em;
            border: 5px solid black;
            margin-right: 2em;
        }

        & h1, h3 {
            font-family: var(--font-title);
            font-weight: 900;
        }

        & h1 {
            font-size: 3.5rem;
        }

        & h3 {
            font-size: 3rem;
            font-weight: 700;
        }
    }

    & .scroll_to_start {
        width: 40px;
        height: 75px;
        border: 1px solid var(--fg-color);
        border-radius: 20px 20px 14px 14px;
        position: absolute;
        bottom: 5rem;

        &::before {
            content: '';
            width: 6px;
            height: 15px;
            border-radius: 4px;
            background-color: var(--fg-color);
            position: absolute;
            top: 20%;
            left: calc(50% - 3px);
            animation: scroll 2s ease infinite;
        }

    }

}

@media screen and (max-width: 768px){

    .home { 

        & .presentation {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            & img.profile_pic {
                width: 15rem;
                border-radius: 50%;
                padding: 1em;
                border: 5px solid black;
                margin-right: 1em;
                
            }

            & .text_container h1, h3 {
                font-family: var(--font-title);
                font-weight: 900;
            }
            & .text_container h1 {
                font-size: 30px;
            }

            & .text_container h3 {
                font-size: 24px;
            }
        }

        & .scroll_to_start {
            width: 40px;
            height: 100px;
            border: 1px solid var(--fg-color);
            border-radius: 32px;
            /* position: relative; */
            animation: none;
        
            &::before {
                content: '';
                width: 30px;
                height: 30px;
                background-color: var(--fg-color);
                border-radius: 50%;
                position: absolute;
                top: 65%;
                left: calc(50% - 15px);
                opacity: 0;
                animation: scroll_mobile 2s ease infinite;
            }
        }
    }    
}

@keyframes scroll {
  0% { transform: translate(0, 0)}
  50% { transform: translate(0, 5px)}
  100% { transform: translate(0, 0)}
}

@keyframes scroll_mobile {
  0% { 
    opacity: 0;
    transform: translate(0, 0);
  }
  10% { opacity: 0.3; }
  70% { 
    transform: translate(0, -60px);
    opacity: 0.3; 
  }
  90% { 
    opacity: 0;
    transform: translate(0, -60px);
  }
  100% { 
    transform: translate(0, 0);
  }
}

</style>