<script>
import AnimatedBackground from "./AnimatedBackground.svelte";
import Presentation from "./Presentation.svelte";
// import LangSelector from './LangSelector.svelte';

import { scrollY } from "../utils/stores";
    // import LangSelector from "./LangSelector.svelte";
const w = window.innerWidth * 0.6;

</script>

<div class="" style="display: { $scrollY > w ? 'none' : 'block'};">
    <AnimatedBackground>
        <Presentation/>
        <!-- <LangSelector /> -->
    </AnimatedBackground>  
</div>
    

<style>
    .fixed {
        position: fixed;
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 5;
    }
</style>
