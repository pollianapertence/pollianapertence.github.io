jQuery(document).ready(function($)
{$(':input.rwmb-time').each(rwmb_update_time_picker);$('.rwmb-input').on('clone',':input.rwmb-time',rwmb_update_time_picker);function rwmb_update_time_picker()
{var $this=$(this),options=$this.data('options');$this.siblings('.ui-datepicker-append').remove();$this.removeClass('hasDatepicker').attr('id','').timepicker(options);}});