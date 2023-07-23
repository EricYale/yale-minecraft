function casLogin() {
    const redirect = `${location.protocol}//${location.host}/result`;
    window.location.href = `https://secure.its.yale.edu/cas/login?service=${encodeURIComponent(redirect)}`;
}
