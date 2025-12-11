function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    // ✦ ✧ ✶ ❅ ❆
    snowflake.textContent = '❄';

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 3 + 7) + 's';
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';

    document.querySelector('.snow').appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnowflake, 200);


