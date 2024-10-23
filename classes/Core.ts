export class Core {
    constructor() {
        
    },

    checkEnvironment() {
        // let's get the operating system name and version from a terminal command
        // and return it as an object
        const os = Deno.build.os;

        console.log({ os });
    }
}