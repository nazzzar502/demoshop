<script>
    export let item;

    let rating = Math.round(item.rating, 10);
    let maxRating = 1000;
    import { onMount } from "svelte";
    let stars = [];
    const setRaiting = () => {
        let step = maxRating / 5;
        step = parseInt(step, 10);
        for (let i = 0; i < 5; i++) {
            if (rating > i * step) {
                stars[i] = "grade";
            } else {
                stars[i] = "star_border";
            }
        }
    };
    onMount(setRaiting);
</script>

<body>
    <div id="widget">
        {#each stars as star}
            <span class="material-icons"> {star} </span>
        {/each}
        <span id="counter"> {rating} </span>
    </div>
</body>

<style>
    body {
        max-width: fit-content;
    }
    #widget {
        display: flex;
        flex-flow: left;
        margin-left: 5px;
    }
    #counter {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        margin-left: 5px;
        margin-top: 3px;
        font-size: smaller;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #484a4a;
    }
</style>
