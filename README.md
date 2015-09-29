# angular-horizontal-timeline
Simple horizontal timeline directive for AngularJS

# Install
You can download all necessary angular-horizontal-timeline files manually or install it with bower:

```
$ bower install --save angular-timeline-ibra
```

# Load
To use the directive, include the angular-horizontal-timeline's javascript and css files in your web page:

```
<script src="angular-horizontal-timeline.js"></script>
<link rel="stylesheet" href="angular-horizontal-timeline.css">
```

# Add module dependency
```
angular.module('app', ['angular-horizontal-timeline']);
```

# Usage
```
<combined-timeline selected-event="selected"
			start-date="{{startDate}}"
			end-date="{{endDate}}"
			events="events" zoomout="zoomout()" zoomin="zoomin()" today="today()" defaultt ="defaultt()" left ="left()" right="right()"  currentday="currentday" mytitle="mytitle"  mycontent="mycontent"  >

</combined-timeline> 
```
