<script>
export let title;
export let description;
</script>

<div>
    <h3>{title}</h3>
    <p>{description}</p>
</div>

<style>
    div {
        border-radius: 0.25rem;
        padding: 1rem 2rem;
        font-size: 1.25rem;
        background: rgb(222, 222, 222);
    }
    div:hover {
         background: rgb(241, 76, 17);
         color: white;
         cursor: pointer;
    }
</style>