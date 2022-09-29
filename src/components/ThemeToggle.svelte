<script>
    import { theme } from '../utils/stores'

    function toggleTheme() {
        theme.update(v => !v);
    }
</script>

<div class="theme" class:toggle={$theme} on:click={toggleTheme}>
    <svg class="sun" width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_102_2)">
        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 1V3" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 21V23" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.21997 4.22L5.63997 5.64" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.3601 18.36L19.7801 19.78" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 12H3" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 12H23" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.21997 19.78L5.63997 18.36" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.3601 5.64L19.7801 4.22" stroke="#FFBB52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_102_2">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    <div class="circle"/>
    <svg class="moon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9999 12.79C20.8426 14.4922 20.2038 16.1144 19.1581 17.4668C18.1125 18.8192 16.7034 19.8458 15.0956 20.4265C13.4878 21.0073 11.7479 21.1181 10.0794 20.7461C8.41092 20.3741 6.8829 19.5345 5.67413 18.3258C4.46536 17.117 3.62584 15.589 3.25381 13.9205C2.88178 12.252 2.99262 10.5121 3.57336 8.9043C4.15411 7.29651 5.18073 5.88737 6.53311 4.84175C7.8855 3.79614 9.5077 3.15731 11.2099 3C10.2133 4.34827 9.73375 6.00945 9.85843 7.68141C9.98312 9.35338 10.7038 10.9251 11.8893 12.1106C13.0748 13.2961 14.6465 14.0168 16.3185 14.1415C17.9905 14.2662 19.6516 13.7866 20.9999 12.79Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>

<style lang="scss">
.theme {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    background-color: white;
    border-radius: 32px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .1);
    transition: all 300ms ease-in-out;
}

.sun {
    margin-right: 4px;
    width: 20px;
    height: 20px;
    /* : black; */
    /* stroke: black; */
}

.moon {
    margin-left: 4px;
    width: 20px;
    height: 20px;
}

.theme .circle {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(38px, 6px);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid #FFBB52;
    /* border: 3px solid black; */
    transition: all 300ms ease-in-out;
}

.theme.toggle {
    background-color: #374151;
    /* background-color: black; */
}

.theme.toggle .circle {
    /* left: 12px; */
    transform: translate(8px, 6px);
    border-color: white;
    background-color: #374151;
    /* background-color: black; */
}
</style>