<div class="title">
    <img class="profile_pic" src="/images/profile.jpg" alt="Foto de perfil">
    <div class="text_container">
        <h1>Hi! I'm Edgar Castro</h1>
        <h3>Frontend Developer</h3>
    </div>
</div>

<style>
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
}

.title img.profile_pic {
    width: 300px;
    border-radius: 50%;
    padding: 1em;
    border: 5px solid black;
    margin-right: 1em;
}

.title .text_container h1, h3 {
    font-family: var(--font-title);
    font-weight: 900;
}


.title .text_container h1 {
    font-size: 50px;
}

.title .text_container h3 {
    font-size: 40px;
}

@media screen and (max-width: 768px){
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }

    .title img.profile_pic {
        width: 200px;
        border-radius: 50%;
        padding: 1em;
        border: 5px solid black;
        margin-right: 1em;
        
    }

    .title .text_container h1, h3 {
        font-family: var(--font-title);
        font-weight: 900;
    }


    .title .text_container h1 {
        font-size: 30px;
    }

    .title .text_container h3 {
        font-size: 24px;
    }
}
</style>