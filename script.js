const starsContainer = document.getElementById('stars');
const starCount = 3000; // Number of stars

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star'; // Class for the first set of stars
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 400}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starsContainer.appendChild(star);
}





























// const starsContainer = document.getElementById('stars');
//         const starCount = 1000; // Number of stars
    
//         for (let i = 0; i < starCount; i++) {
//             const star = document.createElement('div');
//             star.className = 'star';
//             const size = Math.random() * 3 + 1; // Random size between 1 and 4
//             star.style.width = `${size}px`;
//             star.style.height = `${size}px`;
//             star.style.top = `${Math.random() * 400}vh`;
//             star.style.left = `${Math.random() * 100}vw`;
//             starsContainer.appendChild(star);
//         }

        // const starsContainer2 = document.getElementById('stars2');
        // const starCount2 = 1000; // Number of stars
    
        // for (let i = 0; i < starCount2; i++) {
        //     const star2 = document.createElement('div');
        //     star2.className = 'star2';
        //     const size2 = Math.random() * 3 + 1; // Random size between 1 and 4
        //     star2.style.width = `${size2}px`;
        //     star2.style.height = `${size2}px`;
        //     star2.style.top = `${Math.random() * 400}vh`;
        //     star2.style.left = `${Math.random() * 100}vw`;
        //     starsContainer2.appendChild(star2);
        // }