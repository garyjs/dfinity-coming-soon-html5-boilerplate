import canister from 'ic:canisters/htmlboilerplate_assets';

canister.retrieve('index.html').then(htmlBytes => {
  const html = new TextDecoder().decode(new Uint8Array(htmlBytes));
  const el = new DOMParser().parseFromString(html, "text/html");
  document.body.replaceChild(el.firstElementChild, document.getElementById('app'));
})