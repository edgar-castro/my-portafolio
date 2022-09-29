<script>
    import { lang } from '../utils/translations';
    let languages = ['es', 'en'];

    let sourceImges = 'images/'


    function handleLangChange(new_lang) {
        console.log('select lang')
        lang.set(new_lang);
    }

    $: unselected = () => languages.filter(e => e != $lang);

</script>

<div class="lang-container">
    <div class="selected">
        <img src={sourceImges + $lang + '.png'} alt="item">
    </div>
    <ul class="lang-list">
        {#each unselected() as item }
            <img src={sourceImges + item + '.png'} alt="item" on:click={() => { handleLangChange(item) }}>
        {/each}
    </ul>
</div>

<style lang="scss">
    .lang-container {
        /* background-color: var(--bg-color); */
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        & .selected, .lang-list {
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: var(--fg-color); */
            padding: .5em;
            border-radius: 1em;
            /* box-shadow: 0 3px 5px rgba($color: white, $alpha: 0.1); */

            img {
                width: 32px;
                height: 32px;
            }
        }


        & .lang-list {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(0, calc(100% + 2em));
            scale: 0;
            transition: all 300ms ease-in-out;
        }

        &:hover {
            .lang-list {
                scale: 1;
                transform: translate(0, calc(100% + 0.5em));
            }
        }
        
    }
</style>