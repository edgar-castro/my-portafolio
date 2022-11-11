<script>
import Navbar from "./components/Navbar.svelte";

import Home from './views/Home.svelte'
import About from './views/About.svelte'

import { scrollY, theme} from "./utils/stores";

</script>
 <svelte:window bind:scrollY={$scrollY} />
<main class:dark={$theme}>
  <Navbar />
  <Home />
  <About />

</main>

<style>
main{
  width: 100vw;
  position: relative;
  overflow-y: auto;
}


</style>
