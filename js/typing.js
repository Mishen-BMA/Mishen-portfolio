const typingText =
document.getElementById("typing-text");

const roles = [

    "Cybersecurity Student",

    "CTF Player",

    "Security Tool Developer",

    "BlackBox Creator"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const currentRole =
    roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
        currentRole.substring(
            0,
            charIndex++
        );

        if (charIndex >
            currentRole.length) {

            deleting = true;

            setTimeout(type, 1200);

            return;
        }

    } else {

        typingText.textContent =
        currentRole.substring(
            0,
            charIndex--
        );

        if (charIndex < 0) {

            deleting = false;

            roleIndex =
            (roleIndex + 1)
            % roles.length;
        }
    }

    setTimeout(
        type,
        deleting ? 40 : 80
    );
}

type();