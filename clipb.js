jQuery(document).ready(function(a){var g=a("#form"),h=a("#encoded_url_div"),k=a("#encoded_url"),e=a("#url"),f=a("#submit_btn"),l=a('button[type="reset"]');g.submit(function(c){c.preventDefault();c=e.val();var d;if(d=c)try{new URL(c),d=!0}catch(b){console.error(b.message),d=!1}d&&(f.button("loading"),a.ajax({url:"link/encode/",type:"POST",dataType:"json",data:{url:c,short_url:a("#short_url").prop("checked"),csrf_test_name:a('[name="csrf_test_name"]').val()}}).done(function(b){b.data&&(b=b.data,b.success?(h.removeClass("hidden"),k.val(b.url)):console.error("Something wrong!"),a('[name="csrf_test_name"]').val(b.token))}).fail(function(){console.error("Request failed. Something wrong!")}).always(function(){f.button("reset")}))});l.click(function(a){e.focus()});"undefined"!==typeof Clipboard&&new Clipboard(".copyBtn")});
