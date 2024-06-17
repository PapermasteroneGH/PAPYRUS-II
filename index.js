document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input');
    const terminal = document.getElementById('terminal');

    const HELP = `
        WHOIS      DESCRIBES THE PERSON WHO CREATED THE SHELL<br>
        WHOAMI     SHOWS DATA OF THE PERSON USING THE COMPUTER<br>
        PWD        LISTS THE AVAILABLE DIRECTORIES TO ENTER<br>

    `

    function WHOIS() {
        let title = `
        NAME        PAPERMASTERONE<br>
        SINCE         15/08/1969<br>
        TITLES      FOUNDER OF PAPERWORKS(I)<br>
                    <br>
        EDUCATION   MIT<br>
        <br>
        BRIEF DESCRIPTION<br>
        PAPERMASTERONE HAS EXPLORED MANY FIELDS OF EXPERTISE IN WHICH YOU<br>
        CAN LOOK INTO THE FILE SYSTEM BY TYPING PWD BUT HE IS COMMONLY KNOWN<br>
        AS A CONTENT CREATOR ON YOUTUBE AND OTHER MEDIA PLATFORMS<a href="">(i)</a>, HE ALSO<br>
        FOUNDED A FEW ORGANIZATIONS & COMMUNITIES ONE OF THEM BEING PAPERWORKS <br>
        A COMMUNITY OF ARTIST AND ANIMATORS<br>
        `
        return title;
    }

    function WHOAMI() {
        // Placeholder function - add actual functionality as needed
        return "YOU'RE GAY";
        
    }

    function PWD() {
        terminal.innerHTML += `<br>
        DOCUMENTS<br>
        PICTURES<br>
        MUSIC<br>
        VIDEOS<br>
        NETWORK<br>
        `
    }

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const command = inputField.value.trim().toUpperCase(); // Make command case-insensitive
            if (command) {
                executeCommand(command);
                inputField.value = ''; // Clear input field after executing the command
            } else if (command) {
                filesystem(command);
                inputField.value = '';
            }
        }
    });

    function filesystem(command) {
        switch (command) {
            case 'DOCUMENTS':
                terminal.innerHTML += DOCUMENTS();
                break;
            default:
                terminal.innerHTML += `<br>Unknown command: ${command}`;
                break;            
            }
    }

    function DOCUMENTS() {
        let DOCUMENTFOLDER = `
        RESEARCH/ESSAY PAPERS
        COMPETITION CERTIFICATES
        PROGRAMS
        `
        return DOCUMENTFOLDER;
    }

    function PROGRAMS() {
        let programs = `
        ISYOURMOTHERGAY?        JS                 15/07/2024
        THE TEST ROOM I         BASH               01/03/2024
        THE TEST ROOM II        HTML/CSS/JS        02/03/2024
        `
        return programs;
    }

    function executeCommand(command) {
        switch (command) {
            case 'HELP COMMANDS':
                terminal.innerHTML += `<br>${HELP}`;
                break;
            case 'WHOIS':
                terminal.innerHTML += `<br>${WHOIS()}`;
                break;
            case 'WHOAMI':
                terminal.innerHTML += `<br>${WHOAMI()}`;
                break;
            case 'PWD':
                PWD();
                switch (command) {
                    case 'DOCUMENTS':
                        terminal.innerHTML += `<br>${DOCUMENTS()}`;
                        break;
                    
                }
                break;
            case 'CLS':
                terminal.innerHTML -= terminal.innerHTML;
                break;
            default:
                terminal.innerHTML += `<br>Unknown command: ${command}`;
                break;
        }
        terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom of the terminal
    }
});