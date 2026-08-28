
        // ===== Floating background hearts =====
        const heartChars = ['💜', '💖', '💗', '💕', '❤️'];
        function createBgHeart() {
            const heart = document.createElement('div');
            heart.className = 'bg-heart';
            heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
            heart.style.animationDuration = (Math.random() * 6 + 6) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 12000);
        }
        setInterval(createBgHeart, 600);

        // ===== Typing effect for message =====
        const messageText = `On your special day, I just want you to know
that the world is a little brighter because you're in it.

May this year bring you smiles that reach your eyes,
dreams that come true, and all the happiness your
heart can hold.

You deserve every wonderful thing. Happy Birthday! 💫`;

        const typedEl = document.getElementById('typed');
        const cursorEl = document.getElementById('cursor');
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < messageText.length) {
                typedEl.textContent += messageText.charAt(charIndex);
                charIndex++;
                const ch = messageText.charAt(charIndex - 1);
                const delay = (ch === '\n') ? 200 : (ch === ' ') ? 40 : 45;
                setTimeout(typeWriter, delay);
            } else {
                setTimeout(() => cursorEl.style.display = 'none', 1500);
            }
        }
        setTimeout(typeWriter, 800);

        // ===== Blow candle =====
        const flame = document.getElementById('flame');
        const candle = document.getElementById('candle');
        const cake = document.getElementById('cake');
        let candleBlown = false;

        cake.addEventListener('click', () => {
            if (!candleBlown) {
                candle.classList.add('blow');
                candleBlown = true;
                burstConfetti(40);
                setTimeout(() => {
                    alert('🎉 Your wish has been made! 🎉\n\nMay all your dreams come true. 💜');
                }, 600);
            }
        });

        // ===== Confetti =====
        const colors = ['#ff6ec7', '#ffd700', '#a663cc', '#815ac0', '#b784db', '#fff', '#ff9ff3'];

        function burstConfetti(count = 50) {
            for (let i = 0; i < count; i++) {
                const conf = document.createElement('div');
                conf.className = 'confetti';
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.background = colors[Math.floor(Math.random() * colors.length)];
                conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
                conf.style.animationDelay = Math.random() * 0.5 + 's';
                conf.style.width = (Math.random() * 8 + 6) + 'px';
                conf.style.height = conf.style.width;
                if (Math.random() > 0.5) conf.style.borderRadius = '50%';
                document.body.appendChild(conf);
                setTimeout(() => conf.remove(), 5000);
            }
        }

        // Initial small confetti burst on load
        setTimeout(() => burstConfetti(30), 400);

        // ===== Wish button =====
        const wishBtn = document.getElementById('wishBtn');
        wishBtn.addEventListener('click', () => {
            burstConfetti(80);
            // floating hearts burst
            for (let i = 0; i < 15; i++) {
                setTimeout(createBgHeart, i * 80);
            }
        });
