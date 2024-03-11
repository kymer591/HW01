(() => {
    class SecretFile{
        secretMessage(){
            console.log("Shhhhhh...");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();
})();