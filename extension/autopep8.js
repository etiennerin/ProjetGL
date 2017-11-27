define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {
        console.log(
            'Hello world',
            Jupyter.notebook
        );
		var x=document.createElement('p');
		x.style.backgroundColor="red !important";
		x.id="ff";
		x.width="500px";
		x.height="500px";
		document.body.appendChild(x);
		console.log(x);
		console.log($('span'));
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});