        // Canvas settings
        const canvas = document.getElementById("hero-lightpass");
        const context = canvas.getContext("2d");

        canvas.width=520;
        canvas.height=770;

        
        // Preloading images to drastically improve performance
        const currentFrame = index => (`/webp2/mizgl-00${index.toString().padStart(3, '0')}.webp`);
        const frameCount = 417; // There 148 images for that animation-sequence to load
        const images = [];

        const preloadImages = () => {
            for (let i = 1; i < frameCount; i++) {
                images[i] = new Image(); // This is functionally equivalent to document.createElement('img').
                images[i].src = currentFrame(i);
            }
        };

        preloadImages();


        // Draw the first image
        const img = new Image();
        img.src = currentFrame(1);
        img.onload = function(){
            context.drawImage(img, 0, 0);
        }


        // Scroll interactions
        const html = document.getElementsByTagName('html');
        
        window.addEventListener('scroll', () => {  
            const scrollTop = html[0].scrollTop;
            // console.log('scrollTop: ', scrollTop);
            // console.log('html.scrollHeight: ', html[0].scrollHeight);
            // console.log('window.innerHeight: ', window.innerHeight);
            const maxScrollTop = html[0].scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount)
            );
            // console.log('FrameIndex', frameIndex);

            requestAnimationFrame(() => context.drawImage(images[frameIndex + 1], 0, 0));

        });
