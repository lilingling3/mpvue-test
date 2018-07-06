import ContactItem from '@src/components/ContactItem/index.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    ContactItem,
  },
  data: {
    ...mapState({ rootCount: 'count' }),
    contactList: [{
      id: 1,
      name: 'nick.zhong',
      age: 8888
    },
    {
      id: 2,
      name: 'nick.wang',
      age: 9999
    },
    ]
  },
  computed: {
    ...mapState({ rootCount: 'count' }),
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
  }
};