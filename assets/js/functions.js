




// INITIALIZE BOOTSTRAP

$('[data-toggle=tooltip]').tooltip();
$('[data-tooltip="tooltip"]').tooltip();
$('[data-toggle=popover]').popover();




// ALL DROPDONWS FUNCTION

$(".dropdown-hover").mouseenter(function() {
	$(this).addClass("open");
});

$(".dropdown-hover").mouseleave(function() {
	$(this).removeClass("open");
});





// ALERT VISIBILITY

$(function() {
	if ($('#alert-wrapper')[0]) {
		$('.heading').attr('style','margin-top:0;');
		$('.sub-navigation').attr('style','margin-top:0;');
	} else {
		$('.heading').attr('style','margin-top:40px;');
	}
});





// TABLE TOGGLE

$(document).ready(function() {
	$('.table-togglable tbody tr').click(function(){
		var aHref = $(this).find('a').attr('href');
		window.open(aHref, '_blank');
	});
});





// TABLE COLLAPSE

$(document).ready(function() {
	$('.table-header').click(function () {
		var $this = $(this);
		$(this).nextUntil('tr.table-header').fadeToggle(100).promise().done(function () {
			$this.find('span').text(function (_, value) {
					return value == '-' ? '+' : '-'
			});
		});
	});
});





// LANDING PAGE - Main Services (onLoad)

$(document).ready(function(){
	var docW = $(document).width();
	if (docW <= 991){
		$("#main-services").addClass("slide");
		$("#technical-support").addClass("active");
		$("#virus-and-threat-help").removeClass("active");
		$("#renewals-and-registration").removeClass("active");
	}

	$('.carousel').carousel({
		interval: 5000,
		pause:'hover'
	});

	$('.left.carousel-control').click(function() {
		$('#main-services').carousel('prev');
	});

	$('.right.carousel-control').click(function() {
		$('#main-services').carousel('next');
	});
});

// LANDING PAGE - Main Services (onResize)

$(window).resize(function(){
	var docW = $(document).width();
	if (docW <= 991) {
		$("#main-services").addClass("slide");
		$("#technical-support").addClass("active");
		$("#virus-and-threat-help").removeClass("active");
		$("#renewals-and-registration").removeClass("active");
	} else {
		$("#main-services").removeClass("slide");
		$("#technical-support").addClass("active");
		$("#virus-and-threat-help").addClass("active");
		$("#renewals-and-registration").addClass("active");
	}
});





//***** SHOW MORE & SHOW LESS *****//

//***** displaying base on attribute [data-display-item] *****//
$(".display-item").each(function() {
		secID = $(this).attr("id");
		secDisplay = $(this).attr("data-display-item");
		if (secID == "technical-advisories") {
				$("#" + secID + " ul li:lt(" + secDisplay + ")").show();
		} else {
				$("#" + secID + " ul li").attr("style", "display:none;");
				$("#" + secID + " ul li:lt(" + secDisplay + ")").attr("style", "display:inline-block;");
		}
});

//***** show more button *****//
$('.show-more').click(function() {
		parentID = $(this).closest(".display-item").attr("id");
		if (parentID == "technical-advisories") {
				$("#" + parentID + " ul li").show();
		} else {
				$("#" + parentID + " ul li").attr("style", "display:inline-block;");
		}
		$("#" + parentID + " .show-less").show();
		$(this).hide();
});

//***** show less button *****//
$('.show-less').click(function() {
		parentID = $(this).closest(".display-item").attr("id");
		parentDisplay = $(this).closest(".display-item").attr("data-display-item");
		$("#" + parentID + " ul li").hide();
		$("#" + parentID + " ul li:lt(" + parentDisplay + ")").show();
		$("#" + parentID + " .show-more").show();
		$(this).hide();
});





// PRODUCT PAGE - Popular Topics

$(document).ready(function() {

	$("#popular-topics select").change(function() {
		$(this).find("option:selected").each(function() {
			if ($(this).attr("value")==="Recommended") {
				$("#recommended").show();
				$("#most-helpful").hide();
				$("#most-viewed").hide();
			} else if ($(this).attr("value")==="Most Helpful") {
				$("#recommended").hide();
				$("#most-helpful").show();
				$("#most-viewed").hide();
			} else if ($(this).attr("value")==="Most Viewed") {
				$("#recommended").hide();
				$("#most-helpful").hide();
				$("#most-viewed").show();
			}
		});
	});

});





$("#false-positive").tooltip({
  html : true,
  placement: "top",
  title: "Customer consider it is a normal file but trend detected it as malware",
  trigger: "hover"
});

$("#false-negative").tooltip({
  html : true,
  placement: "top",
  title: "Trend didn't detected it or treat it as normal file but customer consider it as a malware.",
  trigger: "hover"
});

$("#low-severity").popover({
  html : true,
  placement: "right",
  title: "Low (Severity 4)",
  content: function() {
		return $("#low-severity-content").html();
  },
  trigger: "hover"
});

$("#medium-severity").popover({
  html : true,
  placement: "right",
  title: "Medium (Severity 3)",
  content: function() {
		return $("#medium-severity-content").html();
  },
  trigger: "hover"
});

$("#high-severity").popover({
  html : true,
  placement: "right",
  title: "High (Severity 2)",
  content: function() {
		return $("#high-severity-content").html();
  },
  trigger: "hover"
});

$("#critical-severity").popover({
  html : true,
  placement: "right",
  title: "Critical (Severity 1)",
  content: function() {
    return $("#critical-severity-content").html();
  },
  trigger: "hover"
});

$("#medium-priority").popover({
  html : true,
  placement: "right",
  title: "Medium Urgency",
  content: function() {
		return $("#medium-priority-content").html();
  },
  trigger: "hover"
});

$("#high-priority").popover({
  html : true,
  placement: "right",
  title: "High Urgency",
  content: function() {
		return $("#high-priority-content").html();
  },
  trigger: "hover"
});

$("#critical-priority").popover({
  html : true,
  placement: "right",
  title: "Critical Urgency",
  content: function() {
    return $("#critical-priority-content").html();
  },
  trigger: "hover"
});





// NEW CASE PAGE - Form Functionalities

$(document).ready(function() {

	$("#product-profile select").change(function() {

		$(this).find("option:selected").each(function() {
			if ($(this).attr("value")==="Deep Security") {
				$("#change-control").show();
				$("#change-control").removeClass("disabled");
			  $("#change-control input[type = 'radio']").prop("disabled", false);
			}
			else if ($(this).attr("value")!=="Deep Security") {
				$("#change-control").hide();
				$("#change-control").addClass("disabled");
			  $("#change-control input[type = 'radio']").prop("disabled", true);
			}
		});

		$(this).find("option:selected").each(function() {
			if ($(this).attr("value")==="TippingPoint") {
				$("#issue-type").slideUp(300);
				$("#product-issue-category").hide();
				$("#malware-issue-category").hide();
				$("#tipping-point-issue-category").show();
			}
			else if ($(this).attr("value")!=="TippingPoint") {
				$("#issue-type").slideDown(300);
				$("#product-issue-category").show();
				$("#malware-issue-category").hide();
				$("#tipping-point-issue-category").hide();
			}
		});

	});

	$('#issue-type input[type="radio"]').click(function() {
	  if ($(this).attr("value")==="Product Issue") {
			$("#product-issue-category").show();
			$("#product-issue-category option").prop('selected', function() {
	      return this.defaultSelected;
	    });
			$("#product-issue-description").show();
			$("#malware-issue-description").hide();
			$("#appliance-hardware-description").show();
			$("#malware-issue-category").hide();
			$("#change-control-category").hide();
			$("#virus-pattern-type").slideUp(350);
			$("#description").slideDown(350);
			$("#steps-taken").slideDown(350);
			$("#attachment").slideDown(350);
			$("#trend-box").show();
			$("#neuron").hide();
			$("#sub-category").slideUp();
			$("#virus-pattern-type").slideUp();
			$("#detection-name").slideUp();
			$("#url-reclassification").slideUp();
			$("#case-severity").slideDown(350);
			$("#case-urgency").slideUp(350);
			$("#description-product-issue").show();
			$("#description .form-conrol-jp").empty().append(">仕様の確認の場合、確認の背景を必ず明記してください。\n\n>障害問い合わせの場合、以下を明記してください。\n発生している問題：\nエラーメッセージ：\nいつから発生しているか、どんなタイミングで発生しているか：\n再現頻度と影響範囲：\n再現手順：\n現象回避と原因の特定でどちらを優先するか：\n※状況が把握できるようなスクリーンショットがある場合、添付してください。");
			$("#description-clean-failed").hide();
			$("#description-spam").hide();
			$("#description-url-reclassification").hide();
			$("#description-virus-false-alarm").hide();
			$("#cc-email").slideDown(350);
			$("#contact-method").slideDown(350);
	  }
		if ($(this).attr("value")==="Virus and Malware Issue") {
			$("#product-issue-category").hide();
			$("#malware-issue-category").show();
			$("#malware-issue-category option").prop('selected', function() {
	      return this.defaultSelected;
	    });
			$("#product-issue-description").hide();
			$("#malware-issue-description").show();
			$("#undetected-description").show();
			$("#virus-pattern-type").slideDown(350);
			$("#change-control-category").hide();
			$("#description").slideUp(350);
			$("#steps-taken").slideUp(350);
			$("#trend-box").hide();
			$("#neuron").show();
			$("#case-urgency").slideUp(350);
			$("#case-severity").slideUp(350);
			$("#description-product-issue").hide();
			$("#description textarea").empty();
			$("#cc-email").slideUp(350);
			$("#contact-method").slideUp(350);
	  }
		if ($(this).attr("value")==="Change Control") {
			$("#product-issue-category").hide();
			$("#malware-issue-category").hide();
			$("#change-control-category").show();
			$("#steps-taken").slideUp(350);
			$("#trend-box").show();
			$("#neuron").hide();
			$("#case-severity").slideUp(350);
			$("#case-urgency").slideUp(350);
	  }
	});

	$("#issue-category select").change(function() {

		$(this).find("option:selected").each(function() {

			if ($(this).attr("value")==="Appliance Hardware") {
				$("#appliance-hardware-description").show();
			} else if($(this).attr("value")!=="Appliance Hardware") {
				$("#appliance-hardware-description").hide();
			}

			if ($(this).attr("value")==="Uninstall") {
				$("#uninstall-description").show();
			} else if($(this).attr("value")!=="Uninstall") {
				$("#uninstall-description").hide();
			}

			if ($(this).attr("value")==="Installation") {
				$("#installation-description").show();
			} else if($(this).attr("value")!=="Installation") {
				$("#installation-description").hide();
			}

			if ($(this).attr("value")==="Product Inquiry") {
				$("#product-inquiry-description").show();
			} else if($(this).attr("value")!=="Product Inquiry") {
				$("#product-inquiry-description").hide();
			}

			if ($(this).attr("value")==="Performance") {
				$("#performance-description").show();
			} else if($(this).attr("value")!=="Performance") {
				$("#performance-description").hide();
			}

			if ($(this).attr("value")==="Configuration") {
				$("#configuration-description").show();
			} else if($(this).attr("value")!=="Configuration") {
				$("#configuration-description").hide();
			}

			if ($(this).attr("value")==="Update or Rollback") {
				$("#update-rollback-description").show();
			} else if($(this).attr("value")!=="Update or Rollback") {
				$("#update-rollback-description").hide();
			}

			if ($(this).attr("value")==="UI or Document") {
				$("#user-interface-document-description").show();
			} else if($(this).attr("value")!=="UI or Document") {
				$("#user-interface-document-description").hide();
			}

			if ($(this).attr("value")==="System Crash") {
				$("#system-crash-description").show();
			} else if($(this).attr("value")||"System Crash") {
				$("#system-crash-description").hide();
			}





			if ($(this).attr("value")==="Account Administration") {
				$("#account-administration-description").show();
			} else if($(this).attr("value")!=="Account Administration") {
				$("#account-administration-description").hide();
			}

			if ($(this).attr("value")==="Licensing and Activation") {
				$("#licensing-activation-description").show();
			} else if($(this).attr("value")!=="Licensing and Activation") {
				$("#licensing-activation-description").hide();
			}





			if ($(this).attr("value")==="Undetected") {
				$("#undetected-description").show();
				$("#undetected-attachment").show();
				$("#cc-email").slideUp(350);
				$("#contact-method").slideUp(350);
			} else if($(this).attr("value")!=="Undetected") {
				$("#undetected-description").hide();
				$("#undetected-attachment").hide();
				$("#cc-email").slideDown(350);
				$("#contact-method").slideDown(350);
			}

			if ($(this).attr("value")==="Infected") {
				$("#infected-description").show();
				$("#infected-attachment").show();
				$("#neuron-upload-btn").hide();
			} else if($(this).attr("value")!=="Infected") {
				$("#infected-description").hide();
				$("#infected-attachment").hide();
				$("#neuron-upload-btn").show();
			}

			if ($(this).attr("value")==="File False Positive") {
				$("#file-false-positive-description").show();
				$("#detection-name").slideDown(350);
				$("#file-false-positive-attachment").show();
			} else if($(this).attr("value")!=="File False Positive") {
				$("#file-false-positive-description").hide();
				$("#detection-name").slideUp(350);
				$("#file-false-positive-attachment").hide();
			}

			if ($(this).attr("value")==="Spam") {
				$("#spam-description").show();
			} else if($(this).attr("value")!=="Spam") {
				$("#spam-description").hide();
			}

			if ($(this).attr("value")==="Spam False Positive") {
				$("#spam-false-positive-description").show();
			} else if($(this).attr("value")!=="Spam False Positive") {
				$("#spam-false-positive-description").hide();
			}

			if ($(this).attr("value")==="Spam" || $(this).attr("value")==="Spam False Positive") {
				$("#description-spam").show();
				$("#spam-attachment").show();
			} else if($(this).attr("value")!=="Spam" || $(this).attr("value")!=="Spam False Positive") {
				$("#description-spam").hide();
				$("#spam-attachment").hide();
			}

			if ($(this).attr("value")==="URL Reclassification") {
				$("#url-reclassification-description").show();
				$("#subject").slideUp(350);
			  $("#url-reclassification").slideDown(350);
				$("#attachment").slideUp(350);
				$("#description-url-reclassification").show();
			} else if($(this).attr("value")!=="URL Reclassification") {
				$("#url-reclassification-description").hide();
				$("#subject").slideDown(350);
			  $("#url-reclassification").slideUp(350);
				$("#attachment").slideDown(350);
				$("#description-url-reclassification").hide();
			}

			if ($(this).attr("value")==="Undetected" || $(this).attr("value")==="Infected" || $(this).attr("value")==="File False Positive") {
				$("#virus-pattern-type").slideDown(350);
			} else if($(this).attr("value")!=="Undetected" || $(this).attr("value")!=="Infected" || $(this).attr("value")!=="File False Positive") {
				$("#virus-pattern-type").slideUp(350);
			}

			if ($(this).attr("value")==="Undetected" || $(this).attr("value")==="URL Reclassification") {
				$("#description").slideUp(350);
			} else if($(this).attr("value")!=="Undetected" || $(this).attr("value")!=="URL Reclassification") {
				$("#description").slideDown(350);
			}





			if(
				$(this).attr("value")==="Appliance Hardware" ||
				$(this).attr("value")==="Uninstall" ||
				$(this).attr("value")==="Installation" ||
				$(this).attr("value")==="Product Inquiry" ||
				$(this).attr("value")==="Performance" ||
				$(this).attr("value")==="Configuration" ||
				$(this).attr("value")==="Update or Rollback" ||
				$(this).attr("value")==="UI or Document" ||
				$(this).attr("value")==="System Crash")
			{
				$("#case-severity").show();
				$("#case-urgency").hide();
			} else if(
				$(this).attr("value")==="Account Administration" ||
				$(this).attr("value")==="Licensing and Activation" ||
				$(this).attr("value")==="Infected" ||
				$(this).attr("value")==="File False Positive" ||
				$(this).attr("value")==="URL Reclassification" ||
				$(this).attr("value")==="Spam" ||
				$(this).attr("value")==="Spam False Positive")
			{
				$("#case-severity").hide();
				$("#case-urgency").show();
			} else if ($(this).attr("value")==="Undetected") {
				$("#case-severity").hide();
				$("#case-urgency").hide();
			}

		});

	});

	$("#subject").keyup(function() {
    var subVal = $(this).val();
		$("#subject-loading").show();
		setTimeout(function(){
			if(subVal === ""){
				$("#suggested-articles").slideDown(350);
				$("#subject-loading").hide();
			}
			else {
				$("#suggested-articles").hide();
			}
		}, 1000);

		$("#suggested-articles .close").on('click', function () {
			$("#suggested-articles").hide();
		});

	});

	$('#attachment-type input[type="radio"]').click(function() {
		if ($(this).attr("value")==="Virus and Email File") {
			$("#virus-and-email-file-description").show();
			$("#support-file-description").hide();
			$("#url-text-file-description").hide();
			$("#email-file-description").hide();
	  }
		if ($(this).attr("value")==="Supporting File") {
			$("#virus-and-email-file-description").hide();
			$("#support-file-description").show();
			$("#url-text-file-description").hide();
			$("#email-file-description").hide();
	  }
		if ($(this).attr("value")==="URL Text File") {
			$("#virus-and-email-file-description").hide();
			$("#support-file-description").hide();
			$("#url-text-file-description").show();
			$("#email-file-description").hide();
	  }
		if ($(this).attr("value")==="Email File") {
			$("#virus-and-email-file-description").hide();
			$("#support-file-description").hide();
			$("#url-text-file-description").hide();
			$("#email-file-description").show();
	  }
	});

	$('#url-reclassification input[type="radio"]').click(function() {
		if($(this).attr("value")==="Upload URL") {
			$("#upload-url").slideDown(350);
			$("#enter-url").slideUp(350);
		}
		else if($(this).attr("value")==="Enter URL"){
			$("#upload-url").slideUp(350);
			$("#enter-url").slideDown(350);
		}
  });

	$('#trigger-url-upload').click(function(){
	    $('#url-upload').click();
	    return false;
	});

	var bar = document.getElementById("attachment-progress");

	$("#trend-box-upload").click(doProgress);

	function addProgress() {
	  $({interpVal: bar.value}).animate({interpVal: bar.value + 40}, {duration: 200, step: function () {bar.value = this.interpVal;}});
	  if (bar.value < bar.max) {
	    setTimeout(addProgress, 750);
	  }
		else if (bar.value == bar.max) {
			$("#attachment-list").slideDown(350);
			$("#attachment-progress").hide();
		}
	}

	function doProgress() {
	  setTimeout(addProgress, 500);
		$("#attachment-progress").show();
	}

  $('#case-urgency input[type="radio"], #case-severity input[type="radio"]').click(function() {
		if($(this).attr("value")==="Low Priority" || $(this).attr("value")==="Medium Priority" || $(this).attr("value")==="Low Severity" || $(this).attr("value")==="Medium Severity") {
			$("#business-impact").slideUp(350);
		}
		else if($(this).attr("value")==="High Priority" || $(this).attr("value")==="Critical Priority" || $(this).attr("value")==="High Severity" || $(this).attr("value")==="Critical Severity") {
      $("#business-impact").slideDown(350);
		}
		if($(this).attr("value")==="Critical Severity") {
			$("#critical-business-impact").slideDown(350);
		}
		else if($(this).attr("value")!=="Critical Severity") {
			$("#critical-business-impact").slideUp(350);
		}
  });





	// <option value="Appliance Hardware" selected>Appliance Hardware</option>
	// <option value="Uninstall">Uninstall</option>
	// <option value="Installation">Installation</option>
	// <option value="Product Inquiry">Other Product Related Questions</option>
	// <option value="Performance">Performance</option>
	// <option value="Configuration">Configuration</option>
	// <option value="Update or Rollback">Update or Rollback</option>
	// <option value="UI or Document">User Interface Defects or Documentation Questions</option>
	// <option value="System Crash">System Crash</option>














  $('#contact-method input[type="radio"]').click(function() {
		if($(this).attr("value")==="Email") {
			$("#contact-call").slideUp(350);
		}
		else if($(this).attr("value")==="Call"){
			$("#contact-call").slideDown(350);
		}
  });

  $("#product-profile").change(function() {
    var ppVal = $(this).val();
    if(ppVal === "") {
      $("#operating-system").attr("disabled","disabled");
    } else {
      $("#operating-system").removeAttr("disabled");
    }
  });

});





// URL Upload

var openFile = function(event) {
	var input = event.target;

	var reader = new FileReader();
	reader.onload = function(){
		var text = reader.result;
		var url_ctr = text.split("\n").length;
		if(url_ctr <= 20)
		{
			var node = document.getElementById('txtArea');
			node.innerText = text;
		}
		else
		{
			$("#url-upload").val("");
			alert("Ooops! Up to 20 URLs only! Charr");//show some alert dialog here
		}

	};
	reader.readAsText(input.files[0]);
};





// TABLE TD CHECKBOX CHECK

$(document).ready(function() {
	$('.table-togglecheckbox tbody tr').click(function(event){
		 if (event.target.type !== 'checkbox') {
     		 $(':checkbox', this).trigger('click');
    	}
	});
});

var toggleCheckBox = (function() {
  var $el = $('.table-togglecheckbox');
  var $selectAll = $el.find("[data-select='selectall']");
  var $checkboxCheck = $el.find("[data-toggle='checkbox']");
  var status = '';
  $selectAll.on('click', checkAll);
  $checkboxCheck.on('change', toggleCheck);

  function checkAll(event) {
    status = this.checked;
    $checkboxCheck.each(function() {
      this.checked = status;
      if ($(this).is(":checked")) {
				$(this).closest('tr').addClass("active");
      } else {
				$(this).closest('tr').removeAttr("class");
      }
    });
  }

  function toggleCheck(event) {
    if (this.checked == false) {
      $selectAll.removeAttr("checked")
    }
    if ($("[type='checkbox']:checked").length == $checkboxCheck.length) {
      $selectAll.prop("checked", true);
    }
    if ($(this).is(":checked")) {
			$(this).closest('tr').addClass("active");
    } else {
			$(this).closest('tr').removeAttr("class");
    }
  }

  return {
    checkAll: checkAll,
    toggleCheck: toggleCheck
  }
})();





// CASE UPDATE FORM

$("#add-update-btn").click(function() {
		$("#add-update-btn").hide();
    $("#add-update-form").show();
    $("#add-update-form textarea").focus();
});

$("#add-update-close").click(function() {
    $("#add-update-btn").show();
    $("#add-update-form").hide();
});





// SLIDER TOGGLE FUNCTION

$(window).load(function() {
    var slider_width = $("#global-slider").width(); //get width automaticly
    $("#global-slider").animate({ "right": "-" + slider_width });
});

$(document).ready(function() {
    var slider_width = $("#global-slider").width(); //get width automaticly
    $("#mobile-slider").click(function() {
        $("#global-slider").animate({ "margin-right": slider_width });
        $(".slider-overlay").fadeIn(350);
        $("#global-slider").show();
        // $('body').attr('style','overflow: hidden; position: fixed; width: 100%;');
    });
    $("#close-slider, .slider-overlay").click(function() {
        $("#global-slider").animate({ "margin-right": "0" });
        $("#global-slider").animate({ "right": "-" + slider_width });
        $(".slider-overlay").fadeOut(350);
        // $('body').removeAttr('style','overflow: hidden; position: fixed; width: 100%;');
    });
});







// SLIDER TOGGLE FUNCTION

$(window).load(function() {
    var slider_width = $("#filter-results").width(); //get width automaticly
    $("#filter-results").animate({ "left": "-" + slider_width });
});

$(document).ready(function() {
    var slider_width = $("#filter-results").width(); //get width automaticly
    $("#filter-results-btn").click(function() {
        $("#filter-results").animate({ "margin-left": slider_width });
        $("#filter-results").show();
        // $('body').attr('style','overflow: hidden; position: fixed; width: 100%;');
    });
    $("#filter-results").click(function() {
        $("#filter-results").animate({ "margin-left": "0" });
        $("#filter-results").animate({ "left": "-" + slider_width });
        // $('body').removeAttr('style','overflow: hidden; position: fixed; width: 100%;');
    });
});











$(".floating-botton-tab, #floating-botton .close").click(function() { 
  $("#floating-botton").toggleClass("show-wrapper");
});








// MY PROFILE - VIEW & EDIT FUNCTION

$(document).ready(function(){

	// for change photo button
	$(".edit-photo a").click(function() {
		$("#inputChangePhoto").click();
	});

	// edit button
	$(".edit-btn").click(function() {
		$(this).hide();
		var pID = $(this).closest(".section, .well").attr("id");
		//alert(pID);
		if(pID == "personal-information") {
			$(".edit-photo-btn").show();
			$("#" + pID + " .edit-mode").attr("style" , "display: table-cell");
		} else if (pID == "notification") {
			$(".list-group-item input[type=checkbox]").show();
		}
		$("#" + pID + " .close-btn").show();
		$("#" + pID + " .view-mode").hide();
		$("#" + pID + " .edit-mode").show();
	});

	// cancel button
	$(".close-btn").click(function() {
		var pID = $(this).closest(".section, .well").attr("id");
		//alert(pID);
		if(pID == "personal-information") {
			$(".edit-photo-btn").hide();
		}else if(pID == "notification") {
			$(".list-group-item label.temp").removeClass("checked temp");
			$(".list-group-item input[type=checkbox]").hide();
		}
		$("#" + pID + " .edit-btn").show();
		$("#" + pID + " .close-btn").hide();
		$("#" + pID + " .view-mode").show();
		$("#" + pID + " .edit-mode").hide();
	});

	$(".list-group-item input[type=checkbox]").click(function(){
		$(this).closest("label").addClass("checked temp");
	});
});
