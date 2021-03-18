
shadow.cljs.devtools.client.env.module_loaded('app');

try { norns_index.app.init(); } catch (e) { console.error("An error occurred when calling (norns-index.app/init)"); throw(e); }