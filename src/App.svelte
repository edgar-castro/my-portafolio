<script>
import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import Navbar from "./components/Navbar.svelte";
import ScrollView from "./components/ScrollView.svelte";
import TransparentPage from "./components/TransparentPage.svelte";

import { currentScrollY } from "./stores/config";

</script>
 <svelte:window bind:scrollY={$currentScrollY} />
<main>
 
  <Navbar />
  <Home />
  <div class="contact">
    Contact
  </div>
  <ScrollView>
    <TransparentPage />
    <About />
    <p>{$currentScrollY}</p>
    <TransparentPage />
  </ScrollView>
 

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
