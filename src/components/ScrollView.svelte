<div class="scrollview">
    <slot></slot>
</div>

<style>
.scrollview {
    width: 100%;
    position: relative;
    /* height: 100vh; */
    height: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    z-index: 9999;
}
</style>