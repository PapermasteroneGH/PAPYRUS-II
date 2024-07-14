document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input');
    const terminal = document.getElementById('terminal');

    const HELP = `
        WHOIS      DESCRIBES THE PERSON WHO CREATED THE SHELL<br>
        WHOAMI     SHOWS DATA OF THE PERSON USING THE COMPUTER<br>
        PWD        LISTS THE AVAILABLE DIRECTORIES TO ENTER<br>
        CD         CHANGES THE DIRECTORY YOU'RE IN TO ANOTHER<br>
        LESS       READS OR EXECUTES A FILE<br>
        LS         LISTS CONTENTS INSIDE A FILE<br>
    `;

    function WHOIS() {
        return `
            NAME        PAPERMASTERONE<br>
            SINCE       15/08/1969<br>
            TITLES      FOUNDER OF <a href="https://discord.gg/pjZBSpTRTD" target="blank_">PAPERWORKS(I)</a><br>
                        <br>
            EDUCATION   MIT<br>
            <br>
            BRIEF DESCRIPTION<br>
            PAPERMASTERONE HAS EXPLORED MANY FIELDS OF EXPERTISE IN WHICH YOU<br>
            CAN LOOK INTO THE FILE SYSTEM BY TYPING PWD BUT HE IS COMMONLY KNOWN<br>
            AS A CONTENT CREATOR ON YOUTUBE AND OTHER MEDIA PLATFORMS<a href="" target="blank_">(i)</a>, HE ALSO<br>
            FOUNDED A FEW ORGANIZATIONS & COMMUNITIES ONE OF THEM BEING PAPERWORKS, <br>
            A COMMUNITY OF ART & ANIMATION AS WELL AS PROGRAMMING AND MANY MORE. 
            THEY ARE KNOWN FOR THEIR WORKS SUCH AS SOUP WHICH RECEIVED AN OSCAR<br>
            <br>
        `;
    }

    function WHOAMI() {
        // Placeholder function - add actual functionality as needed
        terminal.innerHTML += `this program will guess who you are based on a couple of informations.<br>
        where are you from?`;
        // Placeholder for input handling
        if (inputField) {
            terminal.innerHTML += `"you are" + inputField.value + " lol"<br>`;
        }
    }

    function PWD() {
        terminal.innerHTML += `
            DOCUMENTS<br>
            PICTURES<br>
            MUSIC<br>
            VIDEOS<br>
            NETWORK<br>
        `;
    }

    function PICTURES() {
        return `
            PAPERWORKS-LOGO<br>
            PAPERMASTERONE<br>
        `;
    }

    function VIDEOS() {
        return `
            ZOMBIE INVASION SHORTFILM<br>
            ZOMBIE INVASION TRAILER<br>
            PAPERMASTERONE VS SUPATURTLE<br>
            SOUP<br>
        `;
    }

    function MUSIC() {
        return ``;
    }

    function NETWORKS() {
        return ``;
    }

    function DOCUMENTS() {
        return `
            RESEARCH/ESSAY PAPERS<br>
            COMPETITION CERTIFICATES<br>
            PROGRAMS<br>
        `;
    }

    function ROEP() {
        return `
            Optimizing the practical mental or physical techniques for improving life-long high-quality neuroplasticity. 19/04/2024<br>
            <a href="The availability of lethal rocket science for ordinary citizens.docx">The availability of lethal rocket science for ordinary citizens</a> 19/04/2024<br>
            Mental structure optimization to become a genius 18/06/2024<br>
            My experience in overcoming conflicts 18/06/2024<br>
        `;
    }

    function compcerts() {
        return `
            FREECODECAMP <a href="https://www.freecodecamp.org/certification/PapermasteroneFCC/responsive-web-design" target="blank_">RESPONSIVE WEB DESIGN</a> 09/03/2024<br>
            FREECODECAMP <a href="">JAVASCRIPT</a><br>
        `;
    }

    function PROGRAMS() {
        return `
            <a href="motherguesser.html">ISYOURMOTHERMINE?</a> JS 15/07/2024<br>
            <a href="">THE TEST ROOM I</a> BASH 01/03/2024<br>
            <a>THE TEST ROOM II</a> HTML/CSS/JS 02/03/2024<br>
            <a href="computer.vbs">computer</a> VBS 20/06/2024
        `;
    }

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const command = inputField.value.toUpperCase().trim() // Make command case-insensitive and trim whitespace
            if (command) {
                executeCommand(command);
                inputField.value = ''; // Clear input field after executing the command
            }
        }
    });

    function executeCommand(command) {
        switch (command) {
            case 'HELP COMMANDS':
                terminal.innerHTML += `<br>${HELP}`;
                document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input');
    const terminal = document.getElementById('terminal');

    const HELP = `
        WHOIS      DESCRIBES THE PERSON WHO CREATED THE SHELL<br>
        WHOAMI     SHOWS DATA OF THE PERSON USING THE COMPUTER<br>
        PWD        LISTS THE AVAILABLE DIRECTORIES TO ENTER<br>
        CD         CHANGES THE DIRECTORY YOU'RE IN TO ANOTHER<br>
        LESS       READS OR EXECUTES A FILE<br>
        LS         LISTS CONTENTS INSIDE A FILE<br>
    `;

    function WHOIS() {
        return `
            NAME        PAPERMASTERONE<br>
            SINCE       15/08/1969<br>
            TITLES      FOUNDER OF <a href="https://discord.gg/pjZBSpTRTD" target="blank_">PAPERWORKS(I)</a><br>
                        <br>
            EDUCATION   MIT<br>
            <br>
            BRIEF DESCRIPTION<br>
            PAPERMASTERONE HAS EXPLORED MANY FIELDS OF EXPERTISE IN WHICH YOU<br>
            CAN LOOK INTO THE FILE SYSTEM BY TYPING PWD BUT HE IS COMMONLY KNOWN<br>
            AS A CONTENT CREATOR ON YOUTUBE AND OTHER MEDIA PLATFORMS<a href="" target="blank_">(i)</a>, HE ALSO<br>
            FOUNDED A FEW ORGANIZATIONS & COMMUNITIES ONE OF THEM BEING PAPERWORKS, <br>
            A COMMUNITY OF ART & ANIMATION AS WELL AS PROGRAMMING AND MANY MORE. 
            THEY ARE KNOWN FOR THEIR WORKS SUCH AS SOUP WHICH RECEIVED AN OSCAR<br>
            <br>
        `;
    }

    function WHOAMI() {
        // Placeholder function - add actual functionality as needed
        terminal.innerHTML += `this program will guess who you are based on a couple of informations.<br>
        where are you from?`;
        // Placeholder for input handling
        if (inputField) {
            terminal.innerHTML += `"you are" + inputField.value + " lol"<br>`;
        }
    }

    function PWD() {
        terminal.innerHTML += `
            DOCUMENTS<br>
            PICTURES<br>
            MUSIC<br>
            VIDEOS<br>
            NETWORK<br>
        `;
    }

    function PICTURES() {
        return `
            PAPERWORKS-LOGO<br>
            PAPERMASTERONE<br>
        `;
    }

    function VIDEOS() {
        return `
            ZOMBIE INVASION SHORTFILM<br>
            ZOMBIE INVASION TRAILER<br>
            PAPERMASTERONE VS SUPATURTLE<br>
            SOUP<br>
        `;
    }

    function MUSIC() {
        return ``;
    }

    function NETWORKS() {
        return ``;
    }

    function DOCUMENTS() {
        return `
            RESEARCH/ESSAY PAPERS<br>
            COMPETITION CERTIFICATES<br>
            PROGRAMS<br>
        `;
    }

    function ROEP() {
        return `
            Optimizing the practical mental or physical techniques for improving life-long high-quality neuroplasticity. 19/04/2024<br>
            <a href="The availability of lethal rocket science for ordinary citizens.docx">The availability of lethal rocket science for ordinary citizens</a> 19/04/2024<br>
            Mental structure optimization to become a genius 18/06/2024<br>
            My experience in overcoming conflicts 18/06/2024<br>
        `;
    }

    function compcerts() {
        return `
            FREECODECAMP <a href="https://www.freecodecamp.org/certification/PapermasteroneFCC/responsive-web-design" target="blank_">RESPONSIVE WEB DESIGN</a> 09/03/2024<br>
            FREECODECAMP <a href="">JAVASCRIPT</a><br>
        `;
    }

    function PROGRAMS() {
        return `
            <a href="motherguesser.html">ISYOURMOTHERMINE?</a> JS 15/07/2024<br>
            <a href="">THE TEST ROOM I</a> BASH 01/03/2024<br>
            <a>THE TEST ROOM II</a> HTML/CSS/JS 02/03/2024<br>
            <a href="computer.vbs">computer</a> VBS 20/06/2024
        `;
    }

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const command = inputField.value.toUpperCase().trim() // Make command case-insensitive and trim whitespace
            if (command) {
                executeCommand(command);
                inputField.value = ''; // Clear input field after executing the command
            }
        }
    });

    function executeCommand(command) {
        switch (command) {
            case 'HELP COMMANDS':
                terminal.innerHTML += `<br>${HELP}`;
                
                break;
            case 'WHOIS':
                terminal.innerHTML += `<br>${WHOIS()}`;
                break;
            case 'WHOAMI':
                WHOAMI();
                break;
            case 'PWD':
                PWD();
                break;
            case 'CD DOCUMENTS':
                terminal.innerHTML += `<br>${DOCUMENTS()}`;
                break;
            case 'LS PROGRAMS':
                terminal.innerHTML += `<br>${PROGRAMS()}`;
                break;
            case 'LESS ISYOURMOTHERMINE?':
                terminal.innerHTML += `<br>${isyourmothermine()}`;
                break;
            case 'LS COMPETITION CERTIFICATES':
                terminal.innerHTML += `<br>${compcerts()}`;
                break;
            case 'LS RESEARCH/ESSAY PAPERS':
                terminal.innerHTML += `<br>${ROEP()}`;
                break;
            case 'CD PICTURES':
                terminal.innerHTML += `<br>${PICTURES()}`;
                break;
            case 'CD VIDEOS':
                terminal.innerHTML += `<br>${VIDEOS()}`;
                break;
            case 'CD MUSIC':
                terminal.innerHTML += `<br>${MUSIC()}`;
                break;
            case 'CD NETWORK':
                terminal.innerHTML += `<br>${NETWORKS()}`;
                break;
            case 'CLS':
                terminal.innerHTML = '';
                break;
            default:
                terminal.innerHTML += `<br>Unknown command: ${command}`;
                break;
        }
        terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom of the terminal
    }
});
                break;
            case 'WHOIS':
                terminal.innerHTML += `<br>${WHOIS()}`;
                break;
            case 'WHOAMI':
                WHOAMI();
                break;
            case 'PWD':
                PWD();
                break;
            case 'CD DOCUMENTS':
                terminal.innerHTML += `<br>${DOCUMENTS()}`;
                break;
            case 'LS PROGRAMS':
                terminal.innerHTML += `<br>${PROGRAMS()}`;
                break;
            case 'LESS ISYOURMOTHERMINE?':
                terminal.innerHTML += `<br>${isyourmothermine()}`;
                break;
            case 'LS COMPETITION CERTIFICATES':
                terminal.innerHTML += `<br>${compcerts()}`;
                break;
            case 'LS RESEARCH/ESSAY PAPERS':
                terminal.innerHTML += `<br>${ROEP()}`;
                break;
            case 'CD PICTURES':
                terminal.innerHTML += `<br>${PICTURES()}`;
                break;
            case 'CD VIDEOS':
                terminal.innerHTML += `<br>${VIDEOS()}`;
                break;
            case 'CD MUSIC':
                terminal.innerHTML += `<br>${MUSIC()}`;
                break;
            case 'CD NETWORK':
                terminal.innerHTML += `<br>${NETWORKS()}`;
                break;
            case 'CLS':
                terminal.innerHTML = '';
                break;
            default:
                terminal.innerHTML += `<br>Unknown command: ${command}`;
                break;
        }
        terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom of the terminal
    }
});
