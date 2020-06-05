jQuery(function($)
{$('.rwmb-images').on('click','.rwmb-delete-file',function()
{var $dragndrop=$(this).parents('.rwmb-images').siblings('.rwmb-drag-drop');$dragndrop.removeClass('hidden');});$('.rwmb-drag-drop').each(function()
{var $dropArea=$(this),$imageList=$dropArea.siblings('.rwmb-uploaded'),uploaderData=$dropArea.data('js_options'),uploader={};uploaderData.multipart_params=$.extend({_ajax_nonce:$dropArea.data('upload_nonce'),post_id:$('#post_ID').val()},uploaderData.multipart_params);uploader=new plupload.Uploader(uploaderData);uploader.init();uploader.bind('FilesAdded',function(up,files)
{var maxFileUploads=$imageList.data('max_file_uploads'),uploaded=$imageList.children().length,msg=maxFileUploads>1?rwmbFile.maxFileUploadsPlural:rwmbFile.maxFileUploadsSingle;msg=msg.replace('%d',maxFileUploads);if(maxFileUploads>0&&(uploaded+files.length)>maxFileUploads)
{if(uploaded<maxFileUploads)
{var diff=maxFileUploads-uploaded;up.splice(diff-1,files.length-diff);files=up.files;}
alert(msg);}
if(maxFileUploads>0&&uploaded+files.length>=maxFileUploads)
$dropArea.addClass('hidden');max=parseInt(up.settings.max_file_size,10);plupload.each(files,function(file)
{addLoading(up,file,$imageList);addThrobber(file);if(file.size>=max)
removeError(file);});up.refresh();up.start();});uploader.bind('Error',function(up,e)
{addLoading(up,e.file,$imageList);removeError(e.file);up.removeFile(e.file);});uploader.bind('FileUploaded',function(up,file,r)
{r=$.parseJSON(r.response);r.success?$('li#'+file.id).replaceWith(r.data):removeError(file);});});function removeError(file)
{$('li#'+file.id).addClass('rwmb-image-error').delay(1600).fadeOut('slow',function()
{$(this).remove();});}
function addLoading(up,file,$ul)
{$ul.removeClass('hidden').append("<li id='"+file.id+"'><div class='rwmb-image-uploading-bar'></div><div id='"+file.id+"-throbber' class='rwmb-image-uploading-status'></div></li>");}
function addThrobber(file)
{$('#'+file.id+'-throbber').html("<img class='rwmb-loader' height='64' width='64' src='"+RWMB.url+"img/loader.gif'/>");}});