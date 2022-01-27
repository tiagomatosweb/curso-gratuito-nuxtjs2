<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-2xl">
        Transações
      </h1>

      <AppButton @click="isAdding = !isAdding">
        Nova transação
      </AppButton>
    </div>

    <TransactionAdd
      v-if="isAdding"
      @after-add="afterAdd"
      @cancel="isAdding = false"
    />

    <TransactionFilter
      @filter="onFilter"
    />

    <div class="mt-4">
      <div class="space-y-8">
        <div
          v-for="(group, index) in transactionsGrouped"
          :key="index"
        >
          <div class="mb-1">
            <div class="font-bold text-sm">
              {{ formatDate(index) }}
            </div>
          </div>

          <div class="space-y-3">
            <Transaction
              v-for="transaction in group"
              :key="transaction.id"
              :transaction="transaction"
              @update="onUpdate"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groupBy, orderBy } from 'lodash';
import TransactionAdd from '~/components/Transactions/TransactionAdd';
import Transaction from '~/components/Transactions/Transaction';
import AppButton from '~/components/Ui/AppButton';
import TransactionFilter from '~/components/Transactions/TransactionFilter';

export default {
  name: 'IndexPage',

  components: {
    TransactionAdd,
    Transaction,
    AppButton,
    TransactionFilter,
  },

  async asyncData({ store }) {
    return {
      transactions: await store.dispatch('transactions/getTransactions'),
    }
  },

  data() {
    return {
      isAdding: false,
    }
  },

  computed: {
    transactionsGrouped() {
      return groupBy(orderBy(this.transactions, 'date', 'desc'), 'date');
    },
  },

  methods: {
    formatDate(date) {
      return this.$dayjs(date).format('DD/MM/YYYY');
    },
    afterAdd(transaction) {
      this.transactions.push(transaction);
    },
    onUpdate(transaction) {
      const idx = this.transactions.findIndex(o => o.id === transaction.id);
      this.transactions.splice(idx, 1, transaction)
    },
    onFilter(filter) {
      this.$store.dispatch('transactions/getTransactions', filter)
      .then((response) => {
        this.transactions = response;
      })
    },
  },
}
</script>
