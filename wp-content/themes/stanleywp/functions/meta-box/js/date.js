jQuery(document).ready(function($)
{$(':input.rwmb-date').each(rwmb_update_date_picker);$('.rwmb-input').on('clone',':input.rwmb-date',rwmb_update_date_picker);function rwmb_update_date_picker()
{var $this=$(this),options=$this.data('options');$this.siblings('.ui-datepicker-append').remove();$this.removeClass('hasDatepicker').attr('id','').datepicker(options);}});