<script>
import AnimatedBackground from "./AnimatedBackground.svelte";
import Presentation from "./Presentation.svelte";

import { currentScrollY } from "../stores/config";
const w = window.innerWidth * 0.6;
console.log(w);
</script>

<div class="fixed" style="display: { $currentScrollY > w ? 'none' : 'block'};">
    <AnimatedBackground>
        <Presentation/>
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
