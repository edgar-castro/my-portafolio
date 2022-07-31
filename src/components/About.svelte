<div class="about" id="about">
    <svg class="shape" viewBox="0 0 200 40" preserveAspectRatio="none">
        <path d="M0 0 L0 40 L120 40 Z" />
        <path d="M80 40 L200 0 L 200 40 Z"/>
    </svg>
    <h1 class="section-title">About</h1>
</div>

<style>
.about {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
}

.about svg {
    position: absolute;
    transform: translate(0, -99%);
    fill: var(--bg-color);
}

:global(.section-title){
    font-family: var(--font-title);
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    top: 0;
}

@media screen and (max-width: 768px){

}
</style>