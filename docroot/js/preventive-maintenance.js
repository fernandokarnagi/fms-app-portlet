YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Event1',
        endDate: new Date(2016, 0, 20, 14),
        startDate: new Date(2016, 0, 20, 8)
      }
    ];

    var eventRecorder = new Y.SchedulerEventRecorder();
    var weekView = new Y.SchedulerWeekView();
    var monthView = new Y.SchedulerMonthView();

    new Y.Scheduler(
      {
        boundingBox: '#myScheduler',
        date: new Date(2016, 0, 11),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [monthView, weekView]
      }
    );	
  }
);