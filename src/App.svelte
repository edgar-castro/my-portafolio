<script>
import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import Navbar from "./components/Navbar.svelte";

</script>

<main>
  <Navbar />
  <Home />
  <About />
</main>

<style>
  main{
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
