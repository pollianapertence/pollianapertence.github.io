var Milestone=function(e){var n=function(n){var i=e("#"+n.id),t=n.id,o=1e3*n.refresh;this.timer=function(){var n=this;e.ajax({url:MilestoneConfig.api_root+"jetpack/v4/widgets/"+t,success:function(e){i.find(".milestone-countdown").replaceWith(e.message),(o=1e3*e.refresh)&&setTimeout(function(){n.timer()},o)}})},o>0&&this.timer()};return function(e){return new n(e)}}(jQuery);!function(){var e,n={};if("undefined"!=typeof MilestoneConfig)for(e=0;e<MilestoneConfig.instances.length;e++)n[e]=new Milestone(MilestoneConfig.instances[e])}();