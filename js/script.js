var x = document.forms["myForm"]["fname"].value;
if (x == "") {
  alert("Name must be filled out");
  return false;
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-329148-88', {'allowLinker': true});
    ga('set', 'hostname', '.list-manage.com');
    ga('send', 'pageview');

    

        
        var handle = focusUtil.watch("curNode", function(name, oldValue, newValue){
            var parent = query(newValue).closest('.field-group');
            if(!domClass.contains(parent, "focused-field")) {
                query('.focused-field').removeClass('focused-field');
                parent.addClass('focused-field');
            }
        });

        query('.feedback.error').closest('.field-group').addClass('error');
        query('.addressfield input:text[value=""]').addClass('empty');

        query('div.subfields').on("click", function(e){
            var firstInput = query('input', e.target)[0];
            focusUtil.focus(firstInput);
        });

        
        if (domClass.contains(query('html')[0], "ie-lte7")){

            query('img').forEach(function(node){
                var computedStyle = domStyle.getComputedStyle(node);
                var w = domGeom.getContentBox(node, computedStyle).w;
                console.log(w);
                if(w >= 600){
                    domStyle.set(node, "width", "600px");
                }
            });
        }

       
        dojo.query(".radio input, .checkbox input").removeAttr("data-dojo-type");

  
        parser.parse();

        query('form').on("submit",function(e){
            var invalidDate = dojo.query('.dijitTextBoxError');
            if(invalidDate.length){
                query('.dijitDateTextBox ~ .feedback.error').forEach(domConstruct.destroy);
                invalidDate.forEach(function(node) {
                    domConstruct.place('<div class="feedback error"><div class="errorText">Please enter a valid date</div></div>', node, 'after');
                });
                e.preventDefault();
            }
        });

        twemoji.parse(document.body, { size: 72 });

        query(".emoji").forEach(function(emoji){
            domStyle.set(emoji, {
                width: "16px",
                height: "16px"
            });
        });
    