<template lang="pug">
.main_calendar
  #calendar-wrap
    #calendar
      ul.weekdays
        li Monday
        li Tuesday
        li Wednesday
        li Thursday
        li Friday
        li Saturday
        li Sunday
      // Days from previous month
      ul.days(v-for="item in tasks" ::key="item.id")
        li.day.other-month
          .date {{ item.data }}
      ul.days
        li.day.other-month
          .date 27
        li.day.other-month
          .date 28
          .event
            .event-desc HTML 5 lecture with Brad Traversy from Eduonix
            .event-time 1:00pm to 3:00pm
        li.day.other-month
          .date 29
        li.day.other-month
          .date 30
        li.day.other-month
          .date 31
        // Days in current month
        li.day
          .date 1
        li.day
          .date 2
          .event
            .event-desc Career development @ Community College room #402
            .event-time 2:00pm to 5:00pm
      // Row #2
      ul.days
        li.day
          .date 3
        li.day
          .date 4
        li.day
          .date 5
        li.day
          .date 6
        li.day
          .date 7
          .event
            .event-desc Group Project meetup
            .event-time 6:00pm to 8:30pm
        li.day
          .date 8
        li.day
          .date 9
      // Row #3
      ul.days
        li.day
          .date 10
        li.day
          .date 11
        li.day
          .date 12
        li.day
          .date 13
        li.day
          .date 14
          .event
            .event-desc Board Meeting
            .event-time 1:00pm to 3:00pm
        li.day
          .date 15
        li.day
          .date 16
      // Row #4
      ul.days
        li.day
          .date 17
        li.day
          .date 18
        li.day
          .date 19
        li.day
          .date 20
        li.day
          .date 21
        li.day
          .date 22
          .event
            .event-desc Conference call
            .event-time 9:00am to 12:00pm
        li.day
          .date 23
      // Row #5
      ul.days
        li.day
          .date 24
        li.day
          .date 25
          .event
            .event-desc Conference Call
            .event-time 1:00pm to 3:00pm
        li.day
          .date 26
        li.day
          .date 27
        li.day
          .date 28
        li.day
          .date 29
        li.day
          .date 30
      // Row #6
      ul.days
        li.day
          .date 31
        li.day.other-month
          .date 1
          // Next Month
        li.day.other-month
          .date 2
        li.day.other-month
          .date 3
        li.day.other-month
          .date 4
        li.day.other-month
          .date 5
        li.day.other-month
          .date 6
    // /. calendar
</template>
<script lang="ts">
import ComingSoon from '@/components/ComingSoon.vue';
export default {
  name: 'Calendar',
  components: {ComingSoon},
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: '8 урок',
          data: '9.12.2021',
          text: 'Задание: На вкладке Tasks',
        },
        {
          id: 2,
          title: '9 урок',
          data: '10.12.2021',
          text: 'Задание: Добавить новое свойство для',
        },
      ],
    };
  },
  methods: {
    // date() {
    //   this.item.data.getData()
    // }
  },
};
</script>
<style lang="scss">
#calendar {
  width: 100%;
  margin-top: 2px;
}

#calendar a {
  color: #8e352e;
  text-decoration: none;
}

#calendar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

#calendar li {
  display: block;
  float: left;
  width: 14.342%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-right: -1px;
  margin-bottom: -1px;
}

#calendar ul.weekdays {
  height: 40px;
  background: #686868;
}

#calendar ul.weekdays li {
  text-align: center;
  text-transform: uppercase;
  line-height: 20px;
  border: none !important;
  padding: 10px 6px;
  color: #fff;
  font-size: 13px;
}

#calendar .days li {
  height: 180px;
}

#calendar .days li:hover {
  background: #d3d3d3;
}

#calendar .date {
  text-align: center;
  margin-bottom: 5px;
  padding: 4px;
  background: #333;
  color: #fff;
  width: 20px;
  border-radius: 50%;
  float: right;
}

#calendar .event {
  clear: both;
  display: block;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  margin-top: 40px;
  margin-bottom: 5px;
  line-height: 14px;
  background: #e4f2f2;
  border: 1px solid #b5dbdc;
  color: #009aaf;
  text-decoration: none;
}

#calendar .event-desc {
  color: #666;
  margin: 3px 0 7px 0;
  text-decoration: none;
}

#calendar .other-month {
  background: #f5f5f5;
  color: #666;
}

/* ============================
				Mobile Responsiveness
   ============================*/
@media (max-width: 768px) {
  #calendar .weekdays,
  #calendar .other-month {
    display: none;
  }

  #calendar li {
    height: auto !important;
    border: 1px solid #ededed;
    width: 100%;
    padding: 10px;
    margin-bottom: -1px;
  }

  #calendar .date {
    float: none;
  }
}
</style>
