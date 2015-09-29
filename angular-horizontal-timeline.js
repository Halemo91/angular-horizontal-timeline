/**
 * Timeline-angular-js
 *
 * halemo91
 * https://halemo91@bitbucket.org/halemo91/timeline-angular-js.git
 * Licensed under the MIT license
 */


//**************************************************************************************************
// Html Template for the combined directive
//**************************************************************************************************
 var template_Combined =
 '<div align="center" > '+
     '<button   class="btn btn-success " ng-click="zoomout()" ><span class="glyphicon glyphicon-zoom-out "></span> Year</button>   &nbsp; '+
     '<button  class="btn btn-success" ng-click="zoomin()" ><span  class="glyphicon glyphicon-zoom-in"></span> Month</button>  &nbsp;'+
      '  <button  class="btn btn-success" ng-click="today()" ><span class="glyphicon glyphicon-time"></span> Today</button>  &nbsp;'+
       '<button  class="btn btn-success" ng-click="defaultt()" ><span ></span> Default view</button>'+
'</div>'+
 '<br> '+
 '<div class="timeline">'+

 '<div class="timeline-left">'+
 '	<label>Start Date  {{startDate}}</label>'+
 '</div>'+

 '<div class="timeline-center">'+
 '<div class="progg">'+
 '	<span ng-style="{width:progg_percent+\'%\'}"></span>'+

 '	<ul class="timeline-events">'+

 '  <div ng-if="event.date >startDate && event.date < endDate" || event.date < startDate && event.date < endDate'+
 '  <section   class="timeline-event"   ng-repeat="event in events"'+
 '			ng-click="setSelected($index)"'+
 '			event-date="event.date"'+
 '			title="{{event.date}}"'+
 '			timeline-event-marker> <span  class="glyphicon glyphicon-tags"></span> '+
 '       	<div  ng-show="selectedEvent === $index" '+
'		       class="timeline-event" > '+
 '           <span  class="glyphicon glyphicon-chevron-down"></span> '+

 '       </div>'+
    '		</section>'+
 '	</section>'+
 '	</div>'+

 '	<div  ng-if="day.date >startDate && day.date < endDate" '+
 '		<section   class="timeline-event"   ng-repeat="day in currentday"'+
 '			title="{{day.date}}"'+
 '			timeline-event-marker> <span  class="glyphicon glyphicon-time"></span>'+
 '			</section>'+
 '	</div>'+

 '	</ul>'+

 '	<ul class="timeline-bg">'+
 '		<li class="timeline-month" ng-repeat="month in months"'+
 '			timeline-month><span title="{{month.date}}">{{month.name}}</span>'+
 '			<ul>'+

 '				<li class="timeline-day"  ng-repeat="day in month.days"'+

 '					ng-style="{ \'left\' : ($index * (95/month.days.length) )+\'%\'}">'+
 '					<span title="{{month.date + \'-\' + day}}"><i></i>{{day}}</span>'+

 '				</li>'+

 '			</ul></li>'+
 '	</ul>'+
 '</div>'+
 '</div>'+
 '<div class="timeline-right">'+
 '	<label>End Date {{endDate}}</label>'+
 '</div>'+
 '	<div align ="center">'+
'<button class="btn btn-success btn-lg" ng-click="left()" style="float:left;"><span class="glyphicon glyphicon-backward"></span> </button> '+
 '<button class="btn btn-success btn-lg" ng-click="right()" style="float:right;" ><span class="glyphicon glyphicon-forward"></span> </button> '+

 '</div>'+
 '<br> '+ '<br> '+ '<br> '+ '<br> '+
  '<br> '+ '<br> '+ '<br> '+ '<br> '+
  '<br> '+ '<br> '+ '<br> '+ '<br> '+
   '	<div  ng-hide = " selectedEvent <= 0"  >'+
  '<button  class="btn btn-primary btn-lg" ng-click="selectedEvent = selectedEvent-1 " style="float:left;"><span class="glyphicon glyphicon-chevron-left"></span> </button>  '+
  '</div>'+
 ' <div class="EventsSlider"> '+
  '<section ng-bind-html="events[selectedEvent].content" >  '+
  '</section> '+
 ' </div> '+
 '	<div  ng-hide = " selectedEvent >= events.length -1 "  >'+
'<button  class="btn btn-primary btn-lg"   ng-click="selectedEvent = selectedEvent+1 " style="float:right;"><span class="glyphicon glyphicon-chevron-right"></span> </button> ' +
  '</div>'
;


//**************************************************************************************************
// Html Template for only timeline directive
//**************************************************************************************************
//
 var template_timeline =
 '<div align="center" > '+
			'<button   class="btn btn-success " ng-click="zoomout()" ><span class="glyphicon glyphicon-zoom-out "></span> Year</button>   &nbsp; '+
			'<button  class="btn btn-success" ng-click="zoomin()" ><span  class="glyphicon glyphicon-zoom-in"></span> Month</button>  &nbsp;'+
      '  <button  class="btn btn-success" ng-click="today()" ><span class="glyphicon glyphicon-time"></span> Today</button>  &nbsp;'+
 			'<button  class="btn btn-success" ng-click="defaultt()" ><span ></span> Default view</button>'+
'</div>'+
 '<br> '+

 '<div class="timeline">'+

 '<div class="timeline-left">'+
 '	<label>Start Date  {{startDate}}</label>'+

 '</div>'+

 '<div class="timeline-center">'+
 '<div class="progg">'+
 '	<span ng-style="{width:progg_percent+\'%\'}"></span>'+

 '	<ul class="timeline-events">'+

'  <div ng-if="event.date >= startDate && event.date <= endDate" || event.date <= startDate && event.date <= endDate'+
 '  <section   class="timeline-event"   ng-repeat="event in events"'+
 '			ng-click="setSelected($index)"'+
 '			event-date="event.date"'+
 '			title="{{event.date}}"'+
 '			timeline-event-marker> <span  class="glyphicon glyphicon-tags"></span> '+

'       	<div  ng-show="selectedEvent === $index" '+
'		       class="timeline-event" > '+
'			     <span  class="glyphicon glyphicon-chevron-down"></span> '+

'       </div>'+
 '	</section>'+
 '	</div>'+

 '			<div  ng-if="day.date >startDate && day.date < endDate" '+
 '		<section   class="timeline-event"   ng-repeat="day in currentday"'+
 '			title="{{day.date}}"'+
 '			timeline-event-marker> <span  class="glyphicon glyphicon-time"></span>'+
 '			</section>'+
 '			</div>'+

 '	</ul>'+

 '	<ul class="timeline-bg">'+
 '		<li class="timeline-month" ng-repeat="month in months"'+
 '			timeline-month><span title="{{month.date}}">{{month.name}}</span>'+
 '			<ul>'+

 '				<li class="timeline-day"  ng-repeat="day in month.days"'+

 '					ng-style="{ \'left\' : ($index * (95/month.days.length) )+\'%\'}">'+
 '					<span title="{{month.date + \'-\' + day}}"><i></i>{{day}}</span>'+

 '				</li>'+

 '			</ul></li>'+
 '	</ul>'+
 '</div>'+
 '</div>'+

 '<div class="timeline-right">'+
 '	<label>End Date {{endDate}}</label>'+
 '</div>'+

 '	<div align ="center">'+
 '<button class="btn btn-success btn-lg" ng-click="left()" style="float:left;"><span class="glyphicon glyphicon-backward"></span> </button> '+
 '<button class="btn btn-success btn-lg" ng-click="right()" style="float:right;" ><span class="glyphicon glyphicon-forward"></span> </button> '+
 '</div>';


 //**************************************************************************************************
 // Html Template for only slider directive
 //**************************************************************************************************
 var Template_slider =
 '<button  class="btn btn-primary btn-lg" ng-click="selectedEvent = selectedEvent-1 " style="float:left;"><span class="glyphicon glyphicon-chevron-left"></span> </button> &nbsp;  '+
 ' <div class="EventsSlider2"> '+
 '<section ng-bind-html="events[selectedEvent].content" >  '+
 '</section> '+
 ' </div> '+
 '<button  class="btn btn-primary btn-lg"   ng-click="selectedEvent = selectedEvent+1 " style="float:right;"><span class="glyphicon glyphicon-chevron-right"></span> </button> ' ;




angular.module('angular-horizontal-timeline', ['ngSanitize'])
   //**************************************************************************************************
   // First directive for combined timeline
   //**************************************************************************************************

.directive('combinedTimeline', function(){
	function controller($scope){

    $scope.setSelected = function(index){
      $scope.selectedEvent = index;
    }

    $scope.$watch('selectedEvent', function(newValue){
      console.log(newValue);
    });


		$scope.selectedEvent = 1;
		$scope.months= [];


		$scope.getPosition = function(date){

			date = moment(date);

			var diff = date.diff(moment($scope.startDate), 'months');
			var curWeekWidth = 100/$scope.months[diff].days.length;
			var monthsWidth = 100/$scope.months.length;
			var ixOfWeek = Math.ceil(date.format('D')/7) - 1;
			var curDOfMPercent = (date.format('D') - $scope.months[diff].days[ixOfWeek] ) * 14.28;

			return ( (monthsWidth * diff) + (((ixOfWeek * curWeekWidth) + (curDOfMPercent/ 100 * curWeekWidth)) / 100 * monthsWidth) );
		};

		$scope.init = function(){
		$scope.months = [];
		var range  = moment().range(moment($scope.startDate), moment($scope.endDate));
		range.by('months', function(month) {
			$scope.months.push({
				'date':month.format('YYYY-MM'),
				'name':month.format('MMM'),
       'new':moment(),
				'days':[]});

			var dayrange = moment().range(month.startOf('month').format('YYYY-MM-DD'), month.endOf('month').format('YYYY-MM-DD'));
			dayrange.by('weeks', function(week) {
				$scope.months[$scope.months.length - 1].days.push(week.format('DD'));
			});
		});

		}
		$scope.$watch('startDate', $scope.init);
$scope.startDate =  moment().startOf('year').add(3, 'months').format('YYYY-MM-DD');
$scope.endDate   = moment().add(4, 'months').format('YYYY-MM-DD');
$scope.events = [ {'date':moment().startOf('month').subtract(9, 'months').format('YYYY-MM-DD'), 'title' : 'First Project'  , 'content':'<p> The first project </p>' },
						{'date':moment().subtract(3, 'months').format('YYYY-MM-DD'), 'title' : 'Presentation'  , 'content':'<p> The presentation day </p>' },
					    {'date':moment().subtract(6, 'days').format('YYYY-MM-DD'), 'title' : 'Main Website for our company'  , 'content':'<a href="example.html">Daz Service </a>' } ,
                {'date': moment().add(6, 'months').format('YYYY-MM-DD'), 'title' : 'Grilling'  ,'content':'<img src="11872639_10207550314979265_381080861_n.jpg" alt="Mountain View" height="250" width="355">'} ];
    $scope.$watch('selectedEvent', function(newVal)
                  {
		              	console.log($scope.events[newVal].content);
                   	this.mydate = $scope.events[newVal].date;

                    	                if (this.mydate > $scope.endDate || this.mydate <  $scope.startDate  )  {
                                                              //  $scope.startDate = moment(this.mydate).startOf('month').format('YYYY-MM-DD'); //for scrolling while zooming to month
                     									                       //    $scope.endDate = moment(this.mydate).endOf('month').format('YYYY-MM-DD');};
                                                             $scope.startDate = moment(this.mydate).subtract(5, 'months').format('YYYY-MM-DD'); // for scrooling between years but give error when only zoom to month
                                                               $scope.endDate = moment(this.mydate).add(2, 'months').format('YYYY-MM-DD');};

		});

	}

	return {
		restrict: 'AEC',
		controller: controller,
		scope: {
			startDate: '@',
			endDate: '@',
			events: '=' ,
      zoomout: '&',
      zoomin: '&',
      today: '&',
      defaultt: '&',
      left:'&',
      right:'&',
      currentday: '=' ,
      selectedEvent: '='
		},
		template:template_Combined
	};
})

//**************************************************************************************************
// Second directive for timeline
//**************************************************************************************************
.directive('horizontalTimeline', function(){

	function controller($scope){

    $scope.setSelected = function(index){
      $scope.selectedEvent = index;
    }
		$scope.months= [];
		$scope.getPosition = function(date){

			date = moment(date);

			var diff = date.diff(moment($scope.startDate), 'months');
			var curWeekWidth = 100/$scope.months[diff].days.length;
			var monthsWidth = 100/$scope.months.length;
			var ixOfWeek = Math.ceil(date.format('D')/7) - 1;
			var curDOfMPercent = (date.format('D') - $scope.months[diff].days[ixOfWeek] ) * 14.28;

			return ( (monthsWidth * diff) + (((ixOfWeek * curWeekWidth) + (curDOfMPercent/ 100 * curWeekWidth)) / 100 * monthsWidth) );
		};

		$scope.init = function(){
		$scope.months = [];
		var range  = moment().range(moment($scope.startDate), moment($scope.endDate));
		range.by('months', function(month) {
			$scope.months.push({
				'date':month.format('YYYY-MM'),
				'name':month.format('MMM'),
       'new':moment(),
				'days':[]});

			var dayrange = moment().range(month.startOf('month').format('YYYY-MM-DD'), month.endOf('month').format('YYYY-MM-DD'));
			dayrange.by('weeks', function(week) {
				$scope.months[$scope.months.length - 1].days.push(week.format('DD'));
			});
		});

		}
		$scope.$watch('startDate', $scope.init);

		$scope.$watch('selectedEvent', function(newVal)
                  {
			console.log($scope.events[newVal].content);
                   	this.mydate = $scope.events[newVal].date;

	                if (this.mydate > $scope.endDate || this.mydate <  $scope.startDate  )  {
                    //  $scope.startDate = moment(this.mydate).startOf('month').format('YYYY-MM-DD'); //for scrolling while zooming to month
                   //    $scope.endDate = moment(this.mydate).endOf('month').format('YYYY-MM-DD');};
                   $scope.startDate = moment(this.mydate).subtract(5, 'months').format('YYYY-MM-DD'); // for scrooling between years but give error when only zoom to month
                     $scope.endDate = moment(this.mydate).add(2, 'months').format('YYYY-MM-DD');};
		});

	}

	return {
		restrict: 'AEC',
		controller: controller,
		scope: {
			startDate: '@',
			endDate: '@',
			events: '=' ,
      zoomout: '&',
			zoomin: '&',
     	today: '&',
			defaultt: '&',
      left:'&',
      right:'&',
      currentday: '=' ,
      selectedEvent: '='
		},
		template:template_timeline
	};
})

//**************************************************************************************************
// Third directive for slider
//**************************************************************************************************
.directive('slider', function() {
  	function controller($scope){
  $scope.setSelected = function(index){
    $scope.selectedEvent = index;
  }

  $scope.$watch('selectedEvent', function(newValue){
    console.log(newValue);
  });


  $scope.selectedEvent = 1;
}
return {
		restrict: 'E',
		scope: {
			startDate: '@',
			endDate: '@',
			events: '=',
      selectedEvent : '='

		},
		template : Template_slider

	};
})



.directive('timelineMonth', function() {
	function link(scope, element, attr) {
		var monthWidth = 100/scope.months.length;
		element.css({'width': monthWidth+'%'});
	}
	return {
		restrict: 'A',
		link : link
	};
})

.directive('timelineEventMarker', function() {
	function link(scope, element, attr) {
		var eventDate = scope.$eval(attr.eventDate);
		var pos = scope.getPosition(eventDate);
		element.css({'left': pos+'%'});

console.log(pos);
		scope.$watch(function(){return scope.getPosition(eventDate)}, function(pos){
			element.css({'left': pos+'%'});
		});

	}
	return {
		restrict: 'A',
		link : link,
		scope: false
	};


});


//**************************************************************************************************
// The outscope controller
//**************************************************************************************************
var demoApp = angular.module('demoApp', ['angular-horizontal-timeline']);

demoApp.controller('demoCtrl', function ($scope,$http) {


$scope.dates = new Date();
$scope.startDate =  moment().startOf('year').add(3, 'months').format('YYYY-MM-DD');
$scope.endDate   = moment().add(4, 'months').format('YYYY-MM-DD');
$scope.events = [ {'date':moment().startOf('month').subtract(9, 'months').format('YYYY-MM-DD'), 'title' : 'First Project'  , 'content':'<p> The first project </p>' },
						{'date':moment().subtract(3, 'months').format('YYYY-MM-DD'), 'title' : 'Presentation'  , 'content':'<p> The presentation day </p>' },
					    {'date':moment().subtract(6, 'days').format('YYYY-MM-DD'), 'title' : 'Main Website for our company'  , 'content':'<a href="example.html">Daz Service </a>' } ,
                {'date': moment().add(6, 'months').format('YYYY-MM-DD'), 'title' : 'Grilling'  ,'content':'<img src="11872639_10207550314979265_381080861_n.jpg" alt="Mountain View" height="250" width="355">'} ];
$scope.mydate = "";
$scope.currentday = [] ;
$scope.selectedEvent = 1;
$scope.selected = 1;
$scope.setSelected = function(val){
  $scope.selected = val;
}
$scope.today = function()
 {
      $scope.currentday.push({'date': moment().add(0, 'days').format('YYYY-MM-DD')});
 }
$scope.defaultt = function()
  {

$scope.startDate =  moment().startOf('year').add(3, 'months').format('YYYY-MM-DD');
$scope.endDate   = moment().add(4, 'months').format('YYYY-MM-DD');
  }
$scope.zoomin = function()
  {
    $scope.startDate = moment(  $scope.events[$scope.selected].date ).startOf('month').format('YYYY-MM-DD');
    $scope.endDate= moment(  $scope.events[$scope.selected].date ).endOf('month').format('YYYY-MM-DD');
  }

$scope.zoomout = function()
  {
    $scope.startDate = moment( $scope.events[$scope.selectedEvent].date ).startOf('year').format('YYYY-MM-DD');
    $scope.endDate= moment( $scope.events[$scope.selectedEvent].date ).endOf('year').format('YYYY-MM-DD');
  }

 $scope.left = function()
 {
    $scope.startDate = moment($scope.startDate).subtract(2, 'months').format('YYYY-MM-DD');
    $scope.endDate = moment($scope.endDate).subtract(2, 'months').format('YYYY-MM-DD');
  }

 $scope.right = function()
  {
   $scope.startDate = moment($scope.startDate).add(1, 'months').format('YYYY-MM-DD');
   $scope.endDate = moment($scope.endDate).add(1, 'months').format('YYYY-MM-DD');
  }




});
