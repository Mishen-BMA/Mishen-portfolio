const terminalInput =
document.getElementById("terminal-input");

const terminalOutput =
document.getElementById("terminal-output");

const commands = {

    help: `
Available Commands

about
projects
skills
certs
github
linkedin
medium
contact
clear
`,

    about: `
Cybersecurity Student
CTF Player
Security Tool Developer

Currently building BlackBox.
`,

    projects: `
BlackBox
HashForge
Cyber Password Auditor
`,

    skills: `
Nmap
Burp Suite
Wireshark
JavaScript
HTML
CSS
Linux
`,

    certs: `
Google
IBM
Cisco
Fortinet
`,

    github: `
https://github.com/Mishen-BMA
`,

    linkedin: `
https://www.linkedin.com/in/kaveesha-mishen-39194628b
`,

    medium: `
https://medium.com/@kaveeshamishen2002
`,

    contact: `
Email:
kaveeshamishen2002@gmail.com
`
};

terminalInput.addEventListener(
    "keydown",
    function (e) {

        if (e.key !== "Enter") return;

        const command =
        terminalInput.value.trim().toLowerCase();

        if (command === "clear") {

            terminalOutput.innerHTML = "";

            terminalInput.value = "";

            return;
        }

        const result =
        commands[command] ||
        "Command not found.";

        terminalOutput.innerHTML += `
            <p>
                <span class="prompt">
                    kaveesha@portfolio:~$
                </span>
                ${command}
            </p>

            <pre>${result}</pre>
        `;

        terminalInput.value = "";

        terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
    }
);