<template>
  <div>
    <pre>
      {{ $config }}
    </pre>
    <br>
    <br>
    <VTooltip>
      <a>Sponsor me</a>

      <template #popper>
        Help me fund my Open Source work!
      </template>
    </VTooltip>

    <pre>
      {{ $store.state.user }}
    </pre>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'IndexPage',

  data() {
    return {
    }
  },

  asyncData({ $config }) {
    console.log($config);
  },

  created() {
    console.log(this.$config.facebook_api_key);
    console.log(this.$name('Jon Snow'));
  },

  mounted() {
    console.log(this.$dayjs().format())
  },

  computed: {
    ...mapState({
      user: state => state.user
    })
  },
}
</script>
