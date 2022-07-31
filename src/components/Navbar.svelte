<nav>
    <ul>
        <li class="active">Home</li>
        <li >About</li>
        <li>Portafolio</li>
        <li>Contact</li>
    </ul>
</nav>

<style>
nav {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    width: 100%;
}

nav ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
}

nav ul li {
    margin: 0 .5em;
    padding: .5em;
    font-family: var(--font-title);
    font-size: 20px;
    transition: all 1s ease-in-out;
    color: var(--gray-color);
    font-weight: bold;
}

nav ul li.active {
    color: black;
    border-bottom: 3px solid black;
}



@media screen and (max-width: 768px){
    nav ul li {
        margin: 0 .5em;
        padding: .5em;
        font-family: var(--font-title);
        font-size: 14px;
        transition: all 1s ease-in-out;
    }
    
    nav ul li.active {
        font-weight: bold;
        border-bottom: 3px solid black;
    }
}
</style>