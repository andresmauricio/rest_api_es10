import "@babel/polyfill";
import app from './server';


async function main() {
    await app.listen(8000);
    console.log('server on port 8000');
}

main();