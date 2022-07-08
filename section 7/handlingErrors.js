async function f() {
  try {
    const response = await fetch("http://some-host.com/wrong-url");
  } catch (e) {
    console.log("upsii!");
  }
}

f();

async function ff() {
  const response = await fetch('"http://some-host.com/wrong-url');
}

ff().catch((e) => console.log("eeeeerrrorrr"));
