<script>
	import Card from './components/Card.svelte';
  import Navbar from "./components/Navbar.svelte";
  let description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque.`
	const array = ['Blog01',"Blog02"]

</script>

<Navbar />

<main>
	<h2>Learning Svelte</h2>
	<section class="cards">
		{#each array as thing, i}
		<Card title={`${i+1}. ${thing}`} description = {description} />
		{/each}
	</section>
</main>

<style>
  .layout {
    width: 90%;
    margin: auto;
    font-size: 24px;
  }
  main h2 {
	  text-align: center;
	  font-size: 3rem;
	  color: orangered;
  }
  .cards {
	  display: grid;
	  margin: 2rem auto;
	  gap: 2rem;
	  max-width: 800px;

  }
</style>
