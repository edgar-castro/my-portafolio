<script>
    // @ts-nocheck
import { onMount } from "svelte";
import VueIcon from "./VueIcon.svelte";

const items = [1, 2, 3, 4, 5];

onMount(() => {

    const bg = document.getElementById('bg-icons');
    const svgs = Array.from(bg.querySelectorAll('svg'));

    const w = window.innerWidth;
    const h = window.innerHeight;

    function animatedIcons() {
        const availableSvgs = svgs.filter(svg => !svg.isAnimating);
        const svgToAnimate = availableSvgs[Math.floor(Math.random() * availableSvgs.length)];
        if(!svgToAnimate) return;

        svgToAnimate.addEventListener('animationend', () => {
            svgToAnimate.classList.remove('animate-icon');
            svgToAnimate.removeAttribute('style');
            svgToAnimate.isAnimating = false;
            }, { once: true });
        
            svgToAnimate.setAttribute('style', 
                `
                top: ${Math.floor(Math.random() * (h - 100))}px;                    
                left: ${Math.floor(Math.random() * (w - 100))}px;
                `                    
            );
            svgToAnimate.classList.add('animate-icon');
            svgToAnimate.isAnimating = true;
    }
    setInterval(animatedIcons, 1200);
    animatedIcons();
});
</script>


<div class="animatedbg">
    <div class="animatedbg__icons" id="bg-icons">
        {#each items as item}
            <VueIcon />
        {/each}
    </div>
    <slot class="animatedbg__slot">

    </slot>
</div>

<style>
.animatedbg {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
        0deg,
        var(--bg-gradient)
    );
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.animatedbg .animatedbg__icons {
    /* position: relative; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -0;
}

</style>