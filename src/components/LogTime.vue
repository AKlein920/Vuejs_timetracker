<template lang="html">
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input
          type='date'
          class='form-control'
          v-model='timeEntry.date'
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input
          type='number'
          class='form-control'
          v-model='timeEntry.totalTime'
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input
          type='text'
          class='form-control'
          v-model='timeEntry.comment'
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">Save</button>
    <router-link tag='button' to="/time-entries" class='btn btn-danger'>Cancel</router-link>
    <hr>
    </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      timeEntry: {
        user: {
          firstName: 'Abi',
          lastName: 'Klein',
          email: 'abi920@gmail.com',
          image: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/16729155_10209082857964201_6533758091253746673_n.jpg?oh=1a432cf0e89ec22884ef92ec82ef17c0&oe=5A0075D8',
        },
      },
    };
  },
  methods: {
    save() {
      const timeEntry = this.timeEntry;
      if (Object.keys(timeEntry).length > 1) {
        store.commit('timeUpdate', timeEntry);
      }
      this.timeEntry = {
        user: {
          firstName: 'Abi',
          lastName: 'Klein',
          email: 'abi920@gmail.com',
          image: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/16729155_10209082857964201_6533758091253746673_n.jpg?oh=1a432cf0e89ec22884ef92ec82ef17c0&oe=5A0075D8',
        },
      };
    },
  },
};
</script>
