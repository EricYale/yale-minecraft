let ticket;

addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    ticket = urlParams.get('ticket');
    
    document.getElementById("loading").style.display = "none";

    if(!ticket) {
        document.getElementById("ticket-failure").style.display = "block";
    } else {
        document.getElementById("ticket-success").style.display = "block";
    }
});

function validate() {
    if(!ticket) return;
    const redirect = `${location.protocol}//${location.host}/result`;
    fetch(`https://secure.its.yale.edu/cas/serviceValidate?service=${encodeURIComponent(redirect)}&ticket=${ticket}`, {
        headers: {
            "Content-Type": "text/xml",
        },
        mode: "no-cors",
    }).then((res) => {
        console.log(res.headers)
        console.log(res.text())
    })
}
