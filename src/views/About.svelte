<script>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onMount } from 'svelte';

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline_about = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top buttom",
                // end: "+= 100%",
                scrub: true,
                pin: true,
                // markers: true,

            }
        });

        // timeline_about.from('.about', {duration: 2, backgroundColor: ""})
    })

</script>

<section class="about" id="about">
    <svg class="shape" viewBox="0 0 200 40" preserveAspectRatio="none">
        <path d="M0 0 L0 40 L120 40 Z" />
        <path d="M80 40 L200 0 L 200 40 Z"/>
    </svg>
    <h3 class="about__title">About</h3>
    <div class="about__desct">
        
    </div>
    <div class="about__skills"></div>
</section>

<style lang="scss">
.about {
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color);
    position: relative;

    & .shape {
        position: absolute;
        width: 100%;
        /* top: -1o00%; */
        top: 0;
        transform: translate(0, -100%);
        fill: var(--bg-color);
        z-index: 99999 !important;
    }
}
</style>