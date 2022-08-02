<div class="about" id="about">
    <svg class="shape" viewBox="0 0 200 40" preserveAspectRatio="none">
        <path d="M0 0 L0 40 L120 40 Z" />
        <path d="M80 40 L200 0 L 200 40 Z"/>
    </svg>
    <h1 class="section-title">About</h1>
    <section class="about_section">

    </section>
    <svg class="extra" viewBox="0 0 200 40" preserveAspectRatio="none">
        <path d="M0 0 L0 40 L120 40 Z" />
        <path d="M80 40 L200 0 L 200 40 Z"/>
    </svg>
</div>

<style>
.about {
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-color);
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    /* overflow-x: hidden; */
}

.about svg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -99%);
    fill: var(--bg-color);
}

.about .extra {
    width: 100%;
    position: absolute;
    bottom: 0;
    top: 100%;
    left: 0;
    transform: translate(0, -1%) rotate(180deg);
    fill: var(--bg-color);
}

:global(.section-title){
    font-family: var(--font-title);
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    margin-top: 1.5em;
}

section.about_section {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>