jQuery(document).ready(function($)
{$(':input.rwmb-datetime').each(rwmb_update_datetime_picker);$('.rwmb-input').on('clone',':input.rwmb-datetime',rwmb_update_datetime_picker);function rwmb_update_datetime_picker()
{var $this=$(this),options=$this.data('options');$this.siblings('.ui-datepicker-append').remove();$this.removeClass('hasDatepicker').attr('id','').datetimepicker(options);}});