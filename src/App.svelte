<script>
import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import Navbar from "./components/Navbar.svelte";

import { scrollY, theme} from "./utils/stores";

</script>
 <svelte:window bind:scrollY={$scrollY} />
<main class:dark={$theme}>
  <Navbar />
  <Home />
  <About />
  <div class="contact">
  Contact
  </div>

</main>

<style>
main{
  width: 100vw;
  /* height: 100vh; */
  /* min-height: 100vh; */
  position: relative;
  overflow-y: auto;
}

.contact {
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
  background-image: linear-gradient(
    180deg,
    var(--bg-gradient)
  );
  position: fixed;
  /* z-index: 9; */
}
</style>
