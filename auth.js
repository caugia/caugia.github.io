(function () {
    const KEY = "caugia-auth";
    const USERNAME = "caugia";
    const PASSWORD = "Caugia2025!build";

    // Already unlocked?
    if (localStorage.getItem(KEY) === "true") return;

    function ask() {
        const u = prompt("Username:");
        const p = prompt("Password:");
        return (u === USERNAME && p === PASSWORD);
    }

    if (!ask()) {
        document.body.innerHTML =
            "<h1 style='text-align:center;margin-top:3rem;font-family:sans-serif;'>Access Denied</h1>";
        throw new Error("Not authorized");
    }

    // Store success
    localStorage.setItem(KEY, "true");
})();
